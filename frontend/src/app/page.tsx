'use client'; 

import { useState } from 'react'; 
import Header from '../components/layout/Header'; 
import HeroSection from '../components/sections/HeroSection'; 
import PhraseSection from '../components/sections/PhraseSection'; 
import SplashLoader from '@/components/common/SplashLoader'; 
import HouseSpotlightSection from '@/components/sections/HouseSpotlightSection';
import TownSpotlightSection from '../components/sections/TownSpotlightSection';
import FeaturesImageTextSection from '../components/sections/FeaturesImageTextSection'; 
// ★新しく追加するコンポーネントをインポートします★
import FixedBookingButton from '../components/common/FixedBookingButton'; 


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

          {/* HeroSection をそのまま呼び出す。高さの指定は HeroSection.tsx 内で行うので、
              外側で高さ (h-[800px]) を持つ div で囲む必要はありません。 */}
          <HeroSection /> 
          
          <PhraseSection />

          {/* FeaturesSection の代わりに FeaturesImageTextSection コンポーネントを配置します */}
          <div className="mt-16"> 
            <FeaturesImageTextSection /> 
          </div>

          <HouseSpotlightSection />
          <TownSpotlightSection />
          
          {/* ★画面右下に常に表示される予約ボタンを配置します★ */}
          <FixedBookingButton />
        </>
      )} 
    </>
  );
}
