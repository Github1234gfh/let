from django.db import models


class Category(models.Model):
	name = models.CharField('Категории', max_length=50)

	def __str__(self):
		return self.name

class Books(models.Model):
	name_book = models.CharField('Назване книги', max_length=50)
	autor = models.CharField('Автор', max_length=100)
	date = models.DateField('Дата издания')
	category = models.ForeignKey(Category, on_delete=models.CASCADE)

	def __str__(self):
		return self.name_book