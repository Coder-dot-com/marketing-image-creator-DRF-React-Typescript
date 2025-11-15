from rest_framework import serializers
from .models import Overlay, UserCreatedImage

class OverlaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Overlay
        fields = '__all__'

class UserCreatedImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCreatedImage
        fields = '__all__'
        read_only_fields = ['created_at']  #is auto-set
