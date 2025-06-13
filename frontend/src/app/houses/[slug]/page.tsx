// frontend/src/app/houses/page.tsx
// このファイルは、農泊施設の一覧を表示するページです。

import Image from "next/image"; // 画像表示に必要
import Link from "next/link";   // ページ内リンクに必要

// Houseデータの型定義
// バックエンドのAPIレスポンスに合わせて調整してください
interface House {
  id: number;
  name: string;
  slug: string; // 詳細ページへのリンクに使用
  description: string;
  image: string | null; // 画像URL (nullの場合もある)
  location: string; // 必要であれば表示
  capacity: number; // 必要であれば表示
  // その他のフィールドがあればここに追加
}

// データをフェッチする非同期関数（サーバーコンポーネント内で実行される）
async function getHouses(): Promise<House[]> {
  try {
    // DjangoバックエンドのAPIエンドポイント
    // 環境によっては 'http://localhost:8000' の方が良いかもしれません
    const res = await fetch('http://127.0.0.1:8000/api/houses/', {
      // データを常に最新の状態に保つため、キャッシュを無効にするオプション（開発時）
      // 本番では適切なキャッシュ戦略を検討してください
      cache: 'no-store', 
    });

    if (!res.ok) {
      // APIからエラーが返された場合の処理
      const errorText = await res.text();
      console.error(`API fetching error: ${res.status} ${res.statusText}`, errorText);
      throw new Error(`Failed to fetch houses: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data; // APIレスポンスが直接House[]の配列であると想定
  } catch (error) {
    console.error("Failed to fetch houses:", error);
    // エラー時は空の配列を返すか、エラーページにリダイレクトすることも検討
    return []; 
  }
}

// 家の一覧ページコンポーネント
export default async function HousesPage() {
  const houses = await getHouses(); // サーバーサイドでデータを取得

  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10 border-b-4 border-yellow-600 pb-4">
        農泊施設を探す
      </h1>

      {houses.length === 0 ? (
        // データがない場合のメッセージ
        <div className="text-center text-xl text-gray-600 py-20">
          現在、登録されている農泊施設はありません。
          <p className="mt-4">Django管理サイトから施設を追加してください。</p>
        </div>
      ) : (
        // 家のカードをレスポンシブなグリッドで表示
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house) => (
            // 各家をカードとして表示
            <div 
              key={house.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
            >
              <div className="relative w-full h-56">
                <Image
                  src={house.image || "https://via.placeholder.com/800x600?text=No+Image"} // 画像がない場合はプレースホルダー
                  alt={house.name}
                  fill // 親要素に合わせて画像を埋める
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                  // Next.jsのImageコンポーネントのホスト設定がnext.config.jsにあるか確認
                  // images: { domains: ['via.placeholder.com', '127.0.0.1'], } など
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {house.name}
                </h2>
                <p className="text-gray-700 text-base mb-4 flex-grow line-clamp-3">
                  {/* 説明文が長い場合に省略するTailwindのクラス */}
                  {house.description}
                </p>
                {house.location && (
                  <p className="text-gray-600 text-sm mb-2">所在地: {house.location}</p>
                )}
                {house.capacity && (
                  <p className="text-gray-600 text-sm mb-4">収容人数: {house.capacity}名</p>
                )}
                
                {/* 詳細ページへのリンクボタン */}
                <Link 
                  href={`/houses/${house.slug}`} // slugを使って詳細ページへリンク
                  className="mt-auto inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition-colors text-center"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
