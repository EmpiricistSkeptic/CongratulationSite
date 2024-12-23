from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('poems/', views.poems, name='poems'),
    path('gifts/', views.gifts, name='gifts'), 
    path('letters/', views.letters, name='letters'),
]
