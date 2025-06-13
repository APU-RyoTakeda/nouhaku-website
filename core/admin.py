# nouhaku-website/core/admin.py
from django.contrib import admin
from .models import Town, House, Inquiry # 定義したモデルをインポート

# モデルを管理サイトに登録
admin.site.register(Town)
admin.site.register(House)
admin.site.register(Inquiry)