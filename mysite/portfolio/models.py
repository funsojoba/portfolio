from django.db import models

# Create your models here.
class Email(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    subject = models.CharField(max_length=200)
    message = models.TextField(blank=True)

    def __str__(self):
        return self.subject