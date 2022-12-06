from django.shortcuts import render

from django.http import HttpResponse, HttpResponseRedirect

def index(request):
	if request.method == 'POST':
		return HttpResponseRedirect('appointment/')
	return render(request, 'index.html')

def appointment(request):
	name = request.POST.get('name')
	email = request.POST.get('email')
	call = request.POST.get('call')
	sel = request.POST.get('sel')
	text = request.POST.get('text')

	return HttpResponse(f''' 
		<p> name - {name}</p>
		<p> email - {email}</p>
		<p> call - {call}</p>
		<p> sel - {sel}</p>
		<p> text - {text}</p>
	''')