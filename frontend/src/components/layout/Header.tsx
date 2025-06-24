// frontend/src/components/layout/Header.tsx
'use client'; // クライアントコンポーネントとしてマーク

import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
// import Image from 'next/image'; // ヘッダーではImageコンポーネントは不要になるので削除またはコメントアウト

const navItems = [
  { name: 'ホーム', href: '/' },
  { name: 'とまる', href: '/houses' },
  { name: 'たべる', href: '/eat' },
  { name: 'めぐる', href: '/explore' },
  { name: 'アクセス', href: '/access' },
  { name: 'お問い合わせ', href: '/contact' },
  { name: '予約', href: '/booking' },
];

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // 50pxスクロールしたら変化
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 bg-opacity-70 shadow-md py-2' : 'bg-transparent py-4' // スクロール時のスタイル
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* ロゴ部分をテキストに変更 */}
        {/* ★変更点: -mt-2 だった箇所をより大きな数値に変更します。例: -mt-4, -mt-6, -mt-8 など */}
        <Link href="/" className={`text-base font-bold transition-colors duration-300 ${
           isScrolled ? 'text-gray-800' : 'text-gray-900'
         } -ml-8 -mt-4`}> {/* <-- この数値を調整してください */}
          {/* ここをヘッダーに表示したいテキストロゴに変更してください */}
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={`text-lg font-medium hover:text-green-600 transition-colors ${
                  isScrolled ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* モバイルメニューアイコン */}
        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={isScrolled ? "#FFFFFF" : "#4B5563"}
            direction="right"
            size={28}
          />
        </div>
      </div>

      {/* モバイルメニュー本体 */}
      {isOpen && ( // isOpenがtrueのときのみ表示
        <>
          {/* モバイルメニューの背景オーバーレイ */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setOpen(false)} // オーバーレイクリックで閉じる
          ></div>
          {/* モバイルメニューコンテンツ */}
          <div className={`
            md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg py-6 z-50
            transition-transform duration-300
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            pt-20
          `}>
            <nav>
              <ul className="flex flex-col items-center space-y-5">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-gray-800 text-xl font-semibold hover:text-green-600 transition-colors block py-2 px-4 w-full text-center"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}