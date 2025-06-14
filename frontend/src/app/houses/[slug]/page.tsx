// frontend/src/app/houses/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// Houseデータの型定義 (APIレスポンスに合わせて調整)
interface House {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string | null;
  location: string;
  capacity: number;
  // 他にも詳細ページで表示したいフィールドがあれば追加
  details?: string; // 例：より詳細な説明
  amenities?: string[]; // 例：設備リスト
}

// サーバーサイドで特定の家のデータをフェッチする非同期関数
async function getHouseBySlug(slug: string): Promise<House | null> {
  try {
    // DjangoバックエンドのAPIエンドポイント（slugでフィルタリング）
    const res = await fetch(`http://127.0.0.1:8000/api/houses/${slug}/`, {
      cache: 'no-store', // 開発中はキャッシュを無効
    });

    if (!res.ok) {
      if (res.status === 404) {
        console.warn(`House with slug "${slug}" not found.`);
        return null; // 404の場合はnullを返す
      }
      const errorText = await res.text();
      console.error(`API fetching error for slug "${slug}": ${res.status} ${res.statusText}`, errorText);
      throw new Error(`Failed to fetch house: ${res.status} ${res.statusText}`);
    }

    const data: House = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching house with slug "${slug}":`, error);
    return null; // エラー時はnullを返す
  }
}

// 家の詳細ページコンポーネント
export default async function HouseDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // URLからslugパラメータを取得
  const house = await getHouseBySlug(slug); // 特定の家データを取得

  if (!house) {
    // 家が見つからない場合やエラーの場合の表示
    return (
      <div className="container mx-auto px-4 py-20 text-center min-h-screen"> {/* min-h-screenで最低高さを確保 */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">お探しの農泊施設は見つかりませんでした。</h1>
        <p className="text-lg text-gray-600 mb-8">URLを確認するか、一覧ページに戻ってください。</p>
        <Link href="/houses" className="px-6 py-3 bg-[#2ECC71] text-white rounded-full font-semibold hover:bg-[#28B463] transition-colors">
          農泊施設一覧に戻る
        </Link>
      </div>
    );
  }

  // 家の詳細情報を表示
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        {/* 画像セクション */}
        <div className="relative w-full md:w-1/2 h-80 md:h-auto min-h-60 bg-gray-200">
          {house.image ? (
            <Image
              src={house.image}
              alt={house.name}
              fill
              style={{ objectFit: 'cover' }}
              className="md:rounded-l-xl"
            />
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full text-gray-500 text-sm">
              <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L20 18m-4-10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <span>画像なし</span>
            </div>
          )}
        </div>

        {/* 詳細情報セクション */}
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {house.name}
            </h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {house.description}
            </p>
            {house.details && ( // より詳細な説明があれば表示
              <p className="text-gray-600 text-base mb-4 italic">
                {house.details}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base mb-6">
              {house.location && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  <span>所在地: {house.location}</span>
                </div>
              )}
              {house.capacity && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17.883 14.94A8.77 8.77 0 0010 13a8.77 8.77 0 00-7.883 1.94c-.378.18-.59.574-.564.978l.22 2.646A1 1 0 002.88 19h14.24a1 1 0 00.957-1.135l.22-2.646c.026-.404-.186-.798-.564-.978z"></path></svg>
                  <span>定員: {house.capacity}名</span>
                </div>
              )}
              {house.amenities && house.amenities.length > 0 && ( // 設備があれば表示
                <div className="flex items-center col-span-full">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11 15a4 4 0 10-4 4v1a1 1 0 11-2 0v-1a6 6 0 1110.89-4.05l.31-1.932A6.001 6.001 0 0017 10V8a1 1 0 112 0v2a8 8 0 10-14.773 3.753l.972.486A6.001 6.001 0 0011 15z" clipRule="evenodd"></path></svg>
                  <span>設備: {house.amenities.join(', ')}</span>
                </div>
              )}
            </div>
          </div>

          {/* 問い合わせボタン */}
          <Link 
            href="/contact" 
            className="mt-6 block w-full text-center bg-[#2ECC71] hover:bg-[#28B463] text-white font-bold py-3 px-6 rounded-full shadow-md transition-colors text-lg"
          >
            この農泊施設に問い合わせる
          </Link>
        </div>
      </div>
    </div>
  );
}