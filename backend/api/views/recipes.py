from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import status
from django.db.models import OuterRef, Exists, Value, BooleanField
from api.models import Recipe, Favorites
from api.serializers import RecipeSerializer
from accounts.authentication import CookieJWTAuthentication

@api_view(['POST'])
def create_recipe(request):
    serializer = RecipeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def get_recipes(request):
    user = request.user

    queryset = Recipe.objects.all()

    if user.is_authenticated:
        is_favorited_subquery = Favorites.objects.filter(
            recipe=OuterRef('pk'),
            favorited_by=user,
            favorited=True
        )
        queryset = queryset.annotate(favorited=Exists(is_favorited_subquery))
    else:
        queryset = queryset.annotate(favorited=Value(False, outputfield_BooleanField()))

    serializer = RecipeSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_recipe(request, id):
    try:
        recipe = Recipe.objects.get(id=id)
    except Recipe.DoesNotExist:
        return Response({'error': 'Recipe not found'}, status=status.HTTP_404_NOT_FOUND)
    serializer = RecipeSerializer(recipe)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_recipe(request, id):
    try:
        recipe = Recipe.objects.get(id=id)
    except Recipe.DoesNotExist:
        return Response({'error': 'Recipe not found'}, status=status.HTTP_404_NOT_FOUND)
    recipe.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)