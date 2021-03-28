from django.contrib.auth.models import User
# from django.contrib.auth.models import Permission
from rest_framework import serializers


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','password','first_name', 'last_name')
        extra_kwargs = {
            'password':{'write_only': True},
        }
    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],     password = validated_data['password'] )
        return user

class UserSerializer(serializers.ModelSerializer):
    # groups = serializers.PrimaryKeyRelatedField(many=True, queryset=Permission.objects.all())

    class Meta:
        model = User
        fields = ('id', 'email' ,'username', 'first_name', 'last_name')
