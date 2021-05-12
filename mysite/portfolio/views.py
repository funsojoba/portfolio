from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import CustomerForm

# Create your views here.

def index(request):
    form = CustomerForm()
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
    context = {'form':form}
    print(request.POST)
    return render(request, 'portfolio/index.html', context=context)
