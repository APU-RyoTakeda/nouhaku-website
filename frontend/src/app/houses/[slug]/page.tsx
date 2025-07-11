// frontend/src/app/houses/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// ダミーの施設詳細データ
const dummyHouseDetails = {
  // --- 農家民宿 さんこの宿 ---
  'mori-no-ibuki': {
    title: '農家民宿 さんこの宿',
    location: '秋田県藤里町',
    description: '「みんなで食べるご飯は美味しい。」楽しい会話は最高のスパイス。暖かくて楽しいごはんをめしあがれ。',
    images: [
      { src: '/images/houses/sanko_1.png', alt: 'さんこの宿 外観' },
      { src: '/images/houses/sanko_2.png', alt: 'さんこの宿 室内' },
      { src: '/images/houses/sanko3.png', alt: 'さんこの宿 外観' }, 
    ],
    price: '1泊 9000円/1名(税込),暖房費別途500円/1人',
    capacity: '1～4名',
    access: '大館能代空港から車で約25分。秋田自動車道：二ツ井白神ICから22分。',
    shuttle: '送迎あり',
    bookingMethod: '事務局：NPO法人ふじさと元気塾',
    phone: '0185-74-6102',
    payment: '現金のみ（予約サイトはクレジットカード可）',
    note: '冠婚葬祭等諸事情により、農家民宿を変更させて頂く場合もありますのでご了承下さい。',
    relatedCouncil: 'ふじさと粕毛まちづくり協議会',
  },
  // --- 農家民宿 陶 ---
  'umi-no-sato': {
    title: '農家民宿 陶',
    location: '秋田県藤里町',
    description: '料理上手なお母さんの創作レシピや郷土料理をこだわりの器で提供。世界に二つとない素敵な宿。',
    images: [
      { src: '/images/houses/tou_1.png', alt: '陶 外観（日本海を望む）' },
      { src: '/images/houses/tou_2.png', alt: '陶 食卓（海の幸）' },
      { src: '/images/houses/tou_3.png', alt: '陶 室内' },
    ],
    price: '1泊 9000円/1名(税込)',
    capacity: '1～5名',
    amenities: ['Wi-Fi', 'オーシャンビュー', 'キッチン', 'バス・トイレ別', '駐車場'],
    activities: ['漁業体験', '海水浴', '夕日鑑賞', '海産物料理作り'],
  },
  // --- 農家民宿 ブナの森 ---
  'yuki-no-sato': {
    title: '農家民宿 ブナの森',
    location: '秋田県藤里町',
    description: '四季を感じられる眺めのよい部屋。お父さんとの会話は夜に飲むお酒の一番の肴。',
    images: [
      { src: '/images/houses/buna_1.png', alt: 'ブナの森 外観' },
      { src: '/images/houses/buna_2.png', alt: 'ブナの森 冬景色' },
      { src: '/images/houses/buna_3.png', alt: 'ブナの森 室内' },
    ],
    price: '1泊 9000円/1名(税込)',
    capacity: '3～8名',
    amenities: ['Wi-Fi', '暖炉', '共有リビング', '駐車場', '送迎あり'],
    activities: ['ブナ林散策', '雪遊び', 'かまくら体験', '郷土料理体験'],
  },
};

interface HouseDetailPageProps {
  params: {
    slug: string;
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

          {/* 画像ギャラリー */}
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

          {/* コンテンツ部分を全幅にするため、md:grid-cols-3は削除 */}
          {/* その代わり、直下にボタンを追加 */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8"> {/* ★ md:grid-cols-3をmd:grid-cols-1に変更 */}
            <div className="md:col-span-1"> {/* ★md:col-span-2をmd:col-span-1に変更、これによりコンテンツ部分が1カラムに */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">施設について</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {house.description}
              </p>

              {/* 料金・定員 */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">料金・定員</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>料金: {house.price}</li>
                <li>定員: {house.capacity}</li>
              </ul>

              {/* 体験アクティビティ (非表示のまま) */}
              {house.activities && Array.isArray(house.activities) && house.activities.length > 0 && (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">体験アクティビティ</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    {house.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* 新しく追加する情報セクション */}
              {house.access && (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">アクセス</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{house.access}</p>
                </>
              )}
              {house.shuttle && (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">送迎</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{house.shuttle}</p>
                </>
              )}
              {house.payment && ( /* 支払い方法のセクション */
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">支払い方法</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{house.payment}</p>
                </>
              )}
              {house.bookingMethod && ( /* お問い合わせ先のセクション */
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">お問い合わせ先</h3>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold">受付窓口:</span> {house.bookingMethod}
                  </p>
                  {house.phone && (
                    <p className="text-gray-700 leading-relaxed mb-6">
                      電話&FAX: <a href={`tel:${house.phone}`} className="text-blue-600 hover:underline">{house.phone}</a>
                    </p>
                  )}
                  {house.url && (
                    <p className="text-gray-700 leading-relaxed mb-6">
                      URL: <Link href={house.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{house.url}</Link>
                    </p>
                  )}
                </>
              )}
              {house.note && (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">注意事項</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{house.note}</p>
                </>
              )}
              {house.relatedCouncil && (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">関連協議会</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{house.relatedCouncil}</p>
                </>
              )}

              {/* ★予約ボタンをここに追加します。メインコンテンツの直下。 */}
              <div className="mt-8 pt-8 border-t border-gray-200"> {/* 上部に余白と区切り線 */}
                <Link href="/booking" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105 block text-center text-xl">
                  この施設を予約する
                </Link>
              </div>
              {/* ★予約ボタンここまで★ */}

            </div>
            
            {/* 右側のサイドバーは完全に削除したので、ここには何も残りません */}
          </div>
        </div>
      </div>
    </div>
  );
}