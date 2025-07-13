# backend/booking_api/urls.py

from django.urls import path
from .views import BookingCreateAPIView

urlpatterns = [
    path('bookings/', BookingCreateAPIView.as_view(), name='create-booking'),
]