from django.urls import path
from . import views

urlpatterns = [
    path('saved-listings/', views.saved_listing_list, name='saved_listing_list'),
    path('add-saved-listing/', views.add_saved_listing, name='add_saved_listing'),
]