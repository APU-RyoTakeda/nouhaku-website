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

    # --- 既存のモデルは省略 ---
# InquiryStatus, Town, House, Inquiry モデルは上記に加えて記述します

# --- 新規追加モデル ---

class HomePageContent(models.Model):
    """
    トップページ（Home）に表示するコンテンツを管理するモデル。
    通常は単一のレコードで運用されることが多い。
    """
    # 例えば、トップページのメインキャッチコピーや紹介文
    main_heading = models.CharField(max_length=255, verbose_name="メイン見出し")
    sub_heading = models.CharField(max_length=255, blank=True, null=True, verbose_name="サブ見出し")
    introduction_text = models.TextField(verbose_name="紹介文")
    # トップページのメイン画像など
    hero_image = models.ImageField(upload_to='homepage/', verbose_name="ヒーロー画像", blank=True, null=True)
    # 必要に応じて、各セクションへのリンクテキストなども追加可能
    stay_link_text = models.CharField(max_length=100, default="滞在について", verbose_name="滞在リンクテキスト")
    eat_link_text = models.CharField(max_length=100, default="食事について", verbose_name="食事リンクテキスト")
    explore_link_text = models.CharField(max_length=100, default="体験について", verbose_name="体験リンクテキスト")

    class Meta:
        verbose_name = "トップページコンテンツ"
        verbose_name_plural = "トップページコンテンツ"

    def __str__(self):
        return "トップページコンテンツ設定" # 複数作成することは稀なので、この表現が分かりやすい

class FoodExperience(models.Model):
    """
    食べ物（Eat）に関する体験や提供物を管理するモデル。
    """
    name = models.CharField(max_length=200, verbose_name="体験・料理名")
    slug = models.SlugField(max_length=255, unique=True, verbose_name="スラッグ")
    description = models.TextField(verbose_name="詳細説明")
    price_range = models.CharField(max_length=100, blank=True, null=True, verbose_name="価格帯") # 例: '無料', '〜3000円', '要問合せ'
    image = models.ImageField(upload_to='food_experiences/', verbose_name="画像", blank=True, null=True)
    # 関連する町があれば紐付け
    town = models.ForeignKey(
        Town,
        on_delete=models.SET_NULL, # 町が削除されても体験は残す（関連を解除）
        related_name='food_experiences',
        null=True, blank=True, verbose_name="関連する町"
    )

    class Meta:
        verbose_name = "食体験"
        verbose_name_plural = "食体験"
        ordering = ['name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

class Activity(models.Model):
    """
    体験（Explore）に関するアクティビティや観光スポットを管理するモデル。
    """
    name = models.CharField(max_length=200, verbose_name="アクティビティ名・スポット名")
    slug = models.SlugField(max_length=255, unique=True, verbose_name="スラッグ")
    description = models.TextField(verbose_name="詳細説明")
    location_detail = models.CharField(max_length=255, verbose_name="場所の詳細", blank=True, null=True)
    # 外部URLなど
    external_link = models.URLField(max_length=200, blank=True, null=True, verbose_name="関連リンク")
    image = models.ImageField(upload_to='activities/', verbose_name="画像", blank=True, null=True)
    # 関連する町があれば紐付け
    town = models.ForeignKey(
        Town,
        on_delete=models.SET_NULL, # 町が削除されてもアクティビティは残す（関連を解除）
        related_name='activities',
        null=True, blank=True, verbose_name="関連する町"
    )

    class Meta:
        verbose_name = "体験・観光"
        verbose_name_plural = "体験・観光"
        ordering = ['name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)