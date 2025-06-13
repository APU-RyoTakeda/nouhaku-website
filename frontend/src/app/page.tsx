// frontend/src/app/page.tsx
import Image from "next/image"; // 画像を使用する場合
import Link from "next/link";   // ページ内リンクを使用する場合

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-gray-50 text-gray-800">
      {/* ヒーローセクション */}
      <section className="relative w-full h-96 md:h-[500px] bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white overflow-hidden">
        {/* プレースホルダー画像 (publicフォルダに置くか、外部URLを使用) */}
        <Image 
          src="/hero-akita.jpg" // public/hero-akita.jpg に画像を置く想定
          alt="秋田の美しい風景"
          fill // 親要素に合わせて画像を埋める
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0 opacity-70"
          priority // LCP対策として優先的に読み込む
        />
        <div className="relative z-10 text-center p-4">
          {/* ロゴ (もしあれば) */}
          {/* <Image src="/logo.png" alt="農泊ロゴ" width={100} height={100} className="mx-auto mb-4" /> */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            秋田、暮らし体験。
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light drop-shadow-md">
            ゼミ合宿で、地域の魅力と人々と出会う。
          </p>
          <p className="mt-2 text-md md:text-lg font-light drop-shadow-md">
            首都圏の大学ゼミと秋田の農泊施設をつなぐWebサービス。
          </p>
        </div>
      </section>

      {/* サービス紹介セクション */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          農泊プロジェクトとは
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          秋田の豊かな自然環境の中で、地域の方々と交流しながら研究や学びを深める「フィールドワーク×地域交流」の新しい形を提案します。地域の人手不足解消、交流機会の創出、若者との接点強化に貢献します。
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-3">学びを深める</h3>
            <p className="text-gray-600">地域データを活用した研究活動や現地調査をサポート。リアルな学びの場を提供します。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">地域とつながる</h3>
            <p className="text-gray-600">農泊施設での滞在を通じて、温かい地域の人々との触れ合いを体験できます。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">持続可能な交流</h3>
            <p className="text-gray-600">双方向のメリットを追求し、地域活性化と関係人口創出を目指します。</p>
          </div>
        </div>
      </section>

      {/* ナビゲーションリンクボタンセクション */}
      <section className="w-full bg-gray-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            体験を始める
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link 
              href="/towns" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors text-lg md:text-xl w-full md:w-auto text-center"
            >
              町を探す
            </Link>
            <Link 
              href="/houses" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors text-lg md:text-xl w-full md:w-auto text-center"
            >
              家を探す
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-colors text-lg md:text-xl w-full md:w-auto text-center"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* 仮のフッターとの隙間調整。LayoutでFooterがラップされるので不要になる場合も */}
      {/* <div className="h-20"></div> */}
    </div>
  );
}