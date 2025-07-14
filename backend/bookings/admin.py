# nouhaku-website/nouhaku-website/backend/bookings/admin.py
# Django管理画面でBookingモデルを管理するための設定

from django.contrib import admin
from .models import Booking # 同じアプリ内のmodels.pyからBookingモデルをインポート

@admin.register(Booking) # Bookingモデルを管理サイトに登録するためのデコレータ
class BookingAdmin(admin.ModelAdmin):
    """
    Bookingモデルの管理画面表示設定
    """
    # 管理画面の一覧表示で表示するフィールド
    list_display = ('last_name', 'first_name', 'check_in_date', 'lodging', 'created_at')
    
    # 検索ボックスで検索対象とするフィールド
    search_fields = ('last_name', 'first_name', 'email', 'phone_number')
    
    # サイドバーに表示されるフィルタリングオプション
    list_filter = ('lodging', 'check_in_date', 'gender')
    
    # 日付で階層的にフィルタリングするための設定
    date_hierarchy = 'check_in_date'