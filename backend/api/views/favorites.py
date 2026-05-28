from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from api.models import Favorites
from api.serializers import FavoritesSerializer

@api_view(['POST'])
def add_favorite(request):
    serializer = FavoritesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ToDo - delete based off of userId AND recipeId
@api_view(['DELETE'])
def unfavorite(request, recipeId):
    try:
        favorited_item = Favorites.objects.get(recipeId=recipeId)
    except Favorites.DoesNotExist:
        return Response({'error': 'Favorited item not found'}, status=status.HTTP_404_NOT_FOUND)
    favorited_item.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
    


