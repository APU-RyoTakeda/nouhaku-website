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
          {/* ★★★ 変更点: 各セクションのIDは維持し、仮のセクションは削除 ★★★ */}
          {/* HeroSectionはページトップなのでIDを維持 */}
          <section id="hero-section">
            <HeroSection />
          </section>
          <PhraseSection />
          <FeaturesSection />

          <div className="mt-16">
            <FeaturesImageTextSection />
          </div>

          {/* ★★★ 削除: 仮のセクションはすべて削除しました ★★★ */}

        </>
      )}
    </>
  );
}
