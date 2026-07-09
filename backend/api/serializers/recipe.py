from rest_framework import serializers
from api.models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    favorited = serializers.BooleanField(read_only=True)
    class Meta:
        model = Recipe
        fields = "__all__"