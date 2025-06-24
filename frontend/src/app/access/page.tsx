// frontend/src/app/access/page.tsx
'use client'; // クライアントコンポーネントとしてマーク。必要に応じて。

import Header from '../../components/layout/Header'; // パスを確認してください

export default function AccessPage() {
  return (
    // ヘッダーの高さ分、上部にパディングを追加。Headerがfixedなのでコンテンツと重ならないように。
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* heroHeightを渡さないことで、このページでは常にヘッダーが表示される */}
      <Header /> 
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          アクセス
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            秋田県へのアクセスは、飛行機、新幹線、高速バス、自家用車など様々な方法があります。各農泊施設への詳細なアクセス方法は、それぞれの施設ページをご確認ください。
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            主要アクセス方法
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-2">飛行機でお越しの方</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>**秋田空港 (AXT)**: 各地から直行便が運行しています。</li>
              <li>空港からはリムジンバスやレンタカーで各方面へアクセス可能です。</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-2">新幹線でお越しの方</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>**秋田新幹線 (こまち)**: 東京駅から直通で秋田駅まで運行しています。</li>
              <li>秋田駅からJR線、私鉄、レンタカー、路線バスなどで各地へアクセスできます。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}