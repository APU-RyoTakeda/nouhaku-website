// frontend/src/app/page.tsx
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
            <FeaturesImageTextSection /> 
          </div>
          <HouseSpotlightSection />
          <TownSpotlightSection />

        </>
      )} 
    </>
  );
}
