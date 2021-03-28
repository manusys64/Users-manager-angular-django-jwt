from django.contrib.auth.models import User
# from django.contrib.auth.models import Permission
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    # groups = serializers.PrimaryKeyRelatedField(many=True, queryset=Permission.objects.all())

    class Meta:
        model = User
        fields = ('id', 'email' ,'username', 'first_name', 'last_name')
