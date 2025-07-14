# core/admin.py
from django.contrib import admin
from .models import Town, House, Inquiry, HomePageContent, FoodExperience, Activity # 新しいモデルをインポート

# 既存の登録
admin.site.register(Town)
admin.site.register(House)
admin.site.register(Inquiry)

# 新しく追加するモデルの登録
admin.site.register(HomePageContent)
admin.site.register(FoodExperience)
admin.site.register(Activity)