from django.urls import path, include
from rest_framework import routers
from .auth.users import views


urlpatterns = [
    path('', views.Root.as_view()),
    path('login', views.Login.as_view()),
    path('signup', views.SignUp.as_view()),
    path('listUsers', views.ListUsers.as_view()),
    path('testToken', views.TestToken.as_view())
]
