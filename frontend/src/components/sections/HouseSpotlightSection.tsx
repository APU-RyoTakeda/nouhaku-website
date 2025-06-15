// frontend/src/components/sections/HouseSpotlightSection.tsx
import HouseCard from '@/components/cards/HouseCard';
import Link from 'next/link';

export default function HouseSpotlightSection() {
  // おすすめ施設のダミーデータ
  const featuredHouses = [
    {
      slug: 'aki-no-ie',
      imageUrl: '/images/houses/house-1.png', // public/images/houses/ に画像を配置
      imageAlt: '秋の家',
      title: '里山の静けさに包まれる家「秋の家」',
      location: '秋田県仙北市',
      description: '築100年の古民家を改築した、懐かしくも新しい空間。囲炉裏を囲んで語らう時間が楽しめます。',
      price: '1泊 8,000円～',
    },
    {
      slug: 'mori-no-ibuki',
      imageUrl: '/images/houses/house-2.png', // public/images/houses/ に画像を配置
      imageAlt: '森の息吹',
      title: '渓流のせせらぎを聞く「森の息吹」',
      location: '秋田県湯沢市',
      description: '森の中に佇む隠れ家のような宿。美しい渓流を眺めながら、心身をリフレッシュできます。',
      price: '1泊 9,500円～',
    },
    {
      slug: 'umi-no-sato',
      imageUrl: '/images/houses/house-3.png', // public/images/houses/ に画像を配置
      imageAlt: '海の郷',
      title: '日本海を望む絶景の宿「海の郷」',
      location: '秋田県男鹿市',
      description: '雄大な日本海の夕日を独り占めできる贅沢なロケーション。新鮮な海の幸が自慢です。',
      price: '1泊 10,000円～',
    },
    {
      slug: 'yuki-no-sato',
      imageUrl: '/images/houses/house-4.png', // public/images/houses/ に画像を配置
      imageAlt: '雪の里',
      title: '豪雪地帯の温かいもてなし「雪の里」',
      location: '秋田県横手市',
      description: '冬にはかまくら体験もできる、雪国ならではの魅力が詰まった農泊。地元料理も絶品です。',
      price: '1泊 8,500円～',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          おすすめの農泊施設
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredHouses.map((house) => (
            <HouseCard
              key={house.slug}
              slug={house.slug}
              imageUrl={house.imageUrl}
              imageAlt={house.imageAlt}
              title={house.title}
              location={house.location}
              description={house.description}
              price={house.price}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/houses" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
            すべての施設を見る
          </Link>
        </div>
      </div>
    </section>
  );
}