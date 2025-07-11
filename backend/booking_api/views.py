# backend/booking_api/views.py

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import BookingSerializer

class BookingCreateAPIView(APIView):
    def post(self, request, format=None):
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED) # 成功時は201 Createdを返す
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # バリデーションエラー時は400 Bad Requestを返す