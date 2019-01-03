from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def landing(request):
    return HttpResponse('Hello, world. This is the TamagotchiMe landing page.')

def dashboard(request):
    return HttpResponse('Hello, world. This is the TamagotchiMe dashboard.')

def journal(request):
    return HttpResponse('Hello, world. This is the TamagotchiMe journal.')

def settings(request):
    return HttpResponse('Hello, world. This is the TamagotchiMe settings.')