// frontend/src/app/booking/confirm/page.tsx
"use client";

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BookingFormData } from '../../../types/booking'; // 正しいインポートパスに修正

export default function BookingConfirmPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // searchParamsから取得したデータを一時的にRecord<string, string | undefined>として扱う
  const rawFormData: Record<string, string | undefined> = {};
  searchParams.forEach((value: string, key: string) => {
    rawFormData[key] = value;
  });
  
  // BookingFormDataの型に変換し、数値フィールドをパース
  const parsedFormData: BookingFormData = {
    checkInDate: rawFormData.checkInDate ?? '',
    checkOutDate: rawFormData.checkOutDate ?? '',
    checkInTime: rawFormData.checkInTime ?? '',
    lodging: rawFormData.lodging ?? '',
    adultMale: parseInt(rawFormData.adultMale ?? '0', 10),
    adultFemale: parseInt(rawFormData.adultFemale ?? '0', 10),
    child7_12: parseInt(rawFormData.child7_12 ?? '0', 10),
    childUnder6: parseInt(rawFormData.childUnder6 ?? '0', 10),
    lastName: rawFormData.lastName ?? '',
    firstName: rawFormData.firstName ?? '',
    lastNameKana: rawFormData.lastNameKana ?? '',
    firstNameKana: rawFormData.firstNameKana ?? '',
    gender: rawFormData.gender ?? '',
    phoneNumber: rawFormData.phoneNumber ?? '',
    email: rawFormData.email ?? '',
    postalCode1: rawFormData.postalCode1 ?? '',
    postalCode2: rawFormData.postalCode2 ?? '',
    prefecture: rawFormData.prefecture ?? '',
    city: rawFormData.city ?? '',
    street: rawFormData.street ?? '',
    remarks: rawFormData.remarks ?? '',
  };


  // 「修正する」ボタンが押されたときにフォームページに戻る関数
  const handleEdit = () => {
    // 現在のparsedFormDataをクエリパラメータとしてBookingPageに渡す
    const stringifiedFormData = Object.fromEntries(
      Object.entries(parsedFormData).map(([key, value]) => [key, String(value)])
    );
    const queryString = new URLSearchParams(stringifiedFormData as Record<string, string>).toString();
    router.push(`/booking?${queryString}`);
  };

  // 最終的な予約送信を処理する関数 (Django APIに送信)
  const handleFinalBooking = async () => {
    try {
      // ★修正: クライアントサイドからのアクセスなので、ホストのlocalhostポートに直接アクセスするように変更
      // Docker内部ネットワーク名 (backend) はブラウザからは解決できないため
      const djangoApiBaseUrl = 'http://localhost:8000'; 
      const djangoApiUrl = `${djangoApiBaseUrl}/api/bookings/`; 

      // データをスネークケースに変換して送信
      const dataToSend = {
        check_in_date: parsedFormData.checkInDate,
        check_out_date: parsedFormData.checkOutDate,
        check_in_time: parsedFormData.checkInTime,
        lodging: parsedFormData.lodging,
        adult_male: parsedFormData.adultMale,
        adult_female: parsedFormData.adultFemale,
        child_7_12: parsedFormData.child7_12,
        child_under_6: parsedFormData.childUnder6,
        last_name: parsedFormData.lastName,
        first_name: parsedFormData.firstName,
        last_name_kana: parsedFormData.lastNameKana,
        first_name_kana: parsedFormData.firstNameKana,
        gender: parsedFormData.gender,
        phone_number: parsedFormData.phoneNumber,
        email: parsedFormData.email,
        postal_code_1: parsedFormData.postalCode1,
        postal_code_2: parsedFormData.postalCode2,
        prefecture: parsedFormData.prefecture,
        city: parsedFormData.city,
        street: parsedFormData.street,
        remarks: parsedFormData.remarks,
      };

      const response = await fetch(djangoApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend), // スネークケースに変換したデータを送信
      });

      if (response.ok) {
        const data = await response.json();
        console.log('予約成功 (Django):', data);
        router.push('/booking/completion'); // 予約完了ページへ遷移
      } else {
        const errorData = await response.json();
        console.error('予約エラー (Django):', errorData);
        console.error('Django API Error Details:', errorData); 
        router.push('/booking/error'); // エラーページへ遷移
      }
    } catch (error) {
      console.error('予約エラー (ネットワークまたはその他):', error);
      router.push('/booking/error'); // ネットワークエラーの場合もエラーページへ遷移
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          予約内容確認
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 space-y-6">
          <p className="text-gray-700 text-center mb-6">
            以下の内容でご予約を承ります。内容をご確認の上、問題がなければ「この内容で予約を確定する」ボタンを押してください。
          </p>

          {/* Booking Details Section */}
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">日程</h2>
            <div className="space-y-2">
              <p><strong>チェックイン日:</strong> {parsedFormData.checkInDate}</p>
              <p><strong>チェックアウト日:</strong> {parsedFormData.checkOutDate}</p>
              <p><strong>チェックイン時間:</strong> {parsedFormData.checkInTime}</p>
              <p><strong>宿:</strong> {parsedFormData.lodging}</p>
            </div>
          </div>

          {/* Guest Count Section */}
          <div className="border-b border-gray-200 pb-4 pt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">ご利用人数</h2>
            <div className="space-y-2">
              <p><strong>大人（男性）:</strong> {parsedFormData.adultMale}名</p>
              <p><strong>大人（女性）:</strong> {parsedFormData.adultFemale}名</p>
              <p><strong>7～12歳:</strong> {parsedFormData.child7_12}名</p>
              <p><strong>6歳以下:</strong> {parsedFormData.childUnder6}名</p>
              <p><strong>合計人数:</strong> {
                parsedFormData.adultMale +
                parsedFormData.adultFemale +
                parsedFormData.child7_12 +
                parsedFormData.childUnder6
              }名</p>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="border-b border-gray-200 pb-4 pt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">予約者情報</h2>
            <div className="space-y-2">
              <p><strong>申込者名:</strong> {parsedFormData.lastName} {parsedFormData.firstName}</p>
              <p><strong>フリガナ:</strong> {parsedFormData.lastNameKana} {parsedFormData.firstNameKana}</p>
              <p><strong>性別:</strong> {parsedFormData.gender}</p>
              <p><strong>電話番号:</strong> {parsedFormData.phoneNumber}</p>
              <p><strong>メールアドレス:</strong> {parsedFormData.email}</p>
              <p>
                <strong>住所:</strong> 〒{parsedFormData.postalCode1}-{parsedFormData.postalCode2} {parsedFormData.prefecture}{parsedFormData.city}{parsedFormData.street}
              </p>
            </div>
          </div>

          {/* Remarks Section */}
          <div className="pt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">備考欄</h2>
            <p className="whitespace-pre-wrap">{parsedFormData.remarks || '特になし'}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={handleEdit}
              className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              修正する
            </button>
            <button
              type="button"
              onClick={handleFinalBooking}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              この内容で予約を確定する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
