// frontend/src/components/sections/TownSpotlightSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function TownSpotlightSection() {
  // 町のダミーデータ
  const featuredTowns = [
    {
      name: '仙北市',
      description: '自然豊かな田沢湖や乳頭温泉郷、そして武家屋敷の街並みが美しい角館。四季折々の魅力が訪れる人々を魅了します。',
      imageUrl: '/images/towns/senboku.png', // public/images/towns/ に画像を配置
      link: '/explore?area=semboku', // 将来的に各町専用ページへ
    },
    {
      name: '横手市',
      description: 'かまくらで有名な雪深い地域。温かい人情と、発酵文化が息づく美味しい食の宝庫です。',
      imageUrl: '/images/towns/yokote.png', // public/images/towns/ に画像を配置
      link: '/explore?area=yokote',
    },
    {
      name: '男鹿市',
      description: '日本海に突き出す男鹿半島は、ダイナミックな海岸線と、なまはげ伝説が残る神秘的な場所です。',
      imageUrl: '/images/towns/oga.png', // public/images/towns/ に画像を配置
      link: '/explore?area=oga',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          秋田の魅力的な地域を巡る
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTowns.map((town, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <Link href={town.link} className="block">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={town.imageUrl}
                    alt={town.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{town.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{town.description}</p>
                  <span className="text-green-600 hover:text-green-700 font-medium transition-colors">
                    詳細を見る &rarr;
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}