from rest_framework import serializers
from api.models import File

class FileSerializer(serializers.ModelSerializer):
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = File
        fields = "__all__"
        read_only_fields = ["uploaded_by"]
    
    def get_file_url(self, obj):
        return generate_presigned_url_with_key(obj.relative_file_path)