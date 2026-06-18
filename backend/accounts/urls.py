from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenBlacklistView

urlpatterns = [
    path('signup/', views.SignUpView.as_view(), name="signup"),
    path('logout/', TokenBlacklistView.as_view(), name="logout")
]