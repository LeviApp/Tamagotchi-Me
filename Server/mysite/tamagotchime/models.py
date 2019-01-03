from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User


class Tamagotchi(models.Model): 
 id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
 height = models.IntegerField(default=0)
 weight = models.IntegerField(default=0)
 age = models.IntegerField(default=0)
 TDEE = models.IntegerField(default=0)
 user_id = models.ForeignKey(User, on_delete=models.CASCADE)

 Sedentary = 'Sedentary'
 Lightly_Active = 'Lightly Active'
 Moderately_Active ='Moderately Active' 
 Very_Active = 'Very Active'
 ActivityChoices = (
        (Sedentary, 'Sedentary'),
        (Lightly_Active, 'Lightly Active'),
        (Moderately_Active,'Moderately_Active'),
        (Very_Active,'Very Active')
        
    )

 activity_level = models.CharField(
     choices = ActivityChoices,
     default = Moderately_Active,
     max_length = 201,
 )

 FEMALE = 'Female'
 MALE = 'Male'
    
 genderChoices = (
        (FEMALE, 'Female'),
        (MALE, 'MALE'),
        
    )
 gender = models.CharField(
        max_length=6,
        choices=genderChoices,
        default = FEMALE,
    )

# Create your models here.
class FoodItem(models.Model):
    name = models.CharField(max_length=257, null=False)
    sd = models.CharField(max_length=255, )
    group = models.CharField(max_length=255, )
    cf = models.CharField(max_length=255, )
    ff = models.CharField(max_length=255, )
    pf = models.CharField(max_length=255, )
    ru = models.CharField(max_length=255, )

    def __str__(self):
        return "{} - {} - {} - {} - {} - {} - {}".format(self.name, self.sd, self.group, self.cf, self.ff, self.pf, self.ru)

