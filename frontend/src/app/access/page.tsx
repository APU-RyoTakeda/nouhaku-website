'use client'; // クライアントコンポーネントとしてマーク。

import React from 'react'; // Reactをインポート
// import Header from '../../components/layout/Header'; // コンパイルエラーのため、Headerコンポーネントのインポートを一時的に無効化しました。

export default function AccessPage() {
  const fujisatoGenkiJukuLocation = {
    address: '〒018-3201 秋田県山本郡藤里町藤琴大町１９', // NPO法人ふじさと元気塾の住所
    placeId: 'ChIJh8_r77CjLmAR2z-e-7lYyW4' // NPO法人ふじさと元気塾のPlace ID (経路検索リンク用)
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* ヘッダーコンポーネントをレンダリング（一時的にコメントアウト） */}
      {/* <Header /> */}
      <div className="container mx-auto px-4 max-w-3xl">
        {/* ページのタイトル */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          NPO法人ふじさと元気塾へのアクセス
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          {/* アクセスの概要説明 */}
          <p className="text-gray-700 leading-relaxed mb-4">
            豊かな自然に囲まれたNPO法人ふじさと元気塾へは、様々な方法でお越しいただけます。こちらでは、公共交通機関や自家用車をご利用の場合のアクセス例をご紹介します。
          </p>

          {/* Google マップ埋め込みセクションのタイトル */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            所在地マップ
          </h2>
          {/* マップを囲むdiv要素（高さと角丸、影を設定） */}
          <div className="mb-8 overflow-hidden rounded-lg shadow-md" style={{ height: '400px' }}>
            {/* Googleマップのiframeを埋め込み */}
            {/* widthとheightは親のdivに合わせるため100%に設定 */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1474.6765383448603!2d140.25616289475056!3d40.270827783833276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9a972a92083033%3A0x9f2bdd47d2e1479c!2z6L6y5a625rCR5a6_IOmZtg!5e0!3m2!1sja!2sjp!4v1751267971189!5m2!1sja!2sjp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} /* border:0; をJSX形式の style={{ border: 0 }} に変換 */
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="NPO法人ふじさと元気塾 地図" // アクセシビリティのためにタイトルを追加
            ></iframe>
          </div>
          {/* Google マップで経路を検索するリンク */}
          <p className="text-gray-700 leading-relaxed mb-6 text-sm text-center">
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fujisatoGenkiJukuLocation.address)}&destination_place_id=${fujisatoGenkiJukuLocation.placeId}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Google マップで経路を検索する
            </a>
          </p>

          {/* 主要アクセス方法のセクション */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            主要アクセス方法とふじさと元気塾へのアクセス
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-2">公共交通機関でお越しの方</h3>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>**最寄駅：JR二ツ井駅**</li>
              <ul className="list-circle list-inside ml-4">
                <li>JR二ツ井駅からふじさと元気塾まで車で約15分・バスで約30分</li>
              </ul>
              <li>**最寄りのバス停：藤琴大町**</li>
              <ul className="list-circle list-inside ml-4">
                <li>藤琴大町からふじさと元気塾まで徒歩1分未満</li>
              </ul>
              <li>**最寄り空港：大館能代空港**</li>
              <ul className="list-circle list-inside ml-4">
                <li>大館能代空港からふじさと元気塾まで車で約25分・公共交通機関で約3時間20分</li>
              </ul>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <span className="font-semibold">二ツ井駅からのタクシーについて:</span><br />
              タクシー予約・料金等の詳細については、**第一観光バス株式会社 (TEL: <a href="tel:0185-73-2211" className="text-blue-600 hover:underline">0185-73-2211</a>)** へお問い合わせください。
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-2">自家用車でお越しの方</h3>
            <ul className="list-disc list-inside text-gray-700 mb-2">
              <li>上記Googleマップをご参照いただくか、カーナビに「NPO法人ふじさと元気塾」または住所「{fujisatoGenkiJukuLocation.address}」をご入力ください。</li>
              <li>無料駐車場をご用意しております。</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              藤里町までのアクセスについては、<a href="https://www.town.fujisato.akita.jp/access/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">町のHP</a>からもご確認いただけます。
            </p>
          </div>

          {/* 注意事項セクション */}
          <div className="text-gray-700 leading-relaxed mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold mb-2">
              【ご注意】
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>各交通機関の運行状況や時刻表は、事前にご確認ください。</li>
              <li>冬季（11月下旬～4月上旬頃）は積雪が多くなります。冬用タイヤの装着や、時間に余裕を持った移動をお願いいたします。</li>
            </ul>
          </div>

          {/* お問い合わせセクション */}
          <div className="text-gray-700 leading-relaxed mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="font-semibold mb-2">
              【お問い合わせ】
            </p>
            <p className="text-sm">
              NPO法人ふじさと元気塾や農家民宿/宿泊施設までのアクセスについて、ご質問等ございましたら、<a href="/contact" className="text-blue-600 hover:underline">お問い合わせページ</a>で受け付けております。
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
