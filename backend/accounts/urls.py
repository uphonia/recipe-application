from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenBlacklistView

urlpatterns = [
    path('signup/', views.SignUpView.as_view(), name="signup"),
    path('login/', views.LogInView.as_view(), name='login'),
    path('logout/', views.LogOutView.as_view(), name="logout"),
    path('me/', views.MeView.as_view(), name="me")
]