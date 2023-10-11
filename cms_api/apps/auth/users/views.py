from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from .serializers import UserSerializer
from django.shortcuts import get_object_or_404


class Root(APIView):
    def get(self, request):
        return Response({"detail": "This is the root of the API."})

class SignUp(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.filter(username=request.data['username'])
            user.set_password(request.data['password'])
            token = Token.objects.create(user=user)
            return Response({"token": token.key, "username": serializer["username"]})
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

class Login(APIView):
    def post(self, request):
        user = get_object_or_404(User,username=request["username"])
        if not user.check_password(request.data["password"]):
            return Response({"detail": "User not found"}, status.HTTP_404_NOT_FOUND)
        token, created = Token.object.get_or_create(user=user)
        return Response({"token":token})
