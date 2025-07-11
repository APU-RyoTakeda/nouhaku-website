// frontend/src/app/booking/confirm/page.tsx
"use client";

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BookingConfirmPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // searchParamsを読み取り可能なオブジェクトに変換
  const formData = Object.fromEntries(searchParams.entries());

  // 「修正する」ボタンが押されたときにフォームページに戻る関数
  const handleEdit = () => {
    // 現在のformDataをクエリパラメータとしてBookingPageに渡す
    const queryString = new URLSearchParams(formData as Record<string, string>).toString();
    router.push(`/booking?${queryString}`);
  };

  // 最終的な予約送信を処理する関数 (例: APIに送信)
  const handleFinalBooking = () => {
    // 実際のアプリケーションでは、ここでformDataをバックエンドAPIに送信します。
    // 例:
    // fetch('/api/submit-booking', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('予約成功:', data);
    //   router.push('/booking/completion'); // 予約完了ページへ遷移
    // })
    // .catch(error => {
    //   console.error('予約エラー:', error);
    //   alert('予約処理中にエラーが発生しました。もう一度お試しください。');
    // });

    console.log('最終予約が確定しました:', formData); // デバッグ用にコンソールに出力
    // ここで直接予約完了ページへ遷移
    router.push('/booking/completion'); // 予約完了ページへ遷移
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
              <p><strong>チェックイン日:</strong> {formData.checkInDate}</p>
              <p><strong>チェックアウト日:</strong> {formData.checkOutDate}</p>
              <p><strong>チェックイン時間:</strong> {formData.checkInTime}</p>
              <p><strong>宿:</strong> {formData.lodging}</p>
            </div>
          </div>

          {/* Guest Count Section */}
          <div className="border-b border-gray-200 pb-4 pt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">ご利用人数</h2>
            <div className="space-y-2">
              <p><strong>大人（男性）:</strong> {formData.adultMale}名</p>
              <p><strong>大人（女性）:</strong> {formData.adultFemale}名</p>
              <p><strong>7～12歳:</strong> {formData.child7_12}名</p>
              <p><strong>6歳以下:</strong> {formData.childUnder6}名</p>
              <p><strong>合計人数:</strong> {
                parseInt(formData.adultMale || '0') +
                parseInt(formData.adultFemale || '0') +
                parseInt(formData.child7_12 || '0') +
                parseInt(formData.childUnder6 || '0')
              }名</p>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="border-b border-gray-200 pb-4 pt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">予約者情報</h2>
            <div className="space-y-2">
              <p><strong>申込者名:</strong> {formData.lastName} {formData.firstName}</p>
              <p><strong>フリガナ:</strong> {formData.lastNameKana} {formData.firstNameKana}</p>
              <p><strong>性別:</strong> {formData.gender}</p>
              <p><strong>電話番号:</strong> {formData.phoneNumber}</p>
              <p><strong>メールアドレス:</strong> {formData.email}</p>
              <p>
                <strong>住所:</strong> 〒{formData.postalCode1}-{formData.postalCode2} {formData.prefecture}{formData.city}{formData.street}
              </p>
            </div>
          </div>

          {/* Remarks Section */}
          <div className="pt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">備考欄</h2>
            <p className="whitespace-pre-wrap">{formData.remarks || '特になし'}</p>
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