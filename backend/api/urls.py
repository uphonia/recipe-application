from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('recipes', views.RecipeViewSet, basename='recipe')

urlpatterns = [
    path('', include(router.urls)),
    path('favorites/add_favorite/', views.add_favorite, name='add_favorite'),
    path('favorites/<int:recipeId>/remove_favorite/', views.remove_favorite, name='remove_favorite'),
    path('files/get-upload-url/', views.PresignedUrlView.as_view(), name='get_presigned_upload_url'),
    path('files/add/', views.ConfirmAndAddFileView.as_view(), name='add_file')
]

