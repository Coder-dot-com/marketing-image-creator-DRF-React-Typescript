from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()


class UserCreatedImage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    background_color = models.CharField(max_length=7)  # hex color code
    uploaded_image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    border_color = models.CharField(max_length=7)  # hex color code
    text = models.TextField(blank=True)
    font = models.CharField(max_length=100)
    font_size = models.IntegerField()
    text_color = models.CharField(max_length=7)
    created_at = models.DateTimeField(auto_now_add=True)
    final_image = models.ImageField(upload_to='final_images/', blank=True, null=True)


