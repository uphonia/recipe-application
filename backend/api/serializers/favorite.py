from rest_framework import serializers
from api.models import Favorite

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = "__all__"

        extra_kwargs = {
            'favorited_by': {'read_only': True}
        }