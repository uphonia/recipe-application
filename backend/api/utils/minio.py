import boto3
from botocore.client import Config
from django.conf import settings

s3_client = boto3.client(
    's3',
    endpoint_url=settings.AWS_S3_EXTERNAL_HOST,
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
    config=Config(signature_version='s3v4'),
    region_name='us-east-1',  # required by boto3, unused by MinIO
)

def generate_presigned_url_with_key(key, expires_in=3600):
    if not key:
        return None
    return s3_client.generate_presigned_url(
        'get_object',
        Params={'Bucket': settings.AWS_STORAGE_BUCKET_NAME, 'Key': key},
        ExpiresIn=expires_in,
    )