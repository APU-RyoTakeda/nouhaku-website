// frontend/src/components/Header.tsx
'use client'; // クライアントコンポーネントとしてマーク (インタラクティブな要素のため)

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // モバイルメニューの開閉状態

  return (
    <header className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* ロゴ/サイト名 */}
        <Link href="/" className="text-2xl font-bold hover:text-green-200 transition-colors">
          農泊体験
        </Link>

        {/* ナビゲーション (PC用) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-200 transition-colors">
            トップ
          </Link>
          <Link href="/towns" className="hover:text-green-200 transition-colors">
            町を探す
          </Link>
          <Link href="/houses" className="hover:text-green-200 transition-colors">
            家を探す
          </Link>
          <Link href="/contact" className="hover:text-green-200 transition-colors">
            お問い合わせ
          </Link>
        </nav>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* モバイルメニュー (開閉時) */}
      {isOpen && (
        <nav className="md:hidden bg-green-800 py-2 mt-2 space-y-2 text-center">
          <Link href="/" className="block px-4 py-2 hover:bg-green-700 transition-colors" onClick={() => setIsOpen(false)}>
            トップ
          </Link>
          <Link href="/towns" className="block px-4 py-2 hover:bg-green-700 transition-colors" onClick={() => setIsOpen(false)}>
            町を探す
          </Link>
          <Link href="/houses" className="block px-4 py-2 hover:bg-green-700 transition-colors" onClick={() => setIsOpen(false)}>
            家を探す
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-green-700 transition-colors" onClick={() => setIsOpen(false)}>
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;