// frontend/src/app/booking/completion/page.tsx
"use client";

import Link from 'next/link';

export default function BookingCompletionPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-green-700 mb-6">
            ご予約ありがとうございます！
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            お客様のご予約が完了いたしました。
          </p>
          <p className="text-md text-gray-600 mb-8">
            ご入力いただいたメールアドレスに、予約内容の詳細をお送りしましたのでご確認ください。
          </p>
          <Link href="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            トップページへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
