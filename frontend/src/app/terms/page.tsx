// frontend/src/app/terms/page.tsx

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          利用規約
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            第1条（本サービスの利用）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            本ウェブサイトが提供するサービス（以下、「本サービス」といいます）は、この利用規約に従って提供されます。お客様は、本サービスを利用することにより、本規約の全ての記載内容に同意したものとみなされます。
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            第2条（掲載情報の正確性）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            本サービスに掲載される情報（農泊施設情報、地域の観光情報など）は、常に正確性を保証するものではありません。情報の利用は、お客様ご自身の判断と責任において行ってください。本ウェブサイトは、掲載情報の利用によって生じた損害について、一切の責任を負いません。
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            第3条（著作権）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            本ウェブサイトに掲載されている全てのコンテンツ（文章、画像、デザインなど）に関する著作権は、本ウェブサイト運営者または正当な権利を有する第三者に帰属します。無断での複製、転載、改変、配布などを禁じます。
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            第4条（禁止事項）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本サービスの利用にあたり、以下の行為を禁止します。
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 ml-4"> {/* ulのmargin-leftは親のpから独立して与える */}
            <li>法令または公序良俗に違反する行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>他のお客様または第三者に不利益、損害を与える行為</li>
            <li>虚偽の情報を登録する行為</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            第5条（規約の変更）
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            本ウェブサイトは、お客様に事前の通知をすることなく、本規約の全部または一部を変更できるものとします。変更後の規約は、本ウェブサイト上に掲載された時点から効力を生じるものとします。
          </p>

          <p className="text-gray-500 text-sm text-right mt-8">
            最終更新日: 2025年6月15日
          </p>
        </div>
      </div>
    </div>
  );
}