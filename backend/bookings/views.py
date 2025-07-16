# nouhaku-website/nouhaku-website/backend/bookings/views.py

from rest_framework import viewsets
from .models import Booking
from .serializers import BookingSerializer

class BookingViewSet(viewsets.ModelViewSet):
    """
    Bookingモデルに対するCRUD操作を提供するAPIビューセット
    """
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
