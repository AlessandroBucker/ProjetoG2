from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Lead

# 1. Certifique-se de que esta função existe:
@csrf_exempt
def login_api(request):
    if request.method == 'POST':
        # Sua lógica de login aqui (ou uma versão temporária para o erro sumir)
        return JsonResponse({"message": "Login funcionando"}, status=200)
    return JsonResponse({"error": "Método não permitido"}, status=405)

# 2. E a nossa nova função de Leads:
@csrf_exempt
def capturar_lead(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            Lead.objects.create(
                nome=data.get('nome'),
                email=data.get('email'),
                telefone=data.get('telefone'),
                servico=data.get('servico')
            )
            return JsonResponse({"status": "sucesso"}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Método não permitido"}, status=405)