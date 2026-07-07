from django.urls import path
from . import views

urlpatterns = [
    path('recipes/create/', views.create_recipe, name='create_recipe'),
    path('recipes/', views.get_recipes, name='get_recipes'),
    path('recipes/<int:recipeId>/', views.get_recipe, name='get_recipe'),
    path('recipes/<int:recipeId>/delete/', views.delete_recipe, name='delete_recipe'),
    path('favorites/add_favorite/', views.add_favorite, name='add_favorite'),
    path('favorites/<int:recipeId>/remove_favorite/', views.remove_favorite, name='remove_favorite'),
]