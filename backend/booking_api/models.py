# backend/booking_api/models.py

from django.db import models

class Booking(models.Model):
    check_in_date = models.DateField()
    check_out_date = models.DateField()
    check_in_time = models.CharField(max_length=5) # 例: "15:00"
    lodging = models.CharField(max_length=100)
    adult_male = models.IntegerField(default=0)
    adult_female = models.IntegerField(default=0)
    child_7_12 = models.IntegerField(default=0)
    child_under_6 = models.IntegerField(default=0)
    last_name = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name_kana = models.CharField(max_length=100)
    first_name_kana = models.CharField(max_length=100)
    gender = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    postal_code1 = models.CharField(max_length=3)
    postal_code2 = models.CharField(max_length=4)
    prefecture = models.CharField(max_length=50)
    city = models.CharField(max_length=100)
    street = models.TextField()
    remarks = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.last_name} {self.first_name} - {self.check_in_date} to {self.check_out_date} at {self.lodging}"

    class Meta:
        db_table = 'bookings' # データベースのテーブル名を指定 (任意)
