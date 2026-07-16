import os
import boto3
import uuid
import logging
import time

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import JsonResponse
from datetime import datetime
from rest_framework.permissions import IsAuthenticated
from botocore.config import Config
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from api.models import Recipe
from api.serializers import FileSerializer
from botocore.exceptions import ClientError
from rest_framework import status
from django.http import Http404

ALLOWED_IMAGE_TYPES = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
}

log = logging.getLogger(__name__)

class PresignedUrlView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        object_name = request.data.get('file_name')
        file_type = request.data.get('file_type')
        recipe_id = request.data.get('recipe_id')

        extension = ALLOWED_IMAGE_TYPES.get(file_type)

        if not object_name:
            return JsonResponse({'error', 'file_name is required'}, status=400)
        if not file_type:
            return JsonResponse({'error', 'file_type is required'}, status=400)
        if not extension:
            return JsonResponse({'error', 'Unsupported file type. Allowed: jpeg, png, webp.'}, status=400)

        endpoint_url = os.getenv('AWS_ENDPOINT_URL', "http://localhost:9000")

        access_key = os.getenv('AWS_ACCESS_KEY_ID', 'minio')
        secret_key = os.getenv('AWS_SECRET_ACCESS_KEY', 'miniopassword')
        bucket_name = os.getenv('AWS_STORAGE_BUCKET_NAME', 'bucket1')

        if not endpoint_url:
            endpoint_url = None

        unique_id = uuid.uuid4()
        relative_file_path = f"recipe/{recipe_id}/{unique_id}.{extension}"

        s3_client = boto3.client(
            's3',
            endpoint_url=endpoint_url,
            aws_access_key_id=access_key,
            aws_secret_access_key=secret_key,
            config=Config(signature_version='s3v4'),
            region_name='us-east-1',
        )

        try:
            bucket_name = request.data.get('bucket_name') or os.getenv('AWS_STORAGE_BUCKET_NAME', 'bucket1')

            url = s3_client.generate_presigned_url(
                ClientMethod='put_object',
                Params={
                    'Bucket': bucket_name,
                    'Key': relative_file_path,
                    'ContentType': file_type, 
                },
                ExpiresIn=1800 # URL expires in 30 minutes (1800 seconds)
            )
            log.info(f'Presigned url successfully generated for {relative_file_path}')
            return JsonResponse({ 'file_key': relative_file_path, 'upload_url': url})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

class ConfirmAndAddFileView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        recipe_id = request.data.get('recipe')
        file_key = request.data.get('relative_path')

        try:
            recipe = get_object_or_404(Recipe, id=recipe_id, created_by=request.user)
        except Http404:
            log.info(f'Could not find recipe with id {recipe_id}')
            return JsonResponse({'error': f'Recipe with ID {recipe_id} not found.'}, status=404)

        endpoint_url = os.getenv('MINIO_ENDPOINT_URL', "http://minio:9000")

        access_key = os.getenv('AWS_ACCESS_KEY_ID', 'minio')
        secret_key = os.getenv('AWS_SECRET_ACCESS_KEY', 'miniopassword')
        bucket_name = os.getenv('AWS_STORAGE_BUCKET_NAME', 'bucket1')

        if not endpoint_url:
            endpoint_url = None

        s3_client = boto3.client(
            's3',
            endpoint_url=endpoint_url,
            aws_access_key_id=access_key,
            aws_secret_access_key=secret_key,
            config=Config(signature_version='s3v4'),
            region_name='us-east-1',
        )

        # check if file is in storage before adding reference to db
        try:
            s3_client.head_object(Bucket=bucket_name, Key=file_key)
        except ClientError as e:
            error_code = e.response["Error"]["Code"]
            if error_code == "404":
                log.info(f'Could not find file {file_key} in storage')
                return JsonResponse({"error": "File not found in storage."}, status=400)
            raise 

        serializer = FileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(uploaded_by=request.user)
            log.info(f'File is successfully saved in database')
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        

        