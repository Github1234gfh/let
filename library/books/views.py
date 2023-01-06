from django.shortcuts import render, redirect
from .models import Category, Books
# from .forms import BookForm
from django.views.generic import UpdateView, DeleteView

from rest_framework.views import APIView
from .serializer import Serializer
from rest_framework.response import Response
 
class BooksView(APIView):
	def get(self, request):
		# b = Books.objects.all()
		out = []
		for i in Books.objects.all():
			elem = {}
			elem['id'] = i.id
			elem['title'] = i.name_book
			elem['autor'] = i.autor
			elem['date'] = i.date
			elem['cut_id'] = i.category_id
			out.append(elem)
		return Response(out)
		# return Response({'post': Serializer(b, many=True).data})

	def post(self, request):
		serializer = Serializer(data=request.data)
		serializer.is_valid(raise_exception=True)

		post_new = Books.objects.create(
			name_book=request.data['name_book'],
			autor=request.data['autor'],
			date=request.data['date'],
			category_id=request.data['category_id'],
		)

		return Response({'POST': Serializer(post_new).data})



# def home(request):
# 	books = Books.objects.all()
# 	nemu = Category.objects.all()
# 	return render(request, 'books/home.html', {'menu': nemu, 'books': books})

# class Edit(UpdateView): 
# 	model = Books
# 	template_name = 'books/edit.html'
# 	form_class = BookForm

# class Delete(DeleteView):
# 	model = Books
# 	template_name = 'books/delete.html'
# 	success_url = '/'
# 	context_object_name = 'delete'

# def add(request):
# 	error = ''
# 	if request.method == 'POST':
# 		form = BookForm(request.POST)
# 		if form.is_valid():
# 			form.save()
# 			return redirect('/')
# 		else:
# 			error = 'Форма была не верна заполнена!'
# 	form = BookForm
# 	data= {
# 		'form': form,
# 		'error': error
# 	}
# 	return render(request, 'books/add.html',  data)



