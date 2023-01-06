
from django.contrib import admin
from django.urls import path, include
from books.views import *


urlpatterns = [
	path('admin/', admin.site.urls),
	path("accounts/", include("accounts.urls")),
	path("accounts/", include("django.contrib.auth.urls")),
	path("", BooksView.as_view(), name="home"),
	# path('add/', views.add, name='add'),
	# path('delete/<int:pk>', views.Delete.as_view(), name='delete'),
	# path('edit/<int:pk>', views.Edit.as_view(), name='edit')
]
