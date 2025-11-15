from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()

class Overlay(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='overlays/')

class UserCreatedImage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    background_color = models.CharField(max_length=7)  # hex color code
    uploaded_image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    overlay_img = models.ForeignKey(Overlay, on_delete=models.SET_NULL, blank=True, null=True)
    text = models.TextField(blank=True)
    font = models.CharField(max_length=100)
    font_size = models.IntegerField()
    text_color = models.CharField(max_length=7)
    created_at = models.DateTimeField(auto_now_add=True)


