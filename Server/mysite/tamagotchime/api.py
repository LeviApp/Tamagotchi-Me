from rest_framework import serializers, viewsets
from .models import Tamagotchi

class TamagotchiSeralizer(serializers.HyperLinkedModelSerializer):

    class Meta:
        model = Tamagotchi
        fields =('gender', 'age', 'weight','height')
class TamagotchiViewSet(viewsets.ModelViewSet):
    serializers_class = TamagotchiSeralizer
    queryset = Tamagotchi.objects.all()