from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
from .serializers import SignUpSerializer 
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny

User = get_user_model()

class SignUpView(APIView):
    def post(self, request):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save() # creates user in db
            refresh = RefreshToken.for_user(user)

            user_data = SignUpSerializer(user).data

            response = Response({
                "user": user_data
            }, status=status.HTTP_201_CREATED)

            response.set_cookie(
                key="access",
                value=str(refresh.access_token),
                httponly=True,
                secure=False, # check to True for prod
                samesite="Lax",
                path="/",
            )
            response.set_cookie(
                key="refresh",
                value=str(refresh),
                httponly=True,
                secure=False,
                samesite="Lax",
                path="/",
            )

            return response

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogInView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({
                "error": "No account found with that username."
            }, status=status.HTTP_404_NOT_FOUND)

        if not user.check_password(password):
            return Response({
                "error": "Incorrect password"
            }, status=status.HTTP_401_UNAUTHORIZED)

        if not user.is_active:
            return Response({
                "error": "This account is inactive."
        }, status=status.HTTP_403_FORBIDDEN)
        
        refresh = RefreshToken.for_user(user)
        response = Response({ "id": user.id}, status=200)

        response.set_cookie(
            key="access",
            value=str(refresh.access_token),
            httponly=True,
            secure=False,
            samesite="Lax",
            path="/",
        )
        response.set_cookie(
            key="refresh",
            value=str(refresh),
            httponly=True,
            secure=False,
            samesite="Lax",
            path="/",
        )
        return response

class LogOutView(APIView):
    def post(self, request):
        refresh_token = request.COOKIES.get("refresh")

        if refresh_token:
            try:
                token = RefreshToken(refresh_token)
                token.blacklist()
            except Exception:
                pass

        response = Response({"message": "Logged out successfully"}, status=200)
        response.delete_cookie("access", path="/")
        response.delete_cookie("refresh", path="/")
        return response

class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)