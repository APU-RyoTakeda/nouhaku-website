// frontend/src/components/sections/FeaturesSection.tsx

import Image from 'next/image';
import FeatureCard from '../cards/FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/images/general/tomaru_aikon.png',
      title: '泊まる',
      description: '自然に囲まれた古民家で、心地よい滞在を。地元の方との交流も楽しめます。',
      link: '/houses',
      colorClass: 'bg-yellow-100'
    },
    {
      icon: '/images/general/taberu_aikon.png',
      title: '食べる',
      description: '里山の旬の食材を活かした、ここでしか味わえない郷土料理を堪能ください。',
      link: '/eat',
      colorClass: 'bg-orange-100'
    },
    {
      icon: '/images/general/meguru_aikon.png',
      title: '巡る',
      description: '世界遺産・白神山地の自然や、藤里町の歴史ある観光スポットを巡ります。',
      link: '/explore',
      colorClass: 'bg-green-100'
    },
  ];

  // featuredHouses の定義は、このセクションを削除するため不要になります。
  // もし他に利用箇所がなければ、この定義も削除して構いません。

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 「藤里町で，」のテキストは app/page.tsx に移動済みなのでここにはない */}

        {/* 3つの特徴カードのグリッドコンテナ。gap-24は現在の設定です。 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 max-w-4xl mx-auto mb-24">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link} // ここに undefined が渡されていました
              cardBgClass={feature.colorClass}
            />
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* featuredHouses のマッピングは省略 */}
        </div>
      </div>
    </section>
  );
}
