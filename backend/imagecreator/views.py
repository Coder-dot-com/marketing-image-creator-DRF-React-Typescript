from rest_framework import generics, permissions
from .models import UserCreatedImage
from .serializers import UserCreatedImageSerializer


class UserImageListCreate(generics.ListCreateAPIView):
    serializer_class = UserCreatedImageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Only return images for the logged-in user
        return UserCreatedImage.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
