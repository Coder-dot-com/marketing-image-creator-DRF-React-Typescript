from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OverlayViewSet, UserCreatedImageViewSet

router = DefaultRouter()
router.register(r'overlays', OverlayViewSet)
router.register(r'images', UserCreatedImageViewSet)

urlpatterns = [
    path('create/', include(router.urls)),
]


