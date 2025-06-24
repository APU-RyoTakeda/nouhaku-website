// frontend/src/components/sections/PhraseSection.tsx
'use client'; // このコンポーネントがクライアントサイドで実行されることを示す

import React from 'react';

export default function PhraseSection() {
  return (
    <section className="bg-white py-16 sm:py-20 -mt-8 relative z-10 rounded-t-xl shadow-lg">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        {/* ★変更点: 全体をFlexboxで囲み、横並びに配置（justify-betweenで両端寄せ） */}
        {/* md:flex-rowで中サイズ以上で横並び、items-startで上揃え */}
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8 lg:space-x-12 relative z-0">

          {/* 左側の説明文（横書き） */}
          {/* md:order-1で中サイズ以上で左に配置 */}
          {/* text-centerはpタグに移して、div自体はjustify-centerを維持 */}
          <div className="flex justify-center w-full md:w-1/2 md:order-1 relative z-10">
            <p className="text-xl sm:text-2xl text-gray-700 max-w-prose
                        leading-relaxed
                        md:px-4 py-4 text-center"> {/* Pタグ自体を中央寄せ */}
              秋田県由利本荘市で、都会の喧騒を忘れ、里山の恵みと伝統文化に触れる体験を。
              <br />
              心と体が癒される、特別な時間をお過ごしください。
            </p>
          </div>

          {/* 右側のキャッチコピー（縦書き） */}
          {/* md:order-2で中サイズ以上で右に配置 */}
          {/* absoluteを削除し、Flexアイテムとして配置する */}
          <div className="flex justify-end w-full md:w-1/2 md:order-2"> {/* justify-end で右寄せ */}
            <h2 className="text-2xl sm:text-3xl text-blue-800 leading-tight
                        [writing-mode:vertical-rl] [text-orientation:upright] {/* 縦書きのスタイル */}
                        h-auto                   /* 高さを内容に合わせる */
                        max-height-[400px]       /* 縦書きの行の最大長さを設定 */
                        min-height-[200px]       /* 縦書きの行の最小長さを設定 */
                        max-width-[80px]         /* 縦書きの「行数」に相当する幅を増やす */
                        min-width-[40px]         /* 縦書きの「行数」の最小幅を設定 */
                        tracking-widest          /* 文字間隔 */
                        py-2 text-right          /* ★変更: 縦書きの文字の並びを右寄せに */
                        overflow-hidden          /* はみ出しを隠す */
                        break-words              /* 単語の途中での改行を許可 */
                        ">
              豊かな自然と、温かい人々の笑顔に出会う旅
            </h2>
          </div>

        </div> {/* .flex コンテナの閉じタグ */}
      </div>
    </section>
  );
}