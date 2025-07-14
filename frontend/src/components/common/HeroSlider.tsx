// frontend/src/components/common/HeroSlider.tsx
'use client'; // クライアントコンポーネントとしてマーク

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Image from 'next/image';

interface HeroSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
  showPagination?: boolean;
  onSlideEnd?: () => void; // ★新しく追加するプロパティ: スライダー再生終了時に呼び出す関数
}

export default function HeroSlider({ images, showPagination = true, onSlideEnd }: HeroSliderProps) {
  const settings = {
    modules: [Autoplay, Pagination, EffectFade],
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: showPagination ? { clickable: true } : false,
    loop: true,
    className: "w-full h-full",
    // ★ここを追加：スライダーのAutoplayがループする前に一度停止し、onSlideEndを呼び出す
    onAutoplayTimeLeft: (swiper: any, timeLeft: number, percentage: number) => {
      // オートプレイが最後に近づいたら停止し、イベントを発火
      if (percentage < 0.1 && swiper.activeIndex === swiper.slides.length - 1 && !swiper.params.loop) {
        swiper.autoplay.stop();
        onSlideEnd?.(); // onSlideEnd関数が存在すれば呼び出す
      }
    },
    // loopがtrueの場合、onSlideChangeTransitionEnd を使ってループの1周目だけを検出する
    onSlideChangeTransitionEnd: (swiper: any) => {
        if (swiper.realIndex === swiper.slides.length - 1 && swiper.params.loop && !swiper.hasLoopedOnce) {
            swiper.hasLoopedOnce = true; // 1周したフラグ
            swiper.autoplay.stop(); // オートプレイを停止
            onSlideEnd?.(); // イベントを発火
        } else if (!swiper.params.loop && swiper.activeIndex === swiper.slides.length - 1 && swiper.autoplay.running) {
             // ループしない設定の場合の最後のスライド
            swiper.autoplay.stop();
            onSlideEnd?.();
        }
    }
  };

  return (
    <Swiper {...settings}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
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