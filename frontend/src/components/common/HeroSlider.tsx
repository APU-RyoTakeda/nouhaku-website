// frontend/src/components/common/HeroSlider.tsx
'use client'; // クライアントコンポーネントとしてマーク

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Image from 'next/image';

// SwiperのCSSはglobals.cssで読み込むのが推奨
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';

interface HeroSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function HeroSlider({ images }: HeroSliderProps) {
  const settings = {
    modules: [Autoplay, Pagination, EffectFade], // 使用するモジュールを指定
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade", // フェードエフェクトを適用
    fadeEffect: { crossFade: true }, // クロスフェードを有効に
    autoplay: {
      delay: 5000, // 5秒ごとにスライド
      disableOnInteraction: false,
    },
    pagination: { clickable: true },
    loop: true, // ループ再生
    className: "w-full h-full", // 親要素のサイズに合わせる
  };

  return (
    <Swiper {...settings}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          {/* 親要素が確実に高さを確保するように min-h-full を追加 */}
          <div className="relative w-full h-full min-h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}