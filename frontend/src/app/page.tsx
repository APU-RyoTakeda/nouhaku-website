// frontend/src/app/page.tsx
'use client'; 

import { useState } from 'react'; 
import Header from '../components/layout/Header'; 
import HeroSection from '../components/sections/HeroSection'; 
import FeaturesSection from '../components/sections/FeaturesSection'; 
import PhraseSection from '../components/sections/PhraseSection'; 
import SplashLoader from '@/components/common/SplashLoader'; 
import HouseSpotlightSection from '@/components/sections/HouseSpotlightSection';
import TownSpotlightSection from '@/components/sections/TownSpotlightSection';


export default function Home() {
  // ヘッダーの表示タイミングを制御するための高さ。HeroSectionの実際の高さに合わせる。
  // HeroSectionがh-screenなので、画面の高さと仮定して800pxを設定しておく。
  const heroSectionHeightForHeader = 800; // この値は変わらずでOK

  const [showSplash, setShowSplash] = useState(true);
  const handleSplashEnd = () => { setShowSplash(false); };

  return (
    <>
      {showSplash && <SplashLoader onAnimationEnd={handleSplashEnd} />} 
      
      {!showSplash && ( 
        <>
          {/* HeaderコンポーネントはheroSectionHeightForHeaderを使ってスクロール制御 */}
          <Header heroHeight={heroSectionHeightForHeader} /> 

          {/* ★★★ここを修正します★★★ */}
          {/* HeroSection をそのまま呼び出す。高さの指定は HeroSection.tsx 内で行うので、
             外側で高さ (h-[800px]) を持つ div で囲む必要はありません。 */}
          <HeroSection /> 
          {/* ★★★修正ここまで★★★ */}

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
        </>
      )} 
    </>
  );
}