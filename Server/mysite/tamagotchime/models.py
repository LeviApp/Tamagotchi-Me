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
 Very Active = 'Very Active'
 ActivityChoices = (
        (Sedentary, 'Sedentary'),
        (Lightly_Active, 'Lightly Active'),
        (Moderately_Active,'Moderately_Active'),
        (Very_Active,'Very Active')
        
    )

 activity_level = models.CharField(
     choices = ActivityChoices,
     default = Moderately_Active,
 
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