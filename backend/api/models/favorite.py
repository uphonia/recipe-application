from django.db import models
from django.conf import settings
from .recipe import Recipe

class Favorite(models.Model):
    recipe = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE,
        related_name="favorited_relations"
    )
    favorited_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="favorites"
    )

    class Meta:
        # Prevent user from favoriting same recipe
        unique_together = ('recipe', 'favorited_by')
    def __str__(self):
        return f"{self.favorited_by.username} favorited {self.recipe.title}"