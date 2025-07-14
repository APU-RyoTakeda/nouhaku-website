# nouhaku-website/nouhaku-website/backend/urls.py

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # --- ここを修正 ---
    path('api/', include('core.urls')), # 'backend.core.urls' から 'core.urls' に変更
    path('api/', include('bookings.urls')), # 'backend.bookings.urls' から 'bookings.urls' に変更
    # --- ここまで ---
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
