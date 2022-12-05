from django.shortcuts import render
from .forms import UserForms
from django.http import HttpResponse

def index(request):
	if request.method == 'POST':
		name = request.POST
		call = request.POST.get('call')
		return HttpResponse(f'{name} , {call}')
	userfom = UserForms()
	return render(request, 'index.html', {'form': userfom})
