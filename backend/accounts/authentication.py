from rest_framework_simplejwt.authentication import JWTAuthentication, InvalidToken, TokenError

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        access_token = request.COOKIES.get("access")

        if not access_token:
            return None

        try:
            validated_token = self.get_validated_token(access_token)
        except (InvalidToken, TokenError):
            return None
            
        return self.get_user(validated_token), validated_token