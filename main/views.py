from django.shortcuts import render

def main(request):
    return render(request, 'main.html')

def poems(request):
    return render(request, 'poems.html')

def gifts(request):
    return render(request, 'gifts.html')

def letters(request):
    return render(request, 'letters.html')
