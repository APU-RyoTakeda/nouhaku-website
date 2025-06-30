// frontend/src/components/cards/FeatureCard.tsx

import Link from 'next/link';
import Image from 'next/image';
// 必要であれば react-icons からインポートすることもできます
// import { FaArrowRight } from 'react-icons/fa'; // 例

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  cardBgClass?: string;
}

export default function FeatureCard({ icon, title, description, link, cardBgClass }: FeatureCardProps) {
  const isImage = typeof icon === 'string' && icon.startsWith('/');
  const bgColor = cardBgClass || 'bg-white';

  return (
    <Link
      href={link}
      className={`relative block rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center ${bgColor} flex flex-col justify-between items-center`} // 親要素をflex-colにして下揃えに調整
    >
      <div className="flex flex-col items-center justify-center mb-4 flex-grow"> {/* flex-grow でコンテンツ部分が広がるように */}
        {isImage ? (
          <Image
            src={icon}
            alt={title}
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
          />
        ) : (
          <span className="text-6xl" role="img" aria-label={title}>
            {icon}
          </span>
        )}
        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">{title}</h3> {/* アイコンとタイトルの間にマージンを追加 */}
        <p className="text-gray-600 text-sm mb-4">{description}</p> {/* 矢印との間にマージンを追加 */}
      </div>

      {/* ★★★ このdivが矢印アイコンのコンテナです ★★★ */}
      <div className="absolute bottom-4 right-6 text-2xl text-gray-700 group-hover:translate-x-1 transition-transform duration-200">
        → {/* シンプルな右矢印（→） */}
        {/* もし react-icons を使うなら: */}
        {/* <FaArrowRight /> */}
      </div>
    </Link>
  );
}