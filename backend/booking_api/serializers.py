# backend/booking_api/serializers.py

from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__' # Bookingモデルの全てのフィールドを対象にする