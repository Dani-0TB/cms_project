from django.urls import path, include
from rest_framework import routers
from .auth.users.views import Root, Login, SignUp


urlpatterns = [
    path('', Root.as_view()),
    path('login', Login.as_view()),
    path('signup', SignUp.as_view())
]
