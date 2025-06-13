// frontend/src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 必要なければ削除してもOK
import "./globals.css"; // Tailwind CSSのインポート
import Header from "./components/Header"; // Headerコンポーネントをインポート
import Footer from "./components/Footer"; // Footerコンポーネントをインポート

// もし `Inter` フォントを使っていないなら削除
const inter = Inter({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "農泊プロジェクト",
  description: "秋田地域の魅力を発信し、大学ゼミとの交流を促進する農泊WebサービスのMVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* classNamesも削除してシンプルに */}
      <body> 
        <Header />
        <main>{children}</main> {/* メインコンテンツ */}
        <Footer />
      </body>
    </html>
  );
}