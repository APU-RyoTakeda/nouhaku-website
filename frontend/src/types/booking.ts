// frontend/src/types/booking.ts

/**
 * 予約フォームのデータを表すインターフェース。
 * ユーザーが入力するすべての予約関連情報を含みます。
 */
export interface BookingFormData {
  checkInDate: string; // チェックイン日 (YYYY-MM-DD 形式)
  checkOutDate: string; // チェックアウト日 (YYYY-MM-DD 形式)
  checkInTime: string; // チェックイン時間 (HH:MM 形式)
  lodging: string;     // 選択された宿の名前
  name: string;        // 予約者の氏名
  email: string;       // 予約者のメールアドレス
  phone: string;       // 予約者の電話番号
  adults: number;      // 大人の人数
  children: number;    // 子供の人数
  notes: string;       // 備考、特記事項
  totalPrice: number;  // 予約の合計金額
}
