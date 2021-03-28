from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, permissions, mixins , viewsets
from . import serializers
from users_manager_app.serializers import RegisterSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework.decorators import permission_classes 

# Create your views here.

 
def index(request, path=''):
    # Rendering the SPA container
    return render(request, 'users_manager_app/index.html')

@permission_classes([])
class RegisterUser(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user,    context=self.get_serializer_context()).data,
            "message": "User Created Successfully. ",
        })

 
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer