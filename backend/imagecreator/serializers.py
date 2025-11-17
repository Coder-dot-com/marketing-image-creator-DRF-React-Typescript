import base64
from django.core.files.base import ContentFile
from rest_framework import serializers
from .models import UserCreatedImage

class UserCreatedImageSerializer(serializers.ModelSerializer):
    uploaded_image_base64 = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = UserCreatedImage
        fields = '__all__'
        read_only_fields = ['created_at', 'user']

    def create(self, validated_data):
        image_data = validated_data.pop("uploaded_image_base64", None)
        instance = super().create(validated_data)

        if image_data:
            format, imgstr = image_data.split(';base64,')
            ext = format.split('/')[-1]
            instance.final_image = ContentFile(base64.b64decode(imgstr), f"{instance.user.id}.{ext}")
            instance.save()

        return instance
