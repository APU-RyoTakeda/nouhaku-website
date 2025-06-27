// frontend/src/components/sections/HeroSection.tsx
import HeroSlider from '@/components/common/HeroSlider'; // HeroSliderを再度インポート
import Image from 'next/image'; // Imageコンポーネントは引き続き必要

export default function HeroSection() {
  // 背景スライドショー用の画像データ (4枚の白神山地の写真)
  const heroImages = [
    { src: '/images/hero/shirakamisannti_1.jpg', alt: '白神山地 夏のブナ林' },
    { src: '/images/hero/shirakamisannti_2.jpg', alt: '白神山地 透明な渓流' },
    { src: '/images/hero/shirakamisannti_3.jpg', alt: '白神山地 秋の滝' },
    { src: '/images/hero/shirakamisannti_4.jpg', alt: '白神山地 冬の山々' },
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* 背景にHeroSliderを再導入 */}
      <div className="absolute inset-0 z-0">
        <HeroSlider images={heroImages} /> {/* HeroSliderに画像を渡す */}
        {/* 背景にオーバーレイをかけることでテキストの視認性を高める */}
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* オーバーレイをopacity-60に戻しました。必要に応じて調整してください */}
      </div>

      {/* 中央のコンテンツ（ロゴ画像、キャッチコピーと説明文）をまとめるコンテナ */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
        {/* 中央に表示するロゴ画像 */}
        <div className="mb-8"> {/* キャッチコピーとの間にマージン */}
          <Image
            src="/images/general/top_logo_toumei.png" // ★挿入するロゴ画像パス
            alt="Fujisato ロゴ" // ★適切なaltテキスト
            width={300} // ★サイズを調整してください
            height={150} // ★サイズを調整してください
            priority
          />
        </div>

        {/* キャッチコピー */}
       
      </div>
    </section>
  );
}