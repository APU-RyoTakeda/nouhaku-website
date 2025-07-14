# nouhaku-website/nouhaku-website/backend/backend/urls.py

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')), # coreアプリのURLを含める (既存のまま)
    # --- ここから追加 ---
    path('api/', include('bookings.urls')), # bookingsアプリのURLを/api/以下に含める
    # --- ここまで ---
]

# DEBUGモードの場合のみ、メディアファイルを配信する設定を追加 (既存のまま)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
