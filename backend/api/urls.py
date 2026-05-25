from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test, name='test'),
    path('recipes/create/', views.create_recipe, name='create_recipe')
]