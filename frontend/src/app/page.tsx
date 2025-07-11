// frontend/src/app/page.tsx
'use client';

import { useState } from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import PhraseSection from '../components/sections/PhraseSection';
import SplashLoader from '@/components/common/SplashLoader';

import FeaturesImageTextSection from '../components/sections/FeaturesImageTextSection';
import FixedBookingButton from '../components/common/FixedBookingButton';
import FeaturesSection from '@/components/sections/FeatureSection';

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
          <FeaturesSection />

          <div className="mt-16">
            <FeaturesImageTextSection />
          </div>
          {/* <HouseSpotlightSection /> */}{" "} {/* ★削除 */}
          {/* <TownSpotlightSection /> */}{" "} {/* ★削除 */}
        </>
      )}
    </>
  );
}