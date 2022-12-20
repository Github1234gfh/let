from django.shortcuts import render
from .models import Articeles
from .forms import ArticelesForm
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import CreateView

class RegisterUser(CreateView):
	form_class = UserCreationForm
	template_name = 'posts/regisration.html'
	success_url = reverse_lazy('login')




def login(request):
	return HttpResponse(12345454)

def index(request):
	news = Articeles.objects.all()
	return render(request, 'posts/index.html', {'data': news})

def edit(request, id):
	try:
		form = Articeles.objects.get(id=id)
		if request.method == 'POST':
			form.text = request.POST.get('text')
			form.save()
			return HttpResponseRedirect('/')
		return render(request, 'posts/edit.html', {'data': form})
	except:
		return HttpResponse('Такой статьи нет')

def delete(request,id):
	try:
		news = Articeles.objects.get(id=id)
		news.delete()
		return HttpResponseRedirect('/')
	except:
		return HttpResponse('Такой статьи нет')

def form(request):
	error = ''
	if request.method == 'POST':
		form = ArticelesForm(request.POST)
		if form.is_valid():
			form.save()
			return HttpResponseRedirect('/')
		else:
			error = 'Форма была не верной'

	form = ArticelesForm()

	data = {
		'form': form, 
		'error': error,
	}

	return render(request, 'posts/form.html', data)