// frontend/src/app/access/page.tsx

export default function AccessPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
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
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-2">自家用車でお越しの方</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>東北自動車道、日本海東北自動車道をご利用ください。</li>
              <li>主要都市からの所要時間や、高速道路料金は各種地図アプリなどでご確認ください。</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mt-6">
            農泊施設の中には、公共交通機関でのアクセスが難しい場所もございます。その際は、レンタカーのご利用をおすすめします。ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
}