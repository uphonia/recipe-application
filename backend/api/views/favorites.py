from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from api.models import Favorites
from api.serializers import FavoritesSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_favorite(request):
    serializer = FavoritesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(favorited_by=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_favorite(request, recipeId):
    user = request.user
    try:
        favorited_item = Favorites.objects.get(recipe_id=recipeId, favorited_by=user)
    except Favorites.DoesNotExist:
        return Response({'error': 'Favorited item not found'}, status=status.HTTP_404_NOT_FOUND)

    favorited_item.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
    


