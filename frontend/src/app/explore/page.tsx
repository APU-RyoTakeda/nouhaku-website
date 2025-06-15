// frontend/src/app/explore/page.tsx

export default function ExplorePage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          巡る：秋田の自然と文化を体験
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            秋田には、四季折々の美しい自然と、長い歴史に育まれた文化が息づいています。農泊を拠点に、地域の魅力を深く体験する旅に出かけましょう。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            豊かな里山でのハイキング、清流での釣り、冬にはかまくらや雪遊びなど、季節ごとに異なるアクティビティが楽しめます。また、武家屋敷の街並みや伝統工芸、郷土芸能に触れることで、秋田の奥深さを知ることができます。地元の人々との交流も、忘れられない思い出となるでしょう。
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            体験・観光スポット例
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>田沢湖・乳頭温泉郷（仙北市）</li>
            <li>角館武家屋敷（仙北市）</li>
            <li>横手のかまくら（横手市）</li>
            <li>なまはげ館・男鹿真山伝承館（男鹿市）</li>
            <li>白神山地（藤里町など）</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            各地域や農泊施設周辺には、魅力的なスポットが数多くあります。おすすめの巡り方については、お泊まりの農家の方に直接尋ねてみるのも良いでしょう。地元ならではの情報がきっと見つかります。
          </p>
        </div>
      </div>
    </div>
  );
}