// frontend/src/app/page.tsx
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection'; // FeaturesSectionをインポート

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection /> {/* ここにFeaturesSectionを追加 */}
      {/* 今後、HouseSpotlightSectionなどを追加していきます */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">次のセクションがここから始まります</h2>
        <p className="mt-4 text-gray-600">今後、様々なコンテンツブロックを追加していきます。</p>
      </section>
    </>
  );
}