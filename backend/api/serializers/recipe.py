from rest_framework import serializers
from api.models import Recipe
from api.serializers.file import FileSerializer
from api.utils.minio import generate_presigned_url_with_key

class RecipeBaseSerializer(serializers.ModelSerializer):
    favorited = serializers.BooleanField(read_only=True)

    class Meta:
        model = Recipe
        fields = ['id', 'name', 'servings', 'ingredients', 'instructions', 'blurb', 'created_at', 'created_by', 'favorited']

class RecipeListSerializer(RecipeBaseSerializer):
    file_url = serializers.SerializerMethodField()

    class Meta(RecipeBaseSerializer.Meta):
        fields = RecipeBaseSerializer.Meta.fields + ['file_url']

    def get_file_url(self, obj):
        return generate_presigned_url_with_key(obj.file_url)

class RecipeDetailSerializer(RecipeBaseSerializer):
    files = FileSerializer(many=True, read_only=True)

    class Meta(RecipeBaseSerializer.Meta):
        fields = RecipeBaseSerializer.Meta.fields + ['files']