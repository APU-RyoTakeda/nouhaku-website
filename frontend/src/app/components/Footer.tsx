// frontend/src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // 現在の年を動的に取得

  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto shadow-inner">
      <div className="container mx-auto text-center text-sm md:flex md:justify-between md:items-center">
        {/* 著作権情報 */}
        <p>&copy; {currentYear} 農泊プロジェクト. All rights reserved.</p>

        {/* 簡易ナビゲーション */}
        <nav className="mt-4 md:mt-0 space-x-4">
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="/terms" className="hover:text-gray-300 transition-colors">
            利用規約
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;