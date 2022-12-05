from django import forms

class UserForms(forms.Form):
    name = forms.CharField()
    email = forms.CharField()
    call = forms.IntegerField()
    soft = forms.CharField()
    text = forms.CharField()


