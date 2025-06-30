// frontend/src/components/cards/FeatureCard.tsx

import Link from 'next/link'; // Linkコンポーネントをインポート

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  link: string; // ★ link プロパティがインターフェースに含まれているか確認
}

export default function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    // ★カード全体が Link コンポーネントで囲まれていることを確認
    <Link href={link} className="block group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center h-full flex flex-col items-center justify-start">
        {/* ★丸いアイコンのスタイルが適用されていることを確認 */}
        <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 text-4xl text-blue-600 group-hover:bg-blue-200 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-base flex-grow">
          {description}
        </p>
      </div>
    </Link>
  );
}