# core/urls.py
from django.urls import include, path # 'path' も必要です
from rest_framework.routers import DefaultRouter
from . import views # views.pyからAPIビューセットをインポート

# Django REST FrameworkのDefaultRouterを使用して、APIのURLを自動生成
router = DefaultRouter()
router.register(r'towns', views.TownViewSet)
router.register(r'houses', views.HouseViewSet)
router.register(r'inquiries', views.InquiryViewSet)

# router.urls に、登録された全てのViewSetのURLが含まれます
# 例: /towns/, /houses/, /inquiries/, /towns/<id>/ など
urlpatterns = [
    # DefaultRouterで生成されたURLを全て含める
    # これにより、/api/ の後に /towns, /houses などが続くようになります
    path('', include(router.urls)),

    # もしDRFの認証用URL（例: ログイン/ログアウト）を組み込みたい場合
    # path('auth/', include('rest_framework.urls', namespace='rest_framework')),
]