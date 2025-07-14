# nouhaku-website/nouhaku-website/backend/bookings/serializers.py

from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    """
    BookingモデルをJSON形式にシリアライズ/デシリアライズするためのシリアライザー
    """
    class Meta:
        model = Booking
        fields = '__all__' # モデルの全てのフィールドを対象にする
        # 必要に応じて、読み取り専用フィールドや書き込み専用フィールドを指定できます
        # read_only_fields = ['created_at']
