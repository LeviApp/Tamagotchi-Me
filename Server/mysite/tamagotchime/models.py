from django.db import models

# Create your models here.
class FoodItem(models.Model):
    name = models.CharField(max_length=255, null=False)
    sd = models.CharField(max_length=255, )
    group = models.CharField(max_length=255, )
    cf = models.CharField(max_length=255, )
    ff = models.CharField(max_length=255, )
    pf = models.CharField(max_length=255, )
    ru = models.CharField(max_length=255, )

    def __str__(self):
        return "{} - {} - {} - {} - {} - {} - {}".format(self.name, self.sd, self.group, self.cf, self.ff, self.pf, self.ru)