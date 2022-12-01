
from django.contrib import admin
from django.urls import path, include, re_path
from wjf import views

urlpatterns = [
	path('admin/', admin.site.urls),
	path('', views.index),
]
