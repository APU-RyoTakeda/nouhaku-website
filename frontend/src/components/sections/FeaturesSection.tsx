// frontend/src/components/sections/FeaturesSection.tsx の一部

import FeatureCard from '@/components/cards/FeatureCard';
import HouseCard from '@/components/cards/HouseCard'; // HouseCardもインポートされています

export default function FeaturesSection() {
  const features = [
    {
      icon: '🏠', // 仮のアイコン - 泊まる
      title: '泊まる',
      description: '自然に囲まれた古民家で、心地よい滞在を。地元の方との交流も楽しめます。',
      link: '/houses' // ★ここを /houses に変更します
    },
    {
      icon: '🍽️', // 仮のアイコン - 食べる
      title: '食べる',
      description: '里山の旬の食材を活かした、ここでしか味わえない郷土料理を堪能ください。',
      link: '/eat'
    },
    {
      icon: '🚶‍♀️', // 仮のアイコン - 巡る
      title: '巡る',
      description: '世界遺産・白神山地の自然や、藤里町の歴史ある観光スポットを巡ります。',
      link: '/explore'
    },
  ];

  // ... (featuredHouses の定義と return 部分は省略) ...

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 3つの特徴カードのタイトルとグリッド */}
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
              link={feature.link} // ここから /houses が FeatureCard に渡されます
            />
          ))}
        </div>

        {/* --- おすすめの農泊施設セクション --- */}
        {/* この部分は、FeaturesSection内にHouseCardを表示するものです */}
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