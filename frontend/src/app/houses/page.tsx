// frontend/src/app/houses/page.tsx
// このファイルは、農泊施設の一覧を表示するページです。

import Image from "next/image"; // 画像表示に必要
import Link from "next/link";   // ページ内リンクに必要

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
    const res = await fetch('http://127.0.0.1:8000/api/houses/', {
      // データを常に最新の状態に保つため、キャッシュを無効にするオプション（開発時）
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
    <div className="container mx-auto px-4 py-12 md:py-16"> {/* 上下のパディングを増やしてゆとりを */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12"> {/* フォントウェイトをboldに */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> {/* xl:grid-cols-4 を追加 */}
          {houses.map((house) => (
  <Link 
    href={`/houses/${house.slug}`} 
    key={house.id} 
    className="block group transition-transform duration-300 hover:scale-105"
  >
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full" // この外側のdivのoverflow-hiddenは削除しても問題ありません
    >
      {/* 画像コンテナの修正：h-[224px] を使用し、overflow-hidden をここに追加 */}
      {/* h-[224px] で高さを224ピクセルに固定し、flex-shrink-0 で縮小を防ぎます。*/}
      {/* overflow-hidden をここに追加することで、このdivの範囲からはみ出す画像を確実に切り取ります。 */}
      <div className="relative w-full h-[224px] bg-gray-200 flex-shrink-0 overflow-hidden"> {/* ★★★ この行を修正 ★★★ */}
        {house.image ? (
          <Image
            src={house.image}
            alt={house.name}
            fill // 親要素に合わせて画像を埋める
            style={{ objectFit: 'cover' }}
            className="rounded-t-xl"
            // next.config.ts に '127.0.0.1' (DjangoのメディアURL) や 'via.placeholder.com' を追加済みか確認
          />
        ) : (
          // 画像がない場合のプレースホルダー（中心にアイコンとテキスト）
          <div className="absolute inset-0 flex flex-col items-center justify-2 justify-center w-full h-full text-gray-500 text-sm">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L20 18m-4-10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <span>画像なし</span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#2ECC71] transition-colors"> {/* ホバー色を緑に */}
                    {house.name}
                  </h2>
                  <p className="text-gray-700 text-base mb-4 flex-grow line-clamp-3"> {/* 3行で省略 */}
                    {house.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-200"> {/* 下部情報を上部にスペースとボーダー */}
                    {house.location && (
                      <p className="text-gray-600 text-sm mb-1 flex items-center">
                        <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                        {house.location}
                      </p>
                    )}
                    {house.capacity && (
                      <p className="text-gray-600 text-sm flex items-center">
                        <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17.883 14.94A8.77 8.77 0 0010 13a8.77 8.77 0 00-7.883 1.94c-.378.18-.59.574-.564.978l.22 2.646A1 1 0 002.88 19h14.24a1 1 0 00.957-1.135l.22-2.646c.026-.404-.186-.798-.564-.978z"></path></svg>
                        定員: {house.capacity}名
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}