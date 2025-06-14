// frontend/src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLine } from 'react-icons/fa'; // SNSアイコンをインポート

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // 現在の年を動的に取得

  return (
    <footer className="bg-green-800 text-white p-8 mt-auto shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-sm space-y-8 md:space-y-0 md:space-x-8">

        {/* 著作権情報と連絡先など (左寄せ) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <p className="text-lg font-semibold">農泊プロジェクト</p>
          <p>&copy; {currentYear} All rights reserved.</p>
          <p>秋田県由利本荘市</p> {/* 例として所在地を追加 */}
          <p>連絡先: info@nouhaku.jp</p> {/* 例として連絡先を追加 */}
        </div>

        {/* 簡易ナビゲーション (中央または右寄りに) */}
        <nav className="flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:space-x-6 md:flex-row">
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
          <Link href="/privacy" className="hover:text-green-200 transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="/terms" className="hover:text-green-200 transition-colors">
            利用規約
          </Link>
        </nav>

        {/* SNSアイコン (右寄せ) */}
        <div className="flex space-x-6 text-2xl">
          <a href="https://twitter.com/your_account" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="hover:text-green-200 transition-colors" />
          </a>
          <a href="https://facebook.com/your_account" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="hover:text-green-200 transition-colors" />
          </a>
          <a href="https://instagram.com/your_account" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-green-200 transition-colors" />
          </a>
          <a href="https://line.me/ti/p/@your_id" target="_blank" rel="noopener noreferrer" aria-label="LINE">
            <FaLine className="hover:text-green-200 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;