// frontend/src/components/common/SplashLoader.tsx
'use client'; // クライアントコンポーネントとしてマーク

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SplashLoaderProps {
  onAnimationEnd: () => void;
}

export default function SplashLoader({ onAnimationEnd }: SplashLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    const fadeOutTimer = setTimeout(() => {
        onAnimationEnd();
    }, 2000 + 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
    };
  }, [onAnimationEnd]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`
      fixed inset-0 bg-white flex items-center justify-center z-[9999]
      transition-opacity duration-500
      ${isVisible ? 'opacity-100' : 'opacity-0'}
    `}>
      {/* 画像ロゴを表示 */}
      <Image
        src="/images/general/top_logo_toumei.png" // ★ここを修正
        alt="Fujisato ロゴ" // ★altテキストを修正
        width={300} // 画像の幅を調整（例として300px）
        height={150} // 画像の高さを調整（例として150px、アスペクト比に合わせて）
        priority
      />
    </div>
  );
}