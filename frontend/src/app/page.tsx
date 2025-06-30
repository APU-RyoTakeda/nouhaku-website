// frontend/src/app/page.tsx
'use client'; // ★この行がファイルの一番先頭に必要です！

import { useState } from 'react'; 
import Header from '../components/layout/Header'; 
import HeroSection from '../components/sections/HeroSection'; 
import FeaturesSection from '../components/sections/FeaturesSection'; 
import PhraseSection from '../components/sections/PhraseSection'; 
import SplashLoader from '@/components/common/SplashLoader'; 
import HouseSpotlightSection from '@/components/sections/HouseSpotlightSection';
import TownSpotlightSection from '@/components/sections/TownSpotlightSection';


export default function Home() {
  const heroSectionHeightForHeader = 800; 

  const [showSplash, setShowSplash] = useState(true);
  const handleSplashEnd = () => { setShowSplash(false); };

  return (
    <>
      {showSplash && <SplashLoader onAnimationEnd={handleSplashEnd} />} 
      
      {!showSplash && ( 
        <>
          <Header heroHeight={heroSectionHeightForHeader} /> 
          <HeroSection /> 
          <PhraseSection />
          <div className="mt-16"> 
            <FeaturesSection /> 
          </div>
          <HouseSpotlightSection />
          <TownSpotlightSection />

          <section className="py-20 text-center bg-white">
            <h2 className="text-3xl font-bold">トップページの主要コンテンツが揃いました！</h2>
            <p className="mt-4 text-gray-600">この後、必要に応じて問い合わせフォームや予約ページの実装に進みます。</p>
          </section>

          {/* フローティング予約ボックスの要素 */}
          <div className="fixed bottom-8 right-8 z-50">
            <a 
              href="/reservation" // 予約ページのパス (適宜変更してください)
              className="bg-white border border-gray-400 text-gray-800 hover:bg-gray-100 font-bold py-2 px-4 rounded-md shadow-md transition-colors duration-300 text-lg" // サイズと色を調整
            >
              予約⌂
            </a>
          </div>
        </>
      )} 
    </>
  );
}