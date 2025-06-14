// frontend/src/app/page.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// SwiperのCSSをインポート (必須)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  // ダミー画像のパス (publicディレクトリからの相対パス)
  const heroImages = [
    '/temporary-image1.png', // publicディレクトリ直下にある場合
    '/temporary-image2.png',
    '/temporary-image3.png',
  ];

  return (
    // 最上部のコンテナ。fixedヘッダーのすぐ下にくるように調整。
    // layout.tsxのmainタグからpt-20は削除済み前提です。
    // このdivがページ全体のコンテンツを保持します。
    <div>
      {/* ヒーロースライドショーとそれに重ねるコンテンツをまとめたセクション */}
      {/* このセクションがビューポートの最上部から始まり、全画面を占めるようにします */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* スライドショー本体 */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full" // Swiperのカスタムクラス
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`農泊体験イメージ ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  quality={80}
                  priority={index === 0}
                  className="animate-fade-in"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ヒーローコンテンツ（スライドショーに重ねるテキストなど） */}
        {/* スライドショーのセクションに対して absolute で重ねます */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg mb-4 animate-slide-up">
            秋田で、本当の自分と出会う
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg mb-8 animate-slide-up animation-delay-200">
            豊かな自然と温かい人情に触れる農泊体験
          </p>
          <Link href="/houses" className="px-8 py-4 bg-[#2ECC71] text-white rounded-full text-lg md:text-xl font-semibold hover:bg-[#28B463] transition-all duration-300 animate-fade-in animation-delay-400">
            体験を探す
          </Link>
        </div>
      </section>

      {/* 仮のコンテンツ（スライドショーの下に続く） */}
      {/* スライドショーセクションが h-screen を占めるので、次のコンテンツは自然にその下に続きます */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">農泊プロジェクトへようこそ</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          都市の喧騒を離れ、秋田の美しい里山で過ごす特別な時間。
          採れたての野菜を味わい、伝統文化に触れ、地元の人々との交流を通じて、
          心豊かな体験をしてみませんか？
        </p>
        {/* ここに今後のコンテンツが追加されます */}
      </section>
    </div>
  );
}
