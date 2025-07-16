// frontend/src/components/sections/PhraseSection.tsx
import Image from 'next/image';

export default function PhraseSection() {
  return (
    // sectionタグの背景をbg-whiteに変更
    <section className="relative w-full h-screen flex text-gray-800 bg-white"> {/* ★bg-whiteを追加 */}

      {/* 左側のコンテンツエリア */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="max-w-2xl mx-auto">
          {/* キャッチコピー */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center drop-shadow-lg leading-tight font-sawarabi">
            「何もない」がある藤里<br />
            <span className="text-xl sm:text-2xl md:text-3xl font-normal">
              - 贅沢な空白を味わう農泊へ -
            </span>
          </h2>

          {/* 説明文 */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center drop-shadow-lg leading-relaxed">
            世界遺産・白神山地ふもとの秋田県藤里町で、農泊を体験しませんか。里山の旬の恵みを味わい、地元の方々と交流する中で、昔ながらの暮らしや文化に触れられます。日常を忘れ、心身を癒す特別なひとときが待っています。
          </p>
        </div>
      </div>

      {/* 右側の画像コンテナ */}
      <div className="w-1/2 relative flex items-center justify-center overflow-hidden">
        <Image
          src="/images/general/taki_1.jpg"
          alt="滝の画像"
          fill
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          priority
        />
      </div>
    </section>
  );
}