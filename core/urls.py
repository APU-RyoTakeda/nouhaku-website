# core/urls.py

from django.urls import path # path は必要ですが、今回は router.urls でカバーされるため直接は使わないかも
from rest_framework import routers
from . import views # 後でAPIビューをインポートするために追加

# Django REST FrameworkのDefaultRouterを使用して、APIのURLを自動生成
router = routers.DefaultRouter()
router.register(r'towns', views.TownViewSet) # コメントアウトを外す
router.register(r'houses', views.HouseViewSet) # コメントアウトを外す
router.register(r'inquiries', views.InquiryViewSet) # コメントアウトを外す


urlpatterns = [
    # path('api/', include(router.urls)), # Project urls.pyで include済みの場合は不要
    # 必要に応じて、ルーターでカバーされないカスタムURLパターンをここに追加できます
]
urlpatterns += router.urls # DefaultRouterで生成されたURLを追加