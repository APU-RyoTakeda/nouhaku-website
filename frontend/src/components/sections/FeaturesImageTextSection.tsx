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
}

const InternalImageTextRow = ({
  imageSrc,
  imageAlt,
  title,
  description,
  isImageLeft = true,
}: ImageTextRowProps) => {
  return (
    <div className={`flex flex-col md:flex-row items-center py-12 px-4 md:px-8 max-w-7xl mx-auto ${!isImageLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Image section */}
      <div className="w-full md:w-1/2 flex justify-center p-4">
        <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
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
        <p className="text-lg font-sans text-gray-600 leading-relaxed mb-6">{description}</p> 
        
        {/* Exploreボタン */}
        <Link href="/explore" passHref>
          <div className="inline-block bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105 cursor-pointer">
            Explore More
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
          description="秋田の旅は、豊かな大地が育んだ伝統の味覚と共に。きりたんぽ鍋やハタハタ料理、いぶりがっこなど、郷土色豊かな食文化が旅人を魅了します。雪深い冬を乗り越える知恵と、自然への感謝が詰まった温かい手料理は、訪れる人々の心と体を癒やします。地元の旬の食材が織りなす奥深い味わいを、ぜひ五感でお楽しみください。"
          isImageLeft={true}
        />

        {/* 2つ目の特徴：右に画像、左に説明 - 秋田の渓谷 */}
        <InternalImageTextRow
          imageSrc="/images/general/taki_1.jpg"
          imageAlt="秋田の美しい渓谷"
          title="息をのむ秋田の渓谷美"
          description="秋田には、息をのむほど美しい渓谷が点在し、四季折々の表情を見せてくれます。新緑の春には生命力あふれる緑が、夏には清らかな水の流れが、そして秋には燃えるような紅葉が、訪れる人々を感動させます。渓流沿いを散策すれば、鳥のさえずりや川のせせらぎが心地よく響き、心身ともにリフレッシュできるでしょう。自然が織りなす壮大な景観に浸り、穏やかな時間をお過ごしください。"
          isImageLeft={false}
        />
      </div>
    </section>
  );
}
