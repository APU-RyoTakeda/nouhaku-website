// frontend/src/components/cards/FeatureCard.tsx

import Link from 'next/link';
import Image from 'next/image';

// FeatureCardProps 型を定義
interface FeatureCardProps {
  icon: string; // 絵文字も画像パスも文字列なのでstring型
  title: string;
  description: string;
  link: string;
  cardBgClass?: string; // 背景色クラス (オプション)
}

export default function FeatureCard({ icon, title, description, link, cardBgClass }: FeatureCardProps) {
  // iconが画像のパスであるか絵文字であるかを判別
  const isImage = typeof icon === 'string' && icon.startsWith('/');

  // cardBgClass が指定されていればそれを使用し、なければデフォルトで bg-white を使用
  const bgColor = cardBgClass || 'bg-white';

  return (
    <Link
      href={link}
      // Tailwind CSSのクラスを結合するためにテンプレートリテラルを使用
      className={`block rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center ${bgColor}`}
    >
      <div className="flex items-center justify-center mb-4">
        {isImage ? (
          // Next.jsのImageコンポーネントを使用する例
          // widthとheight、およびclassNameでサイズを調整
          <Image
            src={icon}
            alt={title}
            width={80} // アイコンサイズを大きく
            height={80} // アイコンサイズを大きく
            className="w-20 h-20 object-contain" // Tailwind CSSでサイズを調整
          />
        ) : (
          // 絵文字の場合
          <span className="text-6xl" role="img" aria-label={title}> {/* 絵文字サイズを大きく */}
            {icon}
          </span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
}