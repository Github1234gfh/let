from django.shortcuts import render

from django.http import HttpResponse

def index(request):
	if request.method == 'POST':
		name = request.POST.get('name')
		call = request.POST.get('call')
		return HttpResponse(f'{name} , {call}')
	return render(request, 'index.html')
