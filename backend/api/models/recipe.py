from django.db import models
from django.conf import settings

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    servings = models.PositiveIntegerField(null=True, blank=True)
    ingredients = models.TextField()
    instructions = models.TextField()
    blurb = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="recipes"
    )

    def __str__(self):
        return self.name