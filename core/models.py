from django.db import models
from django.utils.text import slugify # スラッグ自動生成のヘルパー関数（オプション）

# Inquiryモデルのステータス選択肢
class InquiryStatus(models.TextChoices):
    PENDING = 'Pending', '処理待ち'
    PROCESSED = 'Processed', '処理済み'

class Town(models.Model):
    """
    町の情報を管理するモデル
    """
    name = models.CharField(max_length=200, verbose_name="町名")
    # URLフレンドリーなスラッグ。ユニークで最大255文字
    slug = models.SlugField(max_length=255, unique=True, verbose_name="スラッグ")
    description = models.TextField(verbose_name="説明")
    # 画像は必須ではない (blank=True, null=True)
    image = models.ImageField(upload_to='town_images/', blank=True, null=True, verbose_name="画像")

    class Meta:
        verbose_name = "町"
        verbose_name_plural = "町"
        ordering = ['name'] # 名前でソート

    def __str__(self):
        return self.name

    # saveメソッドをオーバーライドしてslugを自動生成（オプション）
    def save(self, *args, **kwargs):
        if not self.slug: # スラッグが空の場合のみ自動生成
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class House(models.Model):
    """
    農泊施設（家）の情報を管理するモデル
    """
    name = models.CharField(max_length=200, verbose_name="施設名")
    # URLフレンドリーなスラッグ。ユニークで最大255文字
    slug = models.SlugField(max_length=255, unique=True, verbose_name="スラッグ")
    description = models.TextField(verbose_name="説明")
    location = models.CharField(max_length=255, verbose_name="所在地")
    capacity = models.IntegerField(verbose_name="収容人数")
    # 画像は必須ではない (blank=True, null=True)
    image = models.ImageField(upload_to='house_images/', blank=True, null=True, verbose_name="画像")
    
    # 町への外部キーリレーション。Townが削除されたら関連するHouseも削除
    town = models.ForeignKey(
        Town,
        on_delete=models.CASCADE,
        related_name='houses', # Townから関連するHouseを取得する際に使う名前
        verbose_name="関連する町"
    )

    class Meta:
        verbose_name = "家"
        verbose_name_plural = "家"
        ordering = ['name'] # 名前でソート

    def __str__(self):
        return self.name

    # saveメソッドをオーバーライドしてslugを自動生成（オプション）
    def save(self, *args, **kwargs):
        if not self.slug: # スラッグが空の場合のみ自動生成
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class Inquiry(models.Model):
    """
    問い合わせ情報を管理するモデル
    """
    name = models.CharField(max_length=100, verbose_name="氏名")
    email = models.EmailField(verbose_name="メールアドレス")
    message = models.TextField(verbose_name="問い合わせ内容")
    # 作成日時を自動で現在時刻に設定
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="作成日時")
    # ステータスは選択肢から選択、デフォルトは'Pending'
    status = models.CharField(
        max_length=10,
        choices=InquiryStatus.choices,
        default=InquiryStatus.PENDING,
        verbose_name="ステータス"
    )

    class Meta:
        verbose_name = "問い合わせ"
        verbose_name_plural = "問い合わせ"
        ordering = ['-created_at'] # 新しい問い合わせが上に表示されるようにソート

    def __str__(self):
        return f"{self.name} - {self.email} ({self.status})"