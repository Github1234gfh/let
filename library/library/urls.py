
from django.contrib import admin
from django.urls import path, include
from books import views


urlpatterns = [
	path('admin/', admin.site.urls),
	path("accounts/", include("accounts.urls")),
	path("accounts/", include("django.contrib.auth.urls")),
	path("", views.home, name="home"),
	path('add', views.add, name='add'),
	path('category/', include('books.urls')),
]
