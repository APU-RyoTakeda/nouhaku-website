// frontend/src/types/booking.ts
// 予約フォームのデータ構造を定義するインターフェース
// このファイルを新しく作成し、他のファイルからインポートすることを推奨します。
export interface BookingFormData {
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  lodging: string;
  adultMale: number;
  adultFemale: number;
  child7_12: number;
  childUnder6: number;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  gender: string;
  phoneNumber: string;
  email: string;
  postalCode1: string;
  postalCode2: string;
  prefecture: string;
  city: string;
  street: string;
  remarks: string;
}