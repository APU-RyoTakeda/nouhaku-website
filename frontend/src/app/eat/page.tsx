// frontend/src/app/eat/page.tsx

export default function EatPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          食べる：秋田の旬を味わう
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            秋田の農泊では、その土地ならではの旬の食材を活かした、心温まる郷土料理を体験できます。採れたての野菜や、清流で育った魚、地元のブランド肉など、新鮮で安心安全な食材をふんだんに使用しています。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            農家の方々と一緒に、昔ながらの調理法を学ぶ料理体験も人気です。自分たちで収穫した野菜を使って、囲炉裏でじっくり煮込んだり、かまどでご飯を炊いたり。食を通じて、秋田の文化と人情に触れる貴重な時間をお過ごしください。
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            提供される料理の例
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>きりたんぽ鍋</li>
            <li>だまこ鍋</li>
            <li>いぶりがっこ</li>
            <li>ハタハタ料理</li>
            <li>地元の旬野菜を使った天ぷら</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            各農泊施設によって提供される料理や体験内容は異なりますので、詳細は各施設のページをご確認ください。アレルギーや食事制限がある場合は、事前に施設へご相談いただくことをお勧めします。
          </p>
        </div>
      </div>
    </div>
  );
}