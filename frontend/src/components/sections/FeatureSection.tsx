// frontend/src/components/sections/FeaturesSection.tsx

import Image from 'next/image';
import FeatureCard from '../cards/FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/images/general/tomaru_aikon.png', // 「泊まる」のアイコンを画像パスに変更
      title: '泊まる',
      description: '自然に囲まれた古民家で、心地よい滞在を。地元の方との交流も楽しめます。',
      link: '/houses',
    },
    {
      icon: '/images/general/taberu_aikon.png', // 「食べる」のアイコン（画像パス）
      title: '食べる',
      description: '里山の旬の食材を活かした、ここでしか味わえない郷土料理を堪能ください。',
      link: '/eat',
      colorClass: 'bg-orange-100' // 「食べる」の背景色をオレンジに
    },
    {
      icon: '/images/general/meguru_aikon.png', // 「巡る」のアイコン（画像パス）
      title: '巡る',
      description: '世界遺産・白神山地の自然や、藤里町の歴史ある観光スポットを巡ります。',
      link: '/explore',
      colorClass: 'bg-green-100' // 「巡る」の背景色を緑に
    },
  ];

  // featuredHouses の定義（省略されていますが、必要であればここに追加してください）

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* ★★★ このH2タグを削除します ★★★ */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          藤里農泊の３つの魅力
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-24">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              cardBgClass={feature.colorClass}
            />
          ))}
        </div> {/* ここに閉じタグを追加しました */}
      </div>
    </section>
  );
}
