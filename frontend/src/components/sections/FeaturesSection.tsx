// frontend/src/components/sections/FeaturesSection.tsx

import Image from 'next/image';
import FeatureCard from '../cards/FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      icon: '🏠', // 泊まる
      title: '泊まる',
      description: '自然に囲まれた古民家で、心地よい滞在を。地元の方との交流も楽しめます。',
      link: '/houses',
      // colorClass: 'bg-white' // デフォルトは白、あるいは指定しない
    },
    {
      icon: '/images/general/taberu_aikon.png', // 「食べる」のアイコンを画像パスに変更
      title: '食べる',
      description: '里山の旬の食材を活かした、ここでしか味わえない郷土料理を堪能ください。',
      link: '/eat',
      colorClass: 'bg-orange-100' // ★ここを追加：オレンジ色の背景クラス
    },
    {
      icon: '🚶‍♀️', // 巡る
      title: '巡る',
      description: '世界遺産・白神山地の自然や、藤里町の歴史ある観光スポットを巡ります。',
      link: '/explore',
      // colorClass: 'bg-white' // デフォルトは白、あるいは指定しない
    },
  ];

  // ... (featuredHouses の定義と return 部分は省略) ...

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          藤里農泊の３つの魅力
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-24">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              cardBgClass={feature.colorClass} // ★ここを追加：FeatureCardに新しいプロパティを渡す
            />
          ))}
        </div>

        {/* --- おすすめの農泊施設セクション --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          おすすめの農泊施設
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* featuredHouses のマッピングは省略 */}
        </div>
      </div>
    </section>
  );
}