from rest_framework import serializers
from api.models import Favorites

class FavoritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields = "__all__"

        extra_kwargs = {
            'favorited': {'required': False, 'default': True},
            'favorited_by': {'read_only': True}
        }