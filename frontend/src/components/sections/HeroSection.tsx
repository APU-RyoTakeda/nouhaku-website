// frontend/src/components/sections/HeroSection.tsx
import HeroSlider from '@/components/common/HeroSlider';
import Image from 'next/image';

export default function HeroSection() {
  const heroImages = [
    { src: '/images/hero/buna.png', alt: 'ブナ' },
    { src: '/images/hero/hero-2.png', alt: '伝統的な農家の暮らし' },
    { src: '/images/hero/hero-3.png', alt: '豊かな自然と人々の笑顔' },
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* 背景のスライダーの代わりに、単一の画像を表示 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/general/to_haikei.png"
          alt="秋田県藤里町の風景"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
          className="image-filter"
        />
        {/* 背景にオーバーレイをかけることでテキストの視認性を高める */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* 中央のコンテンツ（ロゴ画像とキャッチコピー）をまとめるコンテナ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
        {/* 中央に表示するロゴ画像 */}
        <div className="mb-8">
          <Image
            src="/images/general/top_logo_toumei.png"
            alt="農泊ロゴ"
            width={400} // ★ここを修正: 例として400に (さらに大きく)
            height={100} // ★ここを修正: 例として100に (アスペクト比を保つために width に合わせて調整)
            priority
          />
        </div>

       
      </div>
    </section>
  );
}