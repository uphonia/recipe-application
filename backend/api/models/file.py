from django.db import models
from django.conf import settings
from .recipe import Recipe

class File(models.Model):
    mime_type = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    relative_path = models.CharField(max_length=255)
    uploaded_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="files"
    )
    recipe = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE,
        related_name="files"
    )
