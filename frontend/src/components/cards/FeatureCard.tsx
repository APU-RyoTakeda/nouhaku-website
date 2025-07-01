// frontend/src/components/cards/FeatureCard.tsx

import Link from 'next/link';
import Image from 'next/image';

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
      className={`relative block w-80 h-80 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 p-4 text-center ${bgColor} flex flex-col justify-center items-center group`}
    >
      <div className="flex flex-col items-center justify-center">
        {isImage ? (
          <Image
            src={icon}
            alt={title}
            width={96} // ★ここを72から96に変更 (Next.js Imageのwidth)
            height={96} // ★ここを72から96に変更 (Next.js Imageのheight)
            className="w-24 h-24 object-contain mb-2" // ★ここをw-18 h-18からw-24 h-24に変更 (Tailwind CSS)
          />
        ) : (
          // 絵文字の場合 (現在は使用していませんが、念のため)
          <span className="text-7xl mb-2" role="img" aria-label={title}> {/* text-5xlからtext-7xlに変更 */}
            {icon}
          </span>
        )}
        <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-xs leading-snug">
          <span className="ml-1 font-bold text-blue-600 inline-block group-hover:translate-x-1 transition-transform duration-200">
            more &rarr;
          </span>
        </p>
      </div>
    </Link>
  );
}