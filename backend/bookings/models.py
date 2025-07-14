# nouhaku-website/nouhaku-website/backend/bookings/models.py

from django.db import models

class Booking(models.Model):
    """
    予約情報を格納するモデル
    """
    # 日程情報
    check_in_date = models.DateField(verbose_name="チェックイン日")
    check_out_date = models.DateField(verbose_name="チェックアウト日")
    check_in_time = models.CharField(max_length=10, verbose_name="チェックイン時間") # 例: "15:00"
    lodging = models.CharField(max_length=100, verbose_name="宿")

    # ご利用人数
    adult_male = models.IntegerField(default=0, verbose_name="大人（男性）")
    adult_female = models.IntegerField(default=0, verbose_name="大人（女性）")
    child_7_12 = models.IntegerField(default=0, verbose_name="7～12歳")
    child_under_6 = models.IntegerField(default=0, verbose_name="6歳以下")

    # 予約者情報
    last_name = models.CharField(max_length=50, verbose_name="申込者名 (姓)")
    first_name = models.CharField(max_length=50, verbose_name="申込者名 (名)")
    last_name_kana = models.CharField(max_length=50, verbose_name="フリガナ (セイ)")
    first_name_kana = models.CharField(max_length=50, verbose_name="フリガナ (メイ)")
    gender = models.CharField(max_length=20, verbose_name="性別")
    phone_number = models.CharField(max_length=20, verbose_name="電話番号")
    email = models.EmailField(verbose_name="メールアドレス")

    # 住所
    postal_code_1 = models.CharField(max_length=3, verbose_name="郵便番号1")
    postal_code_2 = models.CharField(max_length=4, verbose_name="郵便番号2")
    prefecture = models.CharField(max_length=10, verbose_name="都道府県")
    city = models.CharField(max_length=50, verbose_name="市区町村")
    street = models.TextField(verbose_name="番地・建物名", blank=True, null=True)

    # 備考欄
    remarks = models.TextField(verbose_name="備考", blank=True, null=True)

    # 予約作成日時 (自動設定)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="予約作成日時")

    class Meta:
        verbose_name = "予約"
        verbose_name_plural = "予約"
        ordering = ['-created_at'] # 新しい予約が上に来るように並べ替え

    def __str__(self):
        return f"{self.last_name} {self.first_name} - {self.check_in_date} ({self.lodging})"

