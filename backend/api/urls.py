from django.urls import path
from . import views

urlpatterns = [
    path('recipes/create/', views.create_recipe, name='create_recipe'),
    path('recipes/', views.get_recipes, name='get_recipes'),
    path('recipes/<int:id>/', views.get_recipe, name='get_recipe'),
    path('recipes/<int:id>/delete/', views.delete_recipe, name='delete_recipe'),
    path('favorites/favorite/', views.add_favorite, name='add_favorite'),
    path('favorites/unfavorite/', views.unfavorite, name='unfavorite'),
]