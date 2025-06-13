from django.shortcuts import render

# Create your views here.
# core/views.py
from rest_framework import viewsets
from .models import Town, House, Inquiry
from .serializers import TownSerializer, HouseSerializer, InquirySerializer

class TownViewSet(viewsets.ModelViewSet):
    queryset = Town.objects.all() # 取得するTownオブジェクトのクエリセット
    serializer_class = TownSerializer # 使用するシリアライザー

class HouseViewSet(viewsets.ModelViewSet):
    queryset = House.objects.all() # 取得するHouseオブジェクトのクエリセット
    serializer_class = HouseSerializer # 使用するシリアライザー

class InquiryViewSet(viewsets.ModelViewSet):
    queryset = Inquiry.objects.all() # 取得するInquiryオブジェクトのクエリセット
    serializer_class = InquirySerializer # 使用するシリアライザー