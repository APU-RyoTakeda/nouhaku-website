// frontend/src/app/page.tsx
'use client'; // クライアントコンポーネントとしてマーク

import { useState, useEffect } from 'react'; // useState, useEffectをインポート
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import PhraseSection from '../components/sections/PhraseSection';
import FeaturesImageTextSection from '../components/sections/FeaturesImageTextSection';
import FixedBookingButton from '../components/common/FixedBookingButton';
import FeaturesSection from '@/components/sections/FeatureSection';
import SplashLoader from '@/components/common/SplashLoader'; // ★ここをSplashLoaderに戻します


export default function Home() {
  const heroSectionHeightForHeader = 800; 

  // SplashLoaderを表示するかどうかの状態
  const [showSplash, setShowSplash] = useState(true);
  // メインコンテンツを表示するかどうかの状態
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // sessionStorageでスプラッシュスクリーンが既に表示されたか確認
    if (typeof window !== 'undefined' && sessionStorage.getItem('hasSplashShown')) {
      // 既に表示済みであれば、スプラッシュスクリーンをスキップしてメインコンテンツを表示
      setShowSplash(false);
      setShowMainContent(true);
    } else {
      // 初回表示の場合、スプラッシュスクリーンを表示
      // SplashLoaderコンポーネントがonAnimationEndを呼び出すまで待つ
    }
  }, []); // コンポーネントマウント時のみ実行

  // SplashLoaderのアニメーションが終了したときに呼び出される関数
  const handleSplashEnd = () => { // ★onAnimationEnd に対応する関数名
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hasSplashShown', 'true'); // フラグを設定
    }
    setShowSplash(false); // SplashLoaderを非表示に
    setShowMainContent(true); // メインコンテンツを表示
  };


  return (
    <>
      {/* SplashLoaderを呼び出し、onAnimationEndを渡す */}
      {showSplash && <SplashLoader onAnimationEnd={handleSplashEnd} />} 

      {showMainContent && ( // showMainContentがtrueのときだけメインコンテンツを表示
        <>
          <Header heroHeight={heroSectionHeightForHeader} />

          <FixedBookingButton />
          <HeroSection />
          <PhraseSection />
          <FeaturesSection />

          <div className="mt-16">
            <FeaturesImageTextSection />
          </div>
          {/* HouseSpotlightSectionとTownSpotlightSectionは削除済み */}
        </>
      )}
    </>
  );
}