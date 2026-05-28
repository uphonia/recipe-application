from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    servings = models.TextField()
    ingredients = models.TextField()
    instructions = models.TextField()
    image = models.ImageField(upload_to='recipes/', blank=True, null=True)
    blurb = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

# ToDo - add user_id column
class Favorites(models.Model):
    favorited = models.BooleanField()
    recipe_id = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE,
        related_name="favorites"
    )

# ToDo - add user column