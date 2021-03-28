from django.urls import re_path ,path , include
from . import views
from rest_framework.routers import DefaultRouter
from users_manager_app.views import RegisterUser

router = DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('api/register/', RegisterUser.as_view()),
    path('api/', include(router.urls)),
    re_path('' , views.index),
]
