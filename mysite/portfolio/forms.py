from django.forms import ModelForm
from .models import Email


class CustomerForm(ModelForm):
    class Meta:
        model =  Email
        fields = ['name', 'email', 'subject', 'message']