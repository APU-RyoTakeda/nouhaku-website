# core/serializers.py
from rest_framework import serializers
from .models import Town, House, Inquiry # models.py からモデルをインポート

class TownSerializer(serializers.ModelSerializer):
    class Meta:
        model = Town
        fields = '__all__' # Townモデルの全てのフィールドをJSONに含める

class HouseSerializer(serializers.ModelSerializer):
    # Townへのリレーションも適切に表示されるように（デフォルトではIDのみ）
    town = serializers.PrimaryKeyRelatedField(queryset=Town.objects.all())

    class Meta:
        model = House
        fields = '__all__' # Houseモデルの全てのフィールドをJSONに含める

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__' # Inquiryモデルの全てのフィールドをJSONに含める
        read_only_fields = ['created_at'] # created_at は自動生成されるので読み取り専用