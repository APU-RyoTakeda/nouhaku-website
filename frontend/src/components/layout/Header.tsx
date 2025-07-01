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
        {/* ロゴ部分: 常に白にします */}
        <Link href="/" className={`text-2xl font-extrabold transition-colors duration-300 text-white`}>
          {/* ここにヘッダーに表示したいテキストロゴを入力してください */}
          Hujisato
        </Link>

        {/* MenuBarIconコンポーネントを配置 */}
        <MenuBarIcon toggled={isOpen} toggle={setOpen} isScrolled={isScrolled} />
      </div>

      {/* モバイルメニュー本体 (全画面オーバーレイ) */}
      {isOpen && (
        <div className={`
          fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center /* justify-center を削除 */ z-40
          animate-fade-in-scale
          overflow-y-auto /* コンテンツが収まらない場合にスクロール可能にする */
          py-4   /* ★ py-8 を py-4 に変更: オーバーレイ自体の上下パディングをさらに削減 ★ */
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
          <div className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-left"> {/* ★ py-8 を py-4 に変更: 内側のコンテンツコンテナの上下パディングを削減 ★ */}
            {/* 主要なナビゲーション項目グループ */}
            <nav className="mb-4"> {/* ★ mb-6 を mb-4 に変更: グループ間のマージンを削減 ★ */}
              <ul className="flex flex-col space-y-3"> {/* ★ space-y-4 を space-y-3 に変更: 項目の縦間隔を削減 ★ */}
                {mainNavItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block w-full py-1 px-0 text-white hover:text-green-400 transition-colors duration-200 text-4xl font-bold`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* その他のユーティリティ項目グループ（上に線） */}
            <nav className="border-t-2 border-white pt-3 mb-4"> {/* ★ pt-4 を pt-3 に, mb-6 を mb-4 に変更 ★ */}
              <ul className="flex flex-col space-y-1"> {/* ★ space-y-2 を space-y-1 に変更 ★ */}
                {utilityNavItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block w-full py-1 px-0 text-white hover:text-green-400 transition-colors duration-200 text-2xl"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SNSリンクグループ（上に線） */}
            <nav className="border-t-2 border-white pt-3"> {/* ★ pt-4 を pt-3 に変更 ★ */}
              <ul className="flex flex-row space-x-3 justify-start items-center"> {/* ★ space-x-4 を space-x-3 に変更 ★ */}
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

          {/* --- hujisato.svg をモバイルメニューの左下に配置 --- */}
          {/* PC以外のデバイスでは非表示にするためのクラスを追加 */}
          <div className="absolute bottom-8 left-8 p-4 z-[-10] hidden lg:block">
            <Image
              src="/images/general/hujisato.svg"
              alt="hujisato logo"
              width={500}
              height={125}
              className="w-full max-w-[min(calc(100vw-64px),_320px)] h-auto object-contain"
              // 必要であれば、SVGの色を反転させる
              // className="filter invert"
            />
          </div>
          {/* ------------------------------------------- */}

        </div>
      )}
    </header>
  );
}