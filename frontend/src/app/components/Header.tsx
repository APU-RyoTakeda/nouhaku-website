// frontend/src/components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ロゴ画像のためにNext.jsのImageコンポーネントをインポート
import { Twirl as Hamburger } from 'hamburger-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // モバイルメニューの開閉状態
  const [isScrolled, setIsScrolled] = useState(false); // スクロール状態
  const [locationName, setLocationName] = useState("由利本荘市"); // 仮の町の名前
  const [subTitle, setSubTitle] = useState("秋田の自然と人情"); // 仮のサブタイトル

  // スクロールイベントを監視
  useEffect(() => {
    const handleScroll = () => {
      // 50pxスクロールしたら isScrolled をtrueにする
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50
      transition-all duration-300 ease-in-out
      ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'} {/* ★★★ この行を修正しました ★★★ */}
    `}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* 左端にロゴ */}
        <div className="flex-none">
          <Link href="/">
            {/* 将来的にロゴ画像をここに配置 */}
            {/* 例: <Image src="/images/your-logo.png" alt="農泊ロゴ" width={120} height={40} /> */}
            <span className={`
              text-2xl font-bold transition-colors duration-300 whitespace-nowrap
              ${isScrolled ? 'text-[#2ECC71] hover:text-[#28B463]' : 'text-white hover:text-gray-200'}
            `}>
              農泊ロゴ
            </span>
          </Link>
        </div>

        {/* 中央に町の名前とサブタイトル (PCのみ表示) */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 hidden md:flex">
          <span className={`
            text-xl md:text-2xl font-bold transition-colors duration-300 whitespace-nowrap
            ${isScrolled ? 'text-gray-800' : 'text-white'}
          `}>
            {locationName}
          </span>
          <span className={`
            text-sm md:text-base transition-colors duration-300 whitespace-nowrap
            ${isScrolled ? 'text-gray-600' : 'text-gray-200'}
          `}>
            {subTitle}
          </span>
        </div>

        {/* 右端にハンバーガーメニュー (PCではナビゲーション、モバイルではアイコン) */}
        <div className="flex-none flex items-center space-x-4 md:space-x-6">
          {/* PC用のナビゲーションリンク (必要であれば) */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/houses" className={`
                px-4 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out
                ${isScrolled ? 'bg-[#2ECC71] text-white hover:bg-[#28B463]' : 'bg-white text-[#2ECC71] hover:bg-gray-200'}
              `}>
                体験を探す
            </Link>
            <Link href="/contact" className={`
                px-4 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out
                ${isScrolled ? 'bg-[#2ECC71] text-white hover:bg-[#28B463]' : 'bg-white text-[#2ECC71] hover:bg-gray-200'}
              `}>
                予約
            </Link>
          </nav>

          {/* モバイルメニューボタン (ハンバーガーアイコン) */}
          <div className="z-50">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={28}
              color={isScrolled ? '#2ECC71' : '#FFFFFF'}
              duration={0.5}
              label="Toggle mobile menu"
            />
          </div>
        </div>
      </div>

      {/* 画面いっぱいの緑色オーバーレイメニュー (Z-indexをヘッダーのすぐ下に設定) */}
      {isOpen && (
        <nav className="fixed inset-0 bg-green-800 bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-40">
          <Link href="/" className="text-white text-4xl font-bold hover:text-green-200 transition-colors" onClick={() => setIsOpen(false)}>
            トップ
          </Link>
          <Link href="/towns" className="text-white text-4xl font-bold hover:text-green-200 transition-colors" onClick={() => setIsOpen(false)}>
            町を探す
          </Link>
          <Link href="/houses" className="text-white text-4xl font-bold hover:text-green-200 transition-colors" onClick={() => setIsOpen(false)}>
            家を探す
          </Link>
          <Link href="/contact" className="text-white text-4xl font-bold hover:text-green-200 transition-colors" onClick={() => setIsOpen(false)}>
            お問い合わせ
          </Link>
          <Link href="/contact" className="px-10 py-4 bg-white text-[#2ECC71] rounded-full text-2xl font-semibold hover:bg-gray-200 transition-colors mt-8" onClick={() => setIsOpen(false)}>
            今すぐ予約
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;