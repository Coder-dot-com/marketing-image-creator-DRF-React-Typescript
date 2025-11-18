from django.urls import path
from .views import UserImageListCreate

urlpatterns = [
    path("images/", UserImageListCreate.as_view()),
]
