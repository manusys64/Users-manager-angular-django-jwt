from django.contrib.auth.models import User
# from django.contrib.auth.models import Permission
from rest_framework import serializers, status
from rest_framework.response import Response


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username', 'email' ,'password','first_name' , 'last_name')
        extra_kwargs = {
            'password':{'write_only': True},
        }
    def create(self, validated_data):
        data = {}
        if 'first_name' in validated_data:
            data['first_name'] = validated_data['first_name']
        if 'last_name' in validated_data:
            data['last_name'] = validated_data['last_name']
        # user = User.objects.create_user(validated_data['username'],validated_data['email'],validated_data['first_name'],validated_data['last_name'],     password = validated_data['password'] ,  )
        user = User.objects.create_user(validated_data['username'],
        email=validated_data['email'],
        password=validated_data['password'] , **data)
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email' ,'username', 'first_name', 'last_name' , 'password' , 'is_superuser')
    # def create(self, validated_data):
    #     if "password" in validated_data:
    #         from django.contrib.auth.hashers import make_password
    #         validated_data["password"] = make_password(validated_data["password"])
    #         super().create(validated_data)
    #         return Response( status=status.HTTP_201_CREATED)

    def update(self, instance, validated_data):
        if "password" in validated_data:
            from django.contrib.auth.hashers import make_password
            validated_data["password"] = make_password(validated_data["password"])
        return super().update(instance, validated_data)   
