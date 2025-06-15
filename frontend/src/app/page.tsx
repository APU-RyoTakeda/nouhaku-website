// frontend/src/app/page.tsx
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HouseSpotlightSection from '@/components/sections/HouseSpotlightSection';
import TownSpotlightSection from '@/components/sections/TownSpotlightSection'; // TownSpotlightSectionをインポート

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HouseSpotlightSection />
      <TownSpotlightSection /> {/* ここにTownSpotlightSectionを追加 */}
      {/* 最後にCTAセクションなどを追加することも検討できます */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold">トップページの主要コンテンツが揃いました！</h2>
        <p className="mt-4 text-gray-600">この後、必要に応じて問い合わせフォームや予約ページの実装に進みます。</p>
      </section>
    </>
  );
}