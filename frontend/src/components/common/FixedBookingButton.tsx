'use client'; // クライアントコンポーネントとしてマーク

import Link from 'next/link';

/**
 * 画面右下に固定表示される予約ボタンコンポーネント。
 * クリックすると予約ページへ遷移します。
 */
export default function FixedBookingButton() {
  return (
    <Link href="/booking" passHref>
      {/* 予約ボタンのコンテナ */}
      <div className="fixed bottom-6 right-6 z-50 
                      bg-stone-800 bg-opacity-70 text-white rounded-full 
                      p-4 shadow-lg 
                      hover:bg-stone-700 hover:bg-opacity-90 transition duration-300 
                      transform hover:scale-110 cursor-pointer 
                      flex items-center justify-center 
                      text-lg font-bold 
                      min-w-[120px] sm:min-w-[150px] 
                      text-center">
        {/* ボタンのテキスト */}
        Booking
        {/* SVGアイコン（右矢印） */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
