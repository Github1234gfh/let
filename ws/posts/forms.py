from django.forms import ModelForm, TextInput, DateInput, Textarea
from .models import Articeles


class ArticelesForm(ModelForm):
	class Meta:
		model = Articeles	
		fields = ['title', 'text', 'date']

		widgets = {
			'title': TextInput(attrs={
				'class': 'fgdf',
				'placeholder': 'Заголовок'
			}),
			'text': Textarea(attrs={
				'class': 'fgdf',
				'placeholder': 'Контент:'
			}),
			'date': DateInput(attrs={
				'class': 'fgdf',
				'placeholder': 'Дата публикации:'
			}),
		}