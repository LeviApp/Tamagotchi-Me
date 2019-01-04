from django.urls import path

from .views import FoodItemTest, landing, dashboard, journal, settings

urlpatterns = [
    path('', landing, name='landing'),
    path('dashboard/', dashboard, name='dashboard'),
    path('dashboard/journal/', journal, name='journal'),
    path('dashboard/settings/', settings, name='settings'),
    path('fooditemtest/', FoodItemTest.as_view(), name='fooditemtest'),
]