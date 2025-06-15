// frontend/src/components/sections/HeroSection.tsx
import HeroSlider from '@/components/common/HeroSlider'; // 作成したスライダーをインポート

export default function HeroSection() {
  // 仮の画像データ。public/images/hero/ に画像を配置してください。
  const heroImages = [
    { src: '/images/hero/hero-1.png', alt: '秋田の美しい田園風景' },
    { src: '/images/hero/hero-2.png', alt: '伝統的な農家の暮らし' },
    { src: '/images/hero/hero-3.png', alt: '豊かな自然と人々の笑顔' },
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* 背景のスライダー */}
      <div className="absolute inset-0 z-0">
        <HeroSlider images={heroImages} />
        {/* 背景にオーバーレイをかけることでテキストの視認性を高める */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* コンテンツ（キャッチコピーなど） */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
          足元に、地球の鼓動を聴く。<br />秋田の自然と人情が彩る、時間にとらわれない暮らし。
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
          忘れかけていた心のゆとりと、本当の自分に出会う旅へ。
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
          農泊を探す
        </button>
      </div>
    </section>
  );
}