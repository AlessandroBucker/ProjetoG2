from django.contrib import admin
from django.urls import path
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from usuarios.views import login_api, capturar_lead

@csrf_exempt
def login_api(request):
    return JsonResponse({"message": "O Django recebeu seus dados!"}, status=200)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', login_api),
    path('api/leads/', capturar_lead),
]