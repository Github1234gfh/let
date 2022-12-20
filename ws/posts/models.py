from django.db import models

class Articeles(models.Model):
	title = models.CharField('Title', max_length=50)
	text = models.TextField('Text', max_length=500)
	date = models.DateField('Date', max_length=10)
	#id = cls

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'News_post'
		verbose_name_plural = 'News_posts'
