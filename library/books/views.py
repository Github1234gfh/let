from django.shortcuts import render
from .models import Category, Books

def home(request):
	books = Books.objects.all()
	nemu = Category.objects.all()
	return render(request, 'books/home.html', {'menu': nemu, 'books': books})

def add(request):
	return render(request, 'books/add.html', )

def book_category(request, id):
	books = Books.objects.filter(category = Category.objects.get(id = id))
	manu = Category.objects.all()
	return render(request, 'books/home.html', {'books': books, 'menu': manu})