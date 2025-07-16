# nouhaku-website/nouhaku-website/backend/bookings/apps.py

from django.apps import AppConfig


class BookingsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField' # settings.pyで設定済みであれば不要ですが、アプリ固有の設定として
    name = 'bookings' # アプリケーション名
    verbose_name = '予約' # 管理画面などで表示される名前
