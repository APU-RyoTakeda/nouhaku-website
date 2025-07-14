# nouhaku-website/nouhaku-website/backend/bookings/urls.py

from rest_framework.routers import DefaultRouter
from .views import BookingViewSet

router = DefaultRouter()
router.register(r'bookings', BookingViewSet) # /api/bookings/ エンドポイントを作成

urlpatterns = router.urls
