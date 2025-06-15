// frontend/src/components/layout/Header.tsx
'use client'; // クライアントコンポーネントとしてマーク

import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import Link from 'next/link';

const navItems = [
  { name: '始まり', href: '/' },
  { name: '泊まる', href: '/houses' },
  { name: '食べる', href: '/eat' },
  { name: '巡る', href: '/explore' },
  { name: 'アクセス', href: '/access' },
  { name: '問い合わせ', href: '/contact' },
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
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          農泊ウェブサイト
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={`text-gray-700 hover:text-green-600 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white' // スクロール時のテキスト色調整
                }`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* モバイルメニューアイコン */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} color={isScrolled ? "#4B5563" : "#FFFFFF"} /> {/* スクロール時の色変更 */}
        </div>
      </div>

      {/* モバイルメニュー本体 */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
          <nav>
            <ul className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="text-gray-800 hover:text-green-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}