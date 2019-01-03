from django.urls import path

from . import views

urlpatterns = [
    path('', views.landing, name='landing'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('dashboard/journal/', views.journal, name='journal'),
    path('dashboard/settings/', views.settings, name='settings'),
]