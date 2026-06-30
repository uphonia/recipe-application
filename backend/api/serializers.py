from rest_framework import serializers
from .models import Recipe, Favorites

class RecipeSerializer(serializers.ModelSerializer):
    favorited = serializers.BooleanField(read_only=True)
    class Meta:
        model = Recipe
        fields = "__all__"

class FavoritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields = "__all__"

        extra_kwargs = {
            'favorited': {'required': False, 'default': True},
            'favorited_by': {'read_only': True}
        }