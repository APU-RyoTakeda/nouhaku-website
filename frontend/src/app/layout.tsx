// frontend/src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // ★★★ パスを './components/Header' に修正済み ★★★
import Footer from "./components/Footer"; // ★★★ パスを './components/Footer' に修正済み ★★★

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
      <body className={inter.className}>
        <Header />
        {/* main の pt-20 は削除済み、min-h-screen はフッターを画面下部に配置するために維持 */}
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
