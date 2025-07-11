// frontend/src/app/explore/page.tsx
'use client'; // This directive indicates that this is a client component.

import React from 'react';

export default function ExplorePage() {
  return (
    // Main container: Top and bottom generous padding, subtle light background, minimum screen height.
    // The background is kept very light and neutral to allow photos and content to pop.
    <div className="pt-32 pb-24 bg-neutral-50 min-h-screen font-sans">
      {/* Content wrapper: Wider max-width for more expansive photo display, centered, horizontal padding. */}
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Page title: Larger text, extra bold, centered, dark gray, ample bottom margin.
            More expressive Japanese text to match the luxurious feel. */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-stone-800 mb-16 leading-tight tracking-wide">
          巡る：藤里町 ― 悠久の自然が織りなす絶景と至福
        </h1>

        {/* Main content card: Off-white background, significantly rounded corners, deep shadow for a floating effect, very generous internal padding.
            This single, opulent card acts as the primary canvas for all content. */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">
          {/* Introduction paragraphs: Darker text, relaxed line height, generous bottom margin, slightly larger font size for impact. */}
          <p className="text-stone-700 leading-relaxed text-xl mb-8">
            世界遺産・白神山地の懐深く、静かに息づく藤里町。ここでは、手つかずの雄大な自然が、
            古き佳き日本の文化と調和し、訪れる人々に非日常の安らぎと感動をもたらします。
            藤里元気塾の農泊を拠点に、日本の原風景の中で、心洗われるような贅沢な時間をお過ごしください。
          </p>
          <p className="text-stone-700 leading-relaxed text-xl mb-12">
            清らかな水が育む豊かな恵み、深緑に包まれた森の囁き、そして地元の人々の温かな温もり。
            藤里町でしか体験できない「本物の豊かさ」が、あなたの五感を満たし、記憶に深く刻まれることでしょう。
          </p>

          {/* Section title: Larger text, bold, dark gray, ample top/bottom margin, subtle, elegant border. */}
          <h2 className="text-4xl font-bold text-stone-800 mt-20 mb-10 border-b-2 border-emerald-700 pb-4">
            藤里町を彩る、息をのむ絶景と至高の体験
          </h2>

          {/* Grid container for individual experience cards. Wider gaps for more white space. */}
          <div className="grid grid-cols-1 gap-14"> {/* Changed to single column for more flexible layout */}

            {/* Experience Card 1: World Heritage Shirakami Sanchi - Dominant, full-width image */}
            <div className="bg-neutral-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-3xl font-semibold text-emerald-800 mb-6 flex items-center">
                <i className="fas fa-mountain mr-4 text-emerald-600 text-3xl"></i>世界遺産 白神山地 ― 森の神髄
              </h3>
              {/* Image is now significantly taller to be the main focus of this section. */}
              <img
                src="/images/explore/shirakami-sanchi.jpg" // ここを修正しました
                alt="白神山地の壮大なブナ原生林"
                className="w-full h-96 object-cover rounded-2xl mb-8 shadow-lg"
                onError={(e) => { e.currentTarget.src = "/images/explore/sirakami-sanchi.jpg"; }} // フォールバック画像パスを修正
              />
              <p className="text-stone-700 leading-relaxed text-lg">
                手つかずのブナ原生林が織りなす白神山地は、地球の脈動を感じる神秘の森です。
                特に「岳岱自然観察教育林」や「暗門の滝」を訪れ、深淵なる森の静寂と雄大さに触れる森林セラピーは、
                日々の喧騒を忘れさせ、心身を深く癒やしてくれるでしょう。その荘厳な景観は、まさに「神髄」と呼ぶにふさわしいものです。
              </p>
            </div>

            {/* Experience Card 2: Clear Streams and Waterfalls - Akaishi Keikoku - Also full-width, but slightly different aspect for variation */}
            <div className="bg-neutral-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-3xl font-semibold text-cyan-800 mb-6 flex items-center">
                <i className="fas fa-water mr-4 text-cyan-600 text-3xl"></i>静謐なる清流 赤石渓谷 ― 水の芸術
              </h3>
              <img
                src="/images/explore/akaishi-keikoku.jpg" // ここを修正しました
                alt="赤石渓谷の清らかな流れと岩"
                className="w-full h-80 object-cover rounded-2xl mb-8 shadow-lg"
                onError={(e) => { e.currentTarget.src = "/images/explore/image-not-found.jpg"; }} // フォールバック画像も変更
              />
              <p className="text-stone-700 leading-relaxed text-lg">
                藤里町を貫く赤石川が刻む渓谷美は、息をのむほど清らかで、まるで自然が作り出した芸術品のようです。
                透明度の高い水辺での渓流釣りや、夏には心地よい川遊びが楽しめます。
                新緑の輝き、紅葉の錦、雪景色と、四季折々に異なる表情を見せるこの地は、訪れるたびに新たな感動を与えてくれます。
              </p>
            </div>

            {/* Sub-section for Food/Products/Dining - arranged in a two-column grid within this larger layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8"> {/* Nested grid for more layout control */}

              {/* Experience Card 3: Unique Fujisato Food Experiences */}
              <div className="bg-neutral-50 rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-yellow-800 mb-5 flex items-center">
                  <i className="fas fa-utensils mr-3 text-yellow-600 text-2xl"></i>藤里の滋味豊かな食体験
                </h3>
                <img
                  src="/images/explore/lamb-kure-don.jpg" // ここを修正しました
                  alt="藤里町の特産品を使った郷土料理"
                  className="w-full h-72 object-cover rounded-xl mb-6 shadow-md"
                  onError={(e) => { e.currentTarget.src = "/images/explore/image-not-found.jpg"; }} // フォールバック画像も変更
                />
                <p className="text-stone-700 leading-relaxed">
                  農泊の醍醐味は、地元で採れる旬の恵みを味わい尽くすことにあります。
                  山菜、きのこ、清流の魚など、白神の森が育む豊かな食材を用いた郷土料理は、
                  心と体に深く染み渡る滋味深さ。農家の方々との温かい食卓は、忘れがたい思い出となるでしょう。
                </p>
              </div>

              {/* Experience Card 4: Local Interactions and Warmth */}
              <div className="bg-neutral-50 rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-purple-800 mb-5 flex items-center">
                  <i className="fas fa-handshake-angle mr-3 text-purple-600 text-2xl"></i>温故知新、心通う交流
                </h3>
                <img
                  src="/images/explore/akita-inu.webp" // ここを修正しました
                  alt="地域の人々との温かい交流の様子"
                  className="w-full h-72 object-cover rounded-xl mb-6 shadow-md"
                  onError={(e) => { e.currentTarget.src = "/images/explore/image-not-found.jpg"; }} // フォールバック画像も変更
                />
                <p className="text-stone-700 leading-relaxed">
                  藤里元気塾の農泊では、単に宿泊するだけでは終わらない、地域の温かい人々と深く交流できます。
                  昔ながらの知恵や文化に触れ、飾らないおもてなしを受けることで、
                  藤里町の真の魅力と、そこに息づく暮らしの奥深さを肌で感じられるはずです。
                </p>
              </div>

              {/* New Card 1: Shirakami Wine and Farm Cheese */}
              <div className="bg-neutral-50 rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-rose-800 mb-5 flex items-center">
                  <i className="fas fa-wine-bottle mr-3 text-rose-600 text-2xl"></i>白神ワインと牧場のチーズ
                </h3>
                <img
                  src="/images/explore/shirakami-wine.jpg" // ここを修正しました
                  alt="白神ワインと地元牧場のチーズ"
                  className="w-full h-72 object-cover rounded-xl mb-6 shadow-md"
                  onError={(e) => { e.currentTarget.src = "/images/explore/image-not-found.jpg"; }} // フォールバック画像も変更
                />
                <p className="text-stone-700 leading-relaxed">
                  白神山地の豊かな水と土壌が育んだぶどうから生まれる「白神ワイン」は、
                  この地ならではの奥深い味わい。また、藤里の清らかな空気の中で育つ牛から作られる、
                  濃厚でフレッシュな牧場のチーズも、まさに逸品です。至福のペアリングをご堪能ください。
                </p>
              </div>

              {/* New Card 2: Blessings of Shirakami Sanchi (Cosmetics, Mushrooms) */}
              <div className="bg-neutral-50 rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-lime-800 mb-5 flex items-center">
                  <i className="fas fa-seedling mr-3 text-lime-600 text-2xl"></i>白神の恵み：化粧水と茸
                </h3>
                <img
                  src="/images/explore/shirakami-blessings.jpg" // ここを修正しました
                  alt="白神山地の恵み（化粧水、きのこ）"
                  className="w-full h-72 object-cover rounded-xl mb-6 shadow-md"
                  onError={(e) => { e.currentTarget.src = "/images/explore/image-not-found.jpg"; }} // フォールバック画像も変更
                />
                <p className="text-stone-700 leading-relaxed">
                  世界遺産の森から生まれた、白神酵母を使用した化粧水は、お肌に優しく自然の恵みを届けます。
                  また、豊かな腐葉土で育つ天然の舞茸やぶなしめじといった多様なキノコは、
                  その芳醇な香りと食感で食卓を豊かに彩ります。旅の記憶を彩る上質なお土産にも最適です。
                </p>
              </div>

            </div> {/* End of nested grid */}

            {/* New Card 3: Local Dining Establishments - Full width to emphasize */}
            <div className="bg-neutral-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 mt-8">
              <h3 className="text-3xl font-semibold text-orange-800 mb-6 flex items-center">
                <i className="fas fa-map-marker-alt mr-4 text-orange-600 text-3xl"></i>地元で愉しむ珠玉の食処
              </h3>
              <img
                src="/images/explore/kiritanpo-nabe.jpg" // ここを修正しました
                alt="藤里町の地元食材を活かした食事処の様子"
                className="w-full h-80 object-cover rounded-2xl mb-8 shadow-lg"
                onError={(e) => { e.currentTarget.src = "/images/explore/image-not-found.jpg"; }} // フォールバック画像も変更
              />
              <p className="text-stone-700 leading-relaxed text-lg">
                農泊での家庭料理に加え、藤里町には地元の豊かな食材を最大限に活かした、温かいお料理を提供する食処が点在します。
                昼間の散策の合間にふと立ち寄って、地元の人が愛する藤里ならではの味覚を体験するのも一興です。
                心づくしの一皿が、あなたの旅の思い出をより深く彩ることでしょう。
              </p>
            </div>

          </div> {/* End of main grid */}

          {/* Conclusion and tips paragraph: Darker text, relaxed line height, generous top margin. */}
          <p className="text-stone-700 leading-relaxed text-xl mt-20">
            藤里町には、ここでしか巡り合えない、秘められた魅力が数多く息づいています。
            悠久の自然、豊かな恵み、そして心温まる人々との出会いが、
            あなたの旅を唯一無二の特別なものにしてくれるでしょう。
            どうぞ、お泊まりの農家の方に直接お尋ねください。地元ならではのおすすめ情報や、
            季節ごとの隠れた名所について、きっと親身になって教えてくれるはずです。
            藤里町での素晴らしい思い出が、いつまでも心に残りますように。
          </p>
        </div> {/* End of main content card */}
      </div> {/* End of container */}
      {/* FontAwesome CDN for icons. */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </div>
  );
}