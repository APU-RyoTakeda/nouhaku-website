// frontend/src/components/sections/HeroSection.tsx
import HeroSlider from '@/components/common/HeroSlider';
import Image from 'next/image';

export default function HeroSection() {
  const heroImages = [
    { src: '/images/hero/shirakamisannti_1.jpg', alt: '白神山地 夏のブナ林' },
    { src: '/images/hero/shirakamisannti_2.jpg', alt: '白神山地 透明な渓流' },
    { src: '/images/hero/shirakamisannti_3.jpg', alt: '白神山地 秋の滝' },
    { src: '/images/hero/shirakamisannti_4.jpg', alt: '白神山地 冬の山々' },
  ];

  return (
    // ★mb-16 を mb-8 に変更します
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden mb-8">
      {/* 背景にHeroSliderを再導入 */}
      <div className="absolute inset-0 z-0">
        <HeroSlider images={heroImages} />
        {/* 背景にオーバーレイをかけることでテキストの視認性を高める */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* 中央のコンテンツ（ロゴ画像、キャッチコピーと説明文）をまとめるコンテナ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
        {/* 中央に表示するロゴ画像 */}
        <div className="mb-8">
          <Image
            src="/images/general/top_logo_toumei.png"
            alt="Fujisato ロゴ"
            width={300}
            height={150}
            priority
          />
        </div>

        {/* キャッチコピーはここに表示されます */}
      </div>
    </section>
  );
}