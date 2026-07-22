from rest_framework import serializers
from api.models import File
from api.utils.minio import generate_presigned_url_with_key

class FileSerializer(serializers.ModelSerializer):
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = File
        fields = "__all__"
        read_only_fields = ["uploaded_by"]
    
    def get_file_url(self, obj):
        return generate_presigned_url_with_key(obj.relative_path)