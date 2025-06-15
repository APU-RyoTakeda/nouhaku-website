// frontend/src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header'; // Headerをインポート
import Footer from '@/components/layout/Footer'; // Footerをインポート

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '秋田 農泊ウェブサイト',
  description: '秋田の自然と人情が彩る、時間にとらわれない暮らしを体験できる農泊Webサービス。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header /> {/* ここにHeaderコンポーネントを配置 */}
        <main className="min-h-screen"> {/* メインコンテンツエリア。Headerがfixedなので、コンテンツが隠れないように調整が必要になる場合があります。 */}
          {children}
        </main>
        <Footer /> {/* ここにFooterコンポーネントを配置 */}
      </body>
    </html>
  );
}