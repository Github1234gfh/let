from django.shortcuts import render
from .search_func import find_word
from .parser_currency import main


def index(request):
    context = main()
    return render(request, 'search/index.html', context=context)

def search(request):
    data = find_word(request.GET['query'])
    context = {
        "data": data,
        'word': request.GET['query'],
        'count_sentences': len(data),
        }
    return render(request, 'search/search.html', context=context)