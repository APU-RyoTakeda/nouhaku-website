// frontend/src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image'; // Imageコンポーネントをインポート

// Header.tsxからNavItemをインポート（必要であれば残してもOKですが、フッターでは直接使わないなら削除も可）
// import { NavItem } from './Header';

// フッター用のナビゲーションアイテム（必要であればHeader.tsxと同期させる）
// 今回は仮にHeader.tsxのnavItemsと同じものを使う想定
const footerNavItems = [
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

export default function Footer() {
 return (
 <footer className="bg-stone-800 text-stone-100 py-12 px-4">
 <div className="container mx-auto flex flex-col items-center">
 {/* ロゴ部分 */}
 <div className="mb-6">
 <Link href="/" className="text-3xl font-extrabold text-stone-100 hover:text-lime-400 transition-colors duration-200">
 YOUR LOGO
 </Link>
 </div>

 {/* ナビゲーションリンク */}
 <nav className="mb-6">
 <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
 {footerNavItems.map((item) => (
 <li key={item.name}>
 <Link href={item.href} className="text-stone-100 hover:text-lime-400 transition-colors duration-200">
 {item.name}
 </Link>
 </li>
 ))}
 </ul>
 </nav>

 {/* SNSリンク */}
 <div className="mb-6">
 <ul className="flex space-x-6">
 {snsLinks.map((link) => (
 <li key={link.name}>
 <a
 href={link.href}
 target="_blank"
 rel="noopener noreferrer"
 className="block text-stone-100 hover:text-lime-400 transition-colors duration-200"
 aria-label={link.name}
 >
 {/* next/image コンポーネントを使用 */}
 <Image
 src={link.iconPath}
 alt={link.name}
 width={28} // アイコンの適切な幅を指定
 height={28} // アイコンの適切な高さを指定
 // SVGの色をCSSで制御したい場合は、fill: currentColor; をSVGファイルに含めるか、
 // Tailwind CSSのfilterやtint機能を使う必要があります。
 // シンプルに単色のSVGを使う場合は、ここでは特に指定不要です。
 className="filter brightness-0 invert" // 白いアイコンにするためのCSS (元のSVGが黒の場合)
 />
 </a>
 </li>
 ))}
 </ul>
 </div>

 {/* コピーライト情報 */}
 <p className="text-sm text-stone-400">
 &copy; {new Date().getFullYear()} Agri-tourism Website. All rights reserved.
 </p>
 </div>
 </footer>
 );
}