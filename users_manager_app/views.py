from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
 
def index(request, path=''):
    # Rendering the SPA container
    return render(request, 'users_manager_app/index.html')