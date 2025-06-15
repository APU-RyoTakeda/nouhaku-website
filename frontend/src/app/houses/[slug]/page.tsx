// frontend/src/app/houses/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// ダミーの施設詳細データ
// 実際にはAPIから取得することになりますが、今回は簡易的にここに定義します。
const dummyHouseDetails = {
  'aki-no-ie': {
    title: '里山の静けさに包まれる家「秋の家」',
    location: '秋田県仙北市',
    description: '築100年の古民家を改築した、懐かしくも新しい空間です。囲炉裏を囲んで語らう時間が楽しめ、里山の四季を五感で感じられます。縁側からは美しい庭園を眺められ、夜には満点の星空が広がります。地元の新鮮な食材を使った郷土料理体験も人気です。',
    images: [
      { src: '/images/house-details/aki-no-ie-1.png', alt: '秋の家 外観' },
      { src: '/images/house-details/aki-no-ie-2.png', alt: '秋の家 囲炉裏' },
      { src: '/images/house-details/aki-no-ie-3.png', alt: '秋の家 庭園' },
    ],
    price: '1泊 8,000円～',
    capacity: '2～6名',
    amenities: ['Wi-Fi', 'エアコン', 'キッチン', 'バス・トイレ別', '駐車場'],
    activities: ['農業体験', '郷土料理作り', '星空観察', '散策'],
  },
  'mori-no-ibuki': {
    title: '渓流のせせらぎを聞く「森の息吹」',
    location: '秋田県湯沢市',
    description: '深い森の中に佇む隠れ家のような宿。窓からは美しい渓流と緑豊かな自然が広がり、日常の喧騒を忘れて心身をリフレッシュできます。周辺にはハイキングコースも整備されており、森林浴に最適です。',
    images: [
      { src: '/images/house-details/mori-no-ibuki-1.png', alt: '森の息吹 外観' },
      { src: '/images/house-details/mori-no-ibuki-2.png', alt: '森の息吹 リビング' },
    ],
    price: '1泊 9,500円～',
    capacity: '2～4名',
    amenities: ['Wi-Fi', '暖炉', 'バス・トイレ一体', '駐車場'],
    activities: ['森林浴', '渓流釣り', 'バードウォッチング'],
  },
  // 他の施設の詳細データもここに追加できます
};

interface HouseDetailPageProps {
  params: {
    slug: string; // URLから取得するスラッグ
  };
}

export default async function HouseDetailPage({ params }: HouseDetailPageProps) {
  const { slug } = await Promise.resolve(params);
  const house = dummyHouseDetails[slug as keyof typeof dummyHouseDetails];

  if (!house) {
    // 該当する施設が見つからない場合の表示
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">施設が見つかりません</h1>
        <p className="text-gray-600 mb-8">お探しの農泊施設は存在しないか、削除された可能性があります。</p>
        <Link href="/houses" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          施設一覧へ戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen"> {/* Header分の余白と背景色 */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10">
          {/* パンくずリスト（簡易版） */}
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">ホーム</Link> &gt; 
            <Link href="/houses" className="hover:underline">施設一覧</Link> &gt; 
            <span>{house.title}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {house.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{house.location}</p>

          {/* 画像ギャラリー（簡易版） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {house.images.map((img, index) => (
              <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">施設について</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {house.description}
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">料金・定員</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>料金: {house.price}</li>
                <li>定員: {house.capacity}</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3">設備</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                {house.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3">体験アクティビティ</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                {house.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
            
            {/* サイドバーや予約ボタンなど、今後の拡張スペース */}
            <div className="md:col-span-1 bg-green-50 p-6 rounded-lg shadow-inner">
              <h3 className="text-2xl font-bold text-green-800 mb-4">ご予約・お問い合わせ</h3>
              <p className="text-gray-700 mb-4">
                この施設にご興味をお持ちでしたら、お気軽にお問い合わせください。
              </p>
              <Link href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 block text-center mb-4">
                お問い合わせ
              </Link>
              <Link href="/booking" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 block text-center">
                この施設を予約する
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}