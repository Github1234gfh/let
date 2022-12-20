
from django.contrib import admin
from django.urls import path, include, re_path
from posts import views

urlpatterns = [
	path('admin/', admin.site.urls),
	path('', views.index),
	path('accounts/', include('django.contrib.auth.urls')),
	path('register/', views.RegisterUser.as_view(), name='register'),
	path('login/', name='login'),
	path('form/', views.form),
	path('edit/<int:id>/', views.edit),
	path('delete/<int:id>/', views.delete)
]
