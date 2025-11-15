from rest_framework import viewsets
from .models import Overlay, UserCreatedImage
from .serializers import OverlaySerializer, UserCreatedImageSerializer

class OverlayViewSet(viewsets.ModelViewSet):
    queryset = Overlay.objects.all()
    serializer_class = OverlaySerializer

class UserCreatedImageViewSet(viewsets.ModelViewSet):
    queryset = UserCreatedImage.objects.all()
    serializer_class = UserCreatedImageSerializer
