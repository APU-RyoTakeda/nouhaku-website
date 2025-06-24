// frontend/src/components/common/SplashLoader.tsx
'use client';

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
        src="/images/general/top_logo.png" // ★ここを修正しました: top_logo.png
        alt="藤里" // ロゴの代替テキスト
        width={150}
        height={37}
        priority
      />
    </div>
  );
}