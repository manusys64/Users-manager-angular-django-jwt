from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from . import serializers
from users_manager_app.serializers import UserSerializer

# Create your views here.

 
def index(request, path=''):
    # Rendering the SPA container
    return render(request, 'users_manager_app/index.html')


 
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer