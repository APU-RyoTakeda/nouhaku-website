// frontend/src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Noto_Sans_JP, Shippori_Mincho_B1 } from 'next/font/google'; // Noto Sans JP と Shippori Mincho B1 をインポート
import Header from '@/components/layout/Header'; // Headerをインポート
import Footer from '@/components/layout/Footer'; // Footerをインポート

// Interフォントは主にUI要素やデフォルトのフォールバックとして使用
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// Noto Sans JP を設定（本文向け）
const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'], // 使用するウェイトを指定 (例: 標準と太字)
  // 'japanese' サブセットを 'latin' に変更、または削除
  subsets: ['latin'], 
  variable: '--font-noto-sans-jp',
  display: 'swap', // FOIT対策
});

// Shippori Mincho B1 を設定（見出し向け）
const shipporiMinchoB1 = Shippori_Mincho_B1({
  weight: ['400', '700'], // 使用するウェイトを指定
  // 'japanese' サブセットを 'latin' に変更、または削除
  subsets: ['latin'], 
  variable: '--font-shippori-mincho-b1',
  display: 'swap', // FOIT対策
});

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
      {/* <body>に全てのフォント変数を適用 */}
      <body className={`${inter.variable} ${notoSansJp.variable} ${shipporiMinchoB1.variable}`}>
        <Header /> {/* ここにHeaderコンポーネントを配置 */}
        <main className="min-h-screen"> {/* メインコンテンツエリア。Headerがfixedなので、コンテンツが隠れないように調整が必要になる場合があります。 */}
          {children}
        </main>
        <Footer /> {/* ここにFooterコンポーネントを配置 */}
      </body>
    </html>
  );
}
