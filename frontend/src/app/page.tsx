// frontend/src/app/page.tsx
'use client';

import { useState } from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import PhraseSection from '../components/sections/PhraseSection'; // ここを修正しました: '../ ../' -> '../'
import SplashLoader from '@/components/common/SplashLoader';
import HouseSpotlightSection from '@/components/sections/HouseSpotlightSection';
import TownSpotlightSection from '../components/sections/TownSpotlightSection';
import FeaturesImageTextSection from '../components/sections/FeaturesImageTextSection';
// ★新しく追加するコンポーネントをインポートします★
import FixedBookingButton from '../components/common/FixedBookingButton';
// FeatureSection のインポートを追加
import FeatureSection from '../components/sections/FeatureSection';


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

          <FixedBookingButton />
          <HeroSection />
          <PhraseSection />
          <FeatureSection /> {/* ここでコンポーネントが使用されています */}

          <div className="mt-16">
            <FeaturesImageTextSection />
          </div>

        </>
      )}
    </>
  );
}
