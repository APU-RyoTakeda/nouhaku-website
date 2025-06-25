// frontend/src/components/layout/Header.tsx
'use client'; // クライアントコンポーネントとしてマーク

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Imageコンポーネントをインポート
import MenuBarIcon from '../common/MenuBarIcon'; // 新しいMenuBarIconコンポーネントをインポート

// ナビゲーションアイテムの型定義
export interface NavItem { // 他のファイルで使う可能性があるのでexport
  name: string; // 表示名 (英語)
  href: string; // リンク先
}

// ヘッダーコンポーネントのプロパティの型定義
interface HeaderProps {
  heroHeight: number; // HeroSectionの高さを受け取る
}

const navItems: NavItem[] = [
  // メニュー項目を英語に変更し、'Home'は全画面メニューから除外
  // { name: 'Home', href: '/' }, // 'Home'はオーバービューには表示しない
  { name: 'Stay', href: '/houses' },
  { name: 'Eat', href: '/eat' },
  { name: 'Explore', href: '/explore' },
  { name: 'Access', href: '/access' },
  { name: 'Contact', href: '/contact' },
  { name: 'Booking', href: '/booking' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

// SNSリンクの定義を更新 - SVGパスの代わりに画像ファイルへのパスを使用
const snsLinks = [
  { name: 'X (Twitter)', href: 'https://twitter.com/your_account', iconPath: '/images/icon/x.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/fujisatogenki_akita/', iconPath: '/images/icon/instagram.svg' },
  { name: 'Facebook', href: 'https://facebook.com/your_page', iconPath: '/images/icon/facebook.svg' },
];

export default function Header({ heroHeight }: HeaderProps) {
  const [isOpen, setOpen] = useState(false); // モバイルメニューの開閉状態
  const [isScrolled, setIsScrolled] = useState(false); // スクロール状態

  useEffect(() => {
    const handleScroll = () => {
      // heroHeightに基づいてスクロール状態を判定
      // HeroSectionの終わりから約80px手前でヘッダーのスタイルを変更
      // この値を小さくすることで、より早くヘッダーのスタイルが変更される
      // 例: HeroSectionの高さの半分で変更を開始する
      const scrollThreshold = heroHeight !== undefined ? heroHeight * 0.5 : 50; // ここを調整！
      // もしくは、固定値で調整したい場合 (例: 画面上部から100pxスクロールしたら変化)
      // const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroHeight]); // heroHeightが変更されたらエフェクトを再実行

  // メニュー開閉時にbodyのスクロールを制御
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // スクロール禁止
    } else {
      document.body.style.overflow = 'unset'; // スクロール許可
    }
    // コンポーネントのアンマウント時にも元に戻す
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // メニュー項目をグループに分類 (英語名に更新)
  // 'Home' は全画面メニューから除外
  const mainNavItems = navItems.filter(item =>
    ['Stay', 'Eat', 'Explore', 'Access'].includes(item.name)
  );
  const utilityNavItems = navItems.filter(item =>
    ['Contact', 'Booking', 'Privacy Policy'].includes(item.name)
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-stone-800 bg-opacity-90 shadow-md py-2' : 'bg-transparent py-4' // スクロール時のスタイル
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* ロゴ部分 */}
        <Link href="/" className={`text-2xl font-extrabold transition-colors duration-300 ${
            isScrolled ? 'text-white' : 'text-gray-900' // スクロールに応じて色を変更
          }`}>
          {/* ここにヘッダーに表示したいテキストロゴを入力してください */}
          YOUR LOGO
        </Link>

        {/* MenuBarIconコンポーネントを配置 */}
        <MenuBarIcon toggled={isOpen} toggle={setOpen} isScrolled={isScrolled} />
      </div>

      {/* モバイルメニュー本体 (全画面オーバーレイ) */}
      {isOpen && (
        <div className={`
          fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-40
          animate-fade-in-scale
        `}>
          {/* 閉じるボタン (X印) */}
          <button
            onClick={() => setOpen(false)} // クリックでメニューを閉じる
            className="absolute top-4 right-4 text-white text-5xl p-2 z-50 hover:text-green-400 transition-colors duration-200"
            aria-label="Close menu" // aria-labelも英語に
          >
            &times;
          </button>

          {/* メニュー項目を囲む中央寄せされたコンテナ */}
          <div className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
            {/* 主要なナビゲーション項目グループ */}
            <nav className="mb-10"> {/* 下のグループとの間に大きな余白 */}
              <ul className="flex flex-col space-y-6"> {/* 縦並び、項目間の余白 */}
                {mainNavItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      // Hina Minchoフォントを適用、太字は削除
                      className={`block py-2 px-0 text-white hover:text-green-400 transition-colors duration-200 text-6xl font-bold`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* その他のユーティリティ項目グループ（上に線） */}
            <nav className="border-t-2 border-white pt-6 mb-10"> {/* 上に線、上にパディング、下に余白 */}
              <ul className="flex flex-col space-y-4"> {/* 縦並び、項目間の余白 */}
                {utilityNavItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      // Hina Minchoフォントを適用
                      className="block py-2 px-0 text-white hover:text-green-400 transition-colors duration-200 text-4xl"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SNSリンクグループ（上に線） */}
            <nav className="border-t-2 border-white pt-6"> {/* 上に線、上にパディング */}
              <ul className="flex flex-row space-x-6 justify-start items-center"> {/* 横並び、項目間の余白、左揃え */}
                {snsLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank" // 新しいタブで開く
                      rel="noopener noreferrer" // セキュリティ対策
                      onClick={() => setOpen(false)}
                      className="block text-white hover:text-green-400 transition-colors duration-200"
                      aria-label={link.name}
                    >
                      {/* next/image コンポーネントを使用 */}
                      <Image
                        src={link.iconPath} // iconをiconPathに変更
                        alt={link.name}
                        width={32} // アイコンの適切な幅を指定
                        height={32} // アイコンの適切な高さを指定
                        className="filter brightness-0 invert" // 白いアイコンにするためのCSS (元のSVGが黒の場合)
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
