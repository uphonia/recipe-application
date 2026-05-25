from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test, name='test'),
    path('recipes/create/', views.create_recipe, name='create_recipe'),
    path('recipes/', views.get_recipes, name='get_recipes'),
    path('recipes/<int:id>/', views.get_recipe, name='get_recipe'),
    path('recipes/<int:id>/delete/', views.delete_recipe, name='delete_recipe')
]