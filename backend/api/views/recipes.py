from rest_framework.exceptions import PermissionDenied
from rest_framework import viewsets
from api.serializers import RecipeBaseSerializer, RecipeListSerializer, RecipeDetailSerializer
from rest_framework.permissions import IsAuthenticated
from api.models import Recipe, Favorite, File
from django.db.models import OuterRef, Exists, Subquery

class RecipeViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeBaseSerializer
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action == 'list':
            return RecipeListSerializer
        if self.action == 'retrieve':
            return RecipeDetailSerializer
        return RecipeBaseSerializer

    def get_queryset(self):
        user = self.request.user

        is_favorited_subquery = Favorite.objects.filter(
            recipe=OuterRef('pk'),
            favorited_by=user,
        )

        if self.action == 'list':
            file_url_subquery = File.objects.filter(
                recipe=OuterRef('pk'),
            ).order_by('-created_at').values('relative_path')[:1]

            return Recipe.objects.annotate(
                favorited=Exists(is_favorited_subquery),
                file_url=Subquery(file_url_subquery)
            )
        
        if self.action == 'retrieve':
            return Recipe.objects.annotate(
                favorited=Exists(is_favorited_subquery),
            ).prefetch_related('files')

        return Recipe.objects.filter(created_by=user)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)    
