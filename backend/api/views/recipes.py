from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.db.models import OuterRef, Exists, Value, BooleanField, Subquery
from api.models import Recipe, Favorite, File
from api.serializers import RecipeBaseSerializer, RecipeListSerializer, RecipeDetailSerializer

@api_view(['POST'])
def create_recipe(request):
    serializer = RecipeBaseSerializer(data=request.data)
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

    file_url_subquery = File.objects.filter(
        recipe=OuterRef('pk'),
    ).order_by('-created_at').values('relative_path')[:1]

    queryset = queryset.annotate(favorited=Exists(is_favorited_subquery), file_url=Subquery(file_url_subquery))

    serializer = RecipeListSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_recipe(request, recipeId):
    user = request.user

    is_favorited_subquery = Favorite.objects.filter(
        recipe=OuterRef('pk'),
        favorited_by=user,
    )

    recipe = Recipe.objects.filter(pk=recipeId).annotate(
        favorited=Exists(is_favorited_subquery),
    ).prefetch_related('files').first()

    if recipe is None:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RecipeDetailSerializer(recipe)
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