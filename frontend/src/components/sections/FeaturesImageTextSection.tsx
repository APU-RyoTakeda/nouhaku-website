// frontend/src/components/sections/FeaturesImageTextSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // next/link をインポート

interface ImageTextRowProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  isImageLeft?: boolean;
  imageHeightClass?: string;
}

const InternalImageTextRow = ({
  imageSrc,
  imageAlt,
  title,
  description,
  isImageLeft = true,
  imageHeightClass = "h-[400px] md:h-[650px]",
}: ImageTextRowProps) => {
  return (
    <div className={`flex flex-col md:flex-row items-center py-12 px-4 md:px-8 max-w-7xl mx-auto ${!isImageLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Image section */}
      <div className="w-full md:w-1/2 flex justify-center p-4">
        <div className={`relative w-full ${imageHeightClass} rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Text section */}
      <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
        {/* 見出し */}
        <h3 className="text-3xl font-bold font-mincho text-gray-800 mb-2 group relative inline-block">
          {title}
          {/* 線のアニメーション */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
        </h3>
        {/* ★変更: dangerouslySetInnerHTML を使用してHTML（<br />）をレンダリングできるようにする★ */}
        <p
          className="text-lg font-sans text-gray-600 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>

        {/* Exploreアイコンボタン */}
        <Link href="/explore" passHref>
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-110 cursor-pointer">
            {/* SVGアイコン (右矢印) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default function FeaturesImageTextSection() {
  return (
    <section
      className="py-16 bg-neutral-50"
      style={{
        backgroundImage: "url('/images/backgrounds/washi-texture.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold font-mincho text-center text-gray-900 mb-16">
          秋田の魅力
        </h2>

        {/* 1つ目の特徴：左に画像、右に説明 - 秋田の伝統料理 */}
        <InternalImageTextRow
          imageSrc="/images/general/taberu_2.jpg"
          imageAlt="秋田の伝統料理"
          title="秋田が誇る伝統の味覚"
          // ★変更: 文章内に <br /> を挿入し、改行する★
          description="秋田の旅は、豊かな大地が育んだ伝統の味覚と共に。<br />きりたんぽ鍋やハタハタ料理、いぶりがっこなど、郷土色豊かな食文化が旅人を魅了します。<br />雪深い冬を乗り越える知恵と、自然への感謝が詰まった温かい手料理は、訪れる人々の心と体を癒やします。<br />地元の旬の食材が織りなす奥深い味わいを、ぜひ五感でお楽しみください。"
          isImageLeft={true}
          imageHeightClass="h-80 md:h-[500px]"
        />

        {/* 2つ目の特徴：右に画像、左に説明 - 秋田の豊かな自然 */}
        <InternalImageTextRow
          imageSrc="/images/general/taki_1.jpg"
          imageAlt="秋田の雄大な自然"
          title="息をのむ秋田の豊かな自然"
          // ★変更: 文章内に <br /> を挿入し、改行する★
          description="秋田は、壮大な山々、清らかな川、そして手つかずの広大な森が織りなす、多様な自然に満ちています。<br />四季折々の表情を見せる風景は、訪れる人々の心に深く刻まれます。<br />鳥のさえずり、風の音、川のせせらぎに耳を傾けながら、日常の喧騒を忘れ、心身ともに深くリフレッシュできるでしょう。<br />自然が持つ癒やしの力を、全身で感じてください。"
          isImageLeft={false}
          imageHeightClass="h-[400px] md:h-[650px]"
        />
      </div>
    </section>
  );
}
