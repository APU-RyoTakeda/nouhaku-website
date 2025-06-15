// frontend/src/components/cards/HouseCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface HouseCardProps {
  slug: string; // 施設詳細ページへのリンク用
  imageUrl: string;
  imageAlt: string;
  title: string;
  location: string; // 例: "秋田市"
  description: string; // 短い説明
  price: string; // 例: "1泊 8,000円～"
}

export default function HouseCard({ slug, imageUrl, imageAlt, title, location, description, price }: HouseCardProps) {
  return (
    <Link href={`/houses/${slug}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* 仮のバッジなど */}
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">おすすめ</div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{location}</p>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="text-lg font-bold text-green-700">{price}</div>
      </div>
    </Link>
  );
}