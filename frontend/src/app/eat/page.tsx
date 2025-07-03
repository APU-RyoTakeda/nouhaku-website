// frontend/src/app/eat/page.tsx
import Image from 'next/image';

export default function EatPage() {
  return (
    <> {/* Fragmentで全体を囲み、複数の最上位要素を許可 */}
      {/* ヒーロー画像セクション */}
      <section className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
        <Image
          src="/images/general/taberu_4.jpg" // 食べるページ用のヒーロー画像パス
          alt="藤里の朝食風景" // 適切なaltテキスト
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }} // 中央に画像を配置
          priority // 最優先でロード
          sizes="100vw" // 画像のサイズに関するヒント
        />
        {/* 画像上のオーバーレイ（任意） */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* 画像上のタイトル */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center drop-shadow-lg font-sawarabi">
            藤里を食べる，飲む
          </h1>
        </div>
      </section>

      {/* 既存のコンテンツ */}
      <div className="pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* 元々h1だった部分は、ページのサブタイトルや導入として調整 */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 mt-12">
            里山の恵みを五感で味わう
          </h2>

          {/* 導入部分 */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 mb-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              世界遺産・白神山地のふもと、秋田県藤里町は、清らかな水と豊かな土壌が育む食の宝庫です.
              都会の喧騒から離れ、里山の恵みを五感で味わう. そんな特別な「食べる」体験がここにあります.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              採れたての旬野菜、清流で育つ川魚、そして地元に伝わる素朴ながらも心温まる郷土料理.
              藤里町でしか味わえない、本物の味覚を存分にお楽しみください.
            </p>
          </div>

          {/* 食事テーマ：旬の恵みを味わう郷土料理 */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              里山の恵みを食卓へ：温かい郷土料理
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <div className="md:w-1/2">
                <Image
                  src="/images/general/taberu_4.jpg"// ★ここを /images/general/taberu.jpg に修正
                  alt="秋田の郷土料理"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto"
                  priority
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700 leading-relaxed mb-4">
                  藤里町の農泊の醍醐味は、農家さんの家庭で囲炉裏を囲み、共に食卓を囲む時間です.
                  地元で採れたばかりの野菜や山菜、キノコ、清流の魚などを使い、
                  昔ながらの知恵と愛情が詰まった郷土料理が並びます.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  きりたんぽ鍋、だまこ鍋といった秋田を代表する鍋料理はもちろん、
                  いぶりがっこや季節の山菜料理など、ここでしか味わえない本物の味覚を体験できます.
                  農家さんとの温かい交流と共に、五感で感じる食の体験は、きっと忘れられない思い出となるでしょう.
                </p>
              </div>
            </div>
          </div>

          {/* 食事テーマ：藤里名物「ラムクレ丼」の紹介 (このセクションを最初のテーマとして維持) */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              藤里名物！「ラムクレ丼」を味わう
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <div className="md:w-1/2">
                <Image
                  src="/images/general/taberu_3.png"// ★ラムクレ丼の画像パスを設定してください
                  alt="藤里名物ラムクレ丼"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto"
                  priority
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700 leading-relaxed mb-4">
                  藤里町を訪れたなら、ぜひ味わってほしいのがご当地グルメ「ラムクレ丼」です.
                  豊かな自然の中で育った上質なラム肉と、地元産の新鮮なクレソンをふんだんに使用した、
                  ヘルシーながらも食べ応えのある逸品です.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  特製のタレが絡んだラム肉の旨味と、シャキシャキとしたクレソンの食感が絶妙なハーモニーを奏でます.
                  町内の飲食店で提供されており、お店ごとにアレンジが異なるのも魅力の一つ.
                  あなただけのお気に入りの「ラムクレ丼」を見つけてみませんか.
                </p>
              </div>
            </div>
          </div>

 {/* ★ここから白神山地ワインのセクションに修正 ★ */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
              世界遺産・白神山地の恵み、白神山地ワイン
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <div className="md:w-1/2">
                <Image
                  src="/images/general/sake_1.jpg" // ★白神山地ワインの画像パスを設定してください
                  alt="白神山地ワイン"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto"
                  priority
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700 leading-relaxed mb-4">
                  藤里町は、世界遺産・白神山地のふもとという恵まれた環境にあります.
                  この清らかな水と豊かな自然が育んだ特別なワインが「白神山地ワイン」です.
                  厳しい寒さの中で育ったブドウから、丹精込めて造り上げられます.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  白神山地ワインは、その土地のテロワールを表現した、芳醇で個性豊かな味わいが特徴です.
                  特に、白神山地から湧き出るミネラル豊富な水と、寒暖差の大きい気候が、
                  ブドウの品質を一層高めています.
                  農泊の夕食に、地元の食材を使った料理と共に、この特別なワインを味わうのはいかがでしょうか.
                  ここでしか味わえない、自然の恵みが詰まった一杯をお楽しみください.
                </p>
              </div>
            </div>
          </div>
          {/* ★白神山地ワインのセクションここまで ★ */}
          {/* その他の情報・補足 */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed text-center">
              各農泊施設や時期によって提供される料理や体験内容は異なります.
              アレルギーや食事制限がある場合は、ご予約時に必ず施設へご相談ください.
              藤里町の「食べる」体験を通じて、心と体が満たされる旅をお楽しみください.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}