// frontend/src/components/common/HeroSlider.tsx
'use client'; // クライアントコンポーネントとしてマーク

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'; // 必要に応じてモジュールをインポート
import Image from 'next/image';

// SwiperのCSSをインポート
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // EffectFadeを使う場合

interface HeroSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function HeroSlider({ images }: HeroSliderProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]} // 使用するモジュールを指定
      slidesPerView={1}
      spaceBetween={0}
      effect="fade" // フェードエフェクトを適用
      fadeEffect={{ crossFade: true }} // クロスフェードを有効に
      autoplay={{
        delay: 5000, // 5秒ごとにスライド
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true} // ループ再生
      className="w-full h-full" // 親要素のサイズに合わせる
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill // 親要素に合わせて画像を埋める
              style={{ objectFit: 'cover' }} // 画像がコンテナを覆うように調整
              priority={index === 0} // 最初の画像はLCP改善のため優先的にロード
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" // レスポンシブ画像最適化
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}