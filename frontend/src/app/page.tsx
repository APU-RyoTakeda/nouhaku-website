// frontend/src/app/page.tsx
'use client'; // この行は必須です！

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

          {/* ★★★ しずく型に戻し、水っぽいグラデーションと白文字に修正 ★★★ */}
          <a
            href="/reservation"
            className="fixed bottom-8 right-8 z-50 text-white font-bold py-3 px-5 rounded-full shadow-md transition-colors duration-300 text-lg
                       bg-gradient-to-br from-blue-300 to-blue-500 hover:from-blue-400 hover:to-blue-600" // 水っぽいグラデーションクラス
            style={{
              borderRadius: '50% 50% 25% 50%', // しずくの形
              paddingTop: '0.8rem', // 縦長に調整
              paddingBottom: '1.2rem',
            }}
          >
            予約
          </a>
        </>
      )} 
    </>
  );
}