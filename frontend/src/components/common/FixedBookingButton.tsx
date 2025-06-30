'use client'; // クライアントコンポーネントとしてマーク

import Link from 'next/link';

export default function FixedBookingButton() {
  return (
    <Link href="/booking" passHref>
      <div className="fixed bottom-6 right-6 z-50 bg-green-700 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-110 cursor-pointer flex items-center justify-center text-lg font-bold">
        {/* ボタンのテキスト */}
        Booking
        {/* 必要であればアイコンを追加 */}
        {/* 例: 矢印アイコン */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}