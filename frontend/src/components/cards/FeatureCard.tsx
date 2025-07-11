// frontend/src/components/cards/FeatureCard.tsx

import Link from 'next/link';
import Image from 'next/image';

// FeatureCardProps 型を定義
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  cardBgClass?: string; // 背景色クラス (オプション)
}

export default function FeatureCard({ icon, title, description, link, cardBgClass }: FeatureCardProps) {
  // iconが画像のパスであるか絵文字であるかを判別
  const isImage = typeof icon === 'string' && icon.startsWith('/');
  // 背景色クラスが指定されていればそれを使用し、なければデフォルトで bg-white を使用
  const bgColor = cardBgClass || 'bg-white';

  return (
    <Link
      href={link}
<<<<<<< HEAD
      // ★★★ カードのサイズを固定し、rounded-fullで円形に ★★★
=======
>>>>>>> f10b1f3ec026503cfb0327acf20be6e4b2868f36
      className={`relative block w-80 h-80 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 p-4 text-center ${bgColor} flex flex-col justify-center items-center group`}
    >
      <div className="flex flex-col items-center justify-center">
        {isImage ? (
          // Next.jsのImageコンポーネントを使用する例
          // widthとheight、およびclassNameでサイズを調整
          <Image
            src={icon}
            alt={title}
<<<<<<< HEAD
            width={96} // アイコンサイズを大きく
            height={96} // アイコンサイズを大きく
            className="w-24 h-24 object-contain mb-2" // Tailwind CSSでサイズを調整
          />
        ) : (
          // 絵文字の場合
          <span className="text-7xl mb-2" role="img" aria-label={title}>
=======
            width={96} // ★ここを72から96に変更 (Next.js Imageのwidth)
            height={96} // ★ここを72から96に変更 (Next.js Imageのheight)
            className="w-24 h-24 object-contain mb-2" // ★ここをw-18 h-18からw-24 h-24に変更 (Tailwind CSS)
          />
        ) : (
          // 絵文字の場合 (現在は使用していませんが、念のため)
          <span className="text-7xl mb-2" role="img" aria-label={title}> {/* text-5xlからtext-7xlに変更 */}
>>>>>>> f10b1f3ec026503cfb0327acf20be6e4b2868f36
            {icon}
          </span>
        )}
        <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
          {title}
        </h3>
<<<<<<< HEAD
        {/* 説明文を削除し、more &rarr; だけを配置 */}
        <p className="text-gray-600 text-xs leading-snug mt-2">
=======
        <p className="text-gray-600 text-xs leading-snug">
>>>>>>> f10b1f3ec026503cfb0327acf20be6e4b2868f36
          <span className="ml-1 font-bold text-blue-600 inline-block group-hover:translate-x-1 transition-transform duration-200">
            more &rarr;
          </span>
        </p>
      </div>
    </Link>
  );
}