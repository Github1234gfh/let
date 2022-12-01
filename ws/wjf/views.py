from django.shortcuts import render


def index(request):
	context = {
		"data": [1]
	}
	return render(request, 'index.html', context = context)
