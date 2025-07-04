// frontend/src/app/booking/page.tsx

export default function BookingPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          予約
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            農泊のご予約は、各施設の詳細ページから可能です。ご希望の施設を選び、空室状況をご確認の上、予約フォームへお進みください。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            このウェブサイトは現在MVP版のため、予約機能はまだ実装されていません。将来的には、カレンダー機能や決済連携を導入し、よりスムーズな予約体験を提供できるよう開発を進めてまいります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            **【現在の予約方法】**<br />
            恐れ入りますが、現時点では、ご興味のある施設へは**直接お問い合わせいただく形**でご予約をお願いしております。各施設ページに記載されているお問い合わせ先をご利用ください。
          </p>
          <div className="text-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              お問い合わせから予約を完了する
            </h2>
            <p className="text-gray-600 mb-6">
              ご希望の施設へのお問い合わせは、以下のボタンからどうぞ。
            </p>
            <a href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
              お問い合わせページへ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}