from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.db.models import OuterRef, Exists, Value, BooleanField
from api.models import Recipe, Favorite
from api.serializers import RecipeSerializer

@api_view(['POST'])
def create_recipe(request):
    serializer = RecipeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_recipes(request):
    user = request.user

    queryset = Recipe.objects.all()

    is_favorited_subquery = Favorite.objects.filter(
        recipe=OuterRef('pk'),
        favorited_by=user,
    )
    queryset = queryset.annotate(favorited=Exists(is_favorited_subquery))

    serializer = RecipeSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_recipe(request, recipeId):
    try:
        recipe = Recipe.objects.get(id=recipeId)
    except Recipe.DoesNotExist:
        return Response({'error': 'Recipe not found'}, status=status.HTTP_404_NOT_FOUND)

    is_favorited = Favorite.objects.filter(recipe=recipe, favorited_by=request.user)
    recipe.favorited = is_favorited

    serializer = RecipeSerializer(recipe)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_recipe(request, recipeId):
    try:
        recipe = Recipe.objects.get(id=recipeId)
    except Recipe.DoesNotExist:
        return Response({'error': 'Recipe not found'}, status=status.HTTP_404_NOT_FOUND)
    recipe.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)