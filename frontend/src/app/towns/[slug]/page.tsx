// frontend/src/app/towns/[slug]/page.tsx
import Image from "next/image"; // 画像表示に必要
import Link from "next/link";   // ページ内リンクに必要

// Next.jsの動的ルーティングからslugを受け取るためのインターフェース
interface TownDetailPageProps {
  params: {
    slug: string; // URLの [slug] 部分がここに渡される
  };
}

export default function TownDetailPage({ params }: TownDetailPageProps) {
  // params.slug を使って動的にコンテンツを切り替える（今回は静的コンテンツなのでダミー）
  // 実際の開発では、このslugを使ってバックエンドAPIからデータをフェッチします。
  const townName = params.slug === 'yurihonjo' ? '由利本荘市' : '秋田の町';
  const description = params.slug === 'yurihonjo' 
    ? `秋田県南部に位置する由利本荘市は、鳥海山の雄大な自然と清らかな水に恵まれた地域です。日本海に面し、美しい海岸線と豊かな海の幸も魅力。歴史ある街並みと、地域の人々の温かさが訪れる人々を包み込みます。四季折々の美しい風景は、訪れるたびに新しい発見と感動を与えてくれるでしょう。特に「鳥海山」は、その美しい姿から「出羽富士」とも呼ばれ、登山やハイキング、冬のスキーなど、年間を通じて様々なアクティビティが楽しめます。また、清流「子吉川」が育む肥沃な大地は、美味しい米や野菜の宝庫です。`
    : `こちらは${params.slug}の紹介ページです。この町に関する情報がここに表示されます。`;

  // ギャラリー画像用のプレースホルダーURL
  // 実際の開発では、バックエンドから取得した画像のURLを使用します。
  const images = params.slug === 'yurihonjo' ? [
    "/temporary-mage1.png", // public/ フォルダに画像を置くことを想定
    "/temporary-mage2.png",
    "/temporary-mage3.png",
  ] : [
    "https://via.placeholder.com/800x600?text=町+画像+1",
    "https://via.placeholder.com/800x600?text=町+画像+2",
    "https://via.placeholder.com/800x600?text=町+画像+3",
  ];

  return (
    // コンテンツ全体を中央寄せにし、パディングと背景色を設定
    <div className="container mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg my-8 max-w-5xl">
      {/* 町の名前セクション */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 text-center mb-8 border-b-4 border-green-600 pb-4">
        {townName}
      </h1>

      {/* 導入画像 (ページのファーストビュー用) */}
      <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
        <Image 
          src={images[0]} // ギャラリーの1枚目を大きく表示
          alt={`${townName}の風景`}
          fill // 親要素に合わせて画像を埋める
          style={{ objectFit: 'cover' }} // 画像の表示方法
          className="transition-transform duration-300 hover:scale-105" // ホバー時のアニメーション
          priority // LCP（Largest Contentful Paint）対策として優先的に読み込む
        />
      </div>

      {/* 詳細説明文セクション */}
      <section className="mb-12 text-lg md:text-xl leading-relaxed text-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
          {townName}の魅力
        </h2>
        <p className="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:text-green-600 first-letter:mr-2 first-letter:float-left">
          {description}
        </p>
        <p>
          この町では、四季折々の美しい自然、豊かな食文化、そして温かい人々との触れ合いが待っています。ゼミ合宿を通じて、地域が持つ課題を肌で感じ、共に解決策を考える貴重な体験ができるでしょう。私たちは、このような深い学びと交流の場を提供することで、持続可能な地域連携モデルを構築することを目指しています。
        </p>
      </section>

      {/* 画像ギャラリーセクション */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b-2 border-green-600 pb-2 text-center">
          フォトギャラリー
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((imgSrc, index) => (
            <div key={index} className="relative w-full h-60 rounded-lg overflow-hidden shadow-md group">
              <Image 
                src={imgSrc}
                alt={`${townName}ギャラリー画像 ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-110" // ホバー時のアニメーション
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">画像 {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 関連情報や戻るボタンセクション */}
      <div className="text-center mt-12">
        <Link href="/towns" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors text-lg">
          他の町も見る
        </Link>
      </div>
    </div>
  );
}
