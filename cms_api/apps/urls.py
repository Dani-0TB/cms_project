from django.urls import path, include
from rest_framework import routers
from .auth.users.views import UserViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls))
]
