// frontend/src/components/sections/PhraseSection.tsx
import HeroSlider from '@/components/common/HeroSlider'; // このコンポーネントは現在使用されていませんが、インポートは残しています
import Image from 'next/image'; // Imageコンポーネントは引き続き必要

export default function PhraseSection() { // ★コンポーネント名をPhraseSectionに修正
  // heroImagesはHeroSliderを使用しないため、このデータは現在使用されていません
  const heroImages = [
    { src: '/images/hero/buna.png', alt: 'ブナ' },
    { src: '/images/hero/hero-2.png', alt: '伝統的な農家の暮らし' },
    { src: '/images/hero/hero-3.png', alt: '豊かな自然と人々の笑顔' },
  ];

  return (
    // sectionタグにbg-whiteを追加し、背景画像とオーバーレイを削除
    <section className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden text-gray-800"> {/* ★bg-whiteを追加、text-whiteを削除しtext-gray-800に */}
      {/* 背景の単一画像とオーバーレイを削除 */}
      {/*
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/town_1.png"
          alt="秋田県藤里町の風景"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
          className="image-filter"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      */}

      {/* 中央のコンテンツ（キャッチコピーと説明文）をまとめるコンテナ */}
      {/* 背景が白になるため、文字色をtext-gray-800に調整します */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
        {/* 中央に表示するロゴ画像（コメントアウトの状態を維持） */}
        {/*
        <div className="mb-8">
          <Image
            src="/images/general/jnouhaku_logo.png"
            alt="農泊ロゴ"
            width={150}
            height={38}
            priority
          />
        </div>
        */}

        {/* キャッチコピー */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center drop-shadow-lg leading-tight">
          秋田・藤里。<br />おかえり、第二のふるさとへ。
        </h2>

        {/* 説明文を挿入します */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
          秋田県藤里町は、世界遺産・白神山地のふもとに広がる、豊かな自然と温かい人情が息づく場所です。当農泊サービスでは、都会の喧騒から離れ、“時間にとらわれない暮らし”を体験いただけます。
          早朝の鳥のさえずりから始まり、農家さんと共に旬の野菜を収穫し、囲炉裏端で郷土料理を味わう。白神山地のブナ林を散策し、夜には満天の星空を眺める。ここでは、五感を研ぎ澄まし、自然の恵みと人との温かい交流を通じて、心のふるさとを見つける特別なひとときが待っています。疲れた心身を癒し、新たな自分を発見する旅へ、ぜひお越しください。
        </p>
      </div>
    </section>
  );
}