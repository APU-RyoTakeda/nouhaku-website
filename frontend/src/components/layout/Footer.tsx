// frontend/src/components/layout/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center px-4">
        <nav className="mb-4">
          <ul className="flex justify-center space-x-6 text-sm">
            <li><Link href="/privacy" className="hover:text-green-400 transition-colors">プライバシーポリシー</Link></li>
            <li><Link href="/terms" className="hover:text-green-400 transition-colors">利用規約</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">お問い合わせ</Link></li>
          </ul>
        </nav>
        <p className="text-sm">&copy; {new Date().getFullYear()} 農泊ウェブサイト. All rights reserved.</p>
        {/* 将来的にSNSアイコンなどを追加 */}
      </div>
    </footer>
  );
}