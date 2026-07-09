from django.db import models
from django.conf import settings
from .recipe import Recipe

class Favorites(models.Model):
    favorited = models.BooleanField(default=True)
    recipe = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE,
        related_name="favorites"
    )
    favorited_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="favorites"
    )