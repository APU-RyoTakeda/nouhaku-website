// frontend/src/app/houses/page.tsx
import HouseCard from '@/components/cards/HouseCard';

// 施設一覧用のダミーデータ
const dummyHouses = [
  {
    slug: 'aki-no-ie',
    imageUrl: '/images/houses/house-1.png',
    imageAlt: '秋の家',
    title: '里山の静けさに包まれる家「秋の家」',
    location: '秋田県仙北市',
    description: '築100年の古民家を改築した、懐かしくも新しい空間。囲炉裏を囲んで語らう時間が楽しめます。',
    price: '1泊 8,000円～',
  },
  {
    slug: 'mori-no-ibuki',
    imageUrl: '/images/houses/house-2.png',
    imageAlt: '森の息吹',
    title: '渓流のせせらぎを聞く「森の息吹」',
    location: '秋田県湯沢市',
    description: '森の中に佇む隠れ家のような宿。美しい渓流を眺めながら、心身をリフレッシュできます。',
    price: '1泊 9,500円～',
  },
  {
    slug: 'umi-no-sato',
    imageUrl: '/images/houses/house-3.png',
    imageAlt: '海の郷',
    title: '日本海を望む絶景の宿「海の郷」',
    location: '秋田県男鹿市',
    description: '雄大な日本海の夕日を独り占めできる贅沢なロケーション。新鮮な海の幸が自慢です。',
    price: '1泊 10,000円～',
  },
  {
    slug: 'yuki-no-sato',
    imageUrl: '/images/houses/house-4.png',
    imageAlt: '雪の里',
    title: '豪雪地帯の温かいもてなし「雪の里」',
    location: '秋田県横手市',
    description: '冬にはかまくら体験もできる、雪国ならではの魅力が詰まった農泊。地元料理も絶品です。',
    price: '1泊 8,500円～',
  },
  {
    slug: 'kome-no-sato',
    imageUrl: '/images/houses/house-5.png',
    imageAlt: '米の郷',
    title: '黄金の稲穂に囲まれる「米の郷」',
    location: '秋田県大潟村',
    description: '広大な田園地帯で、稲作体験も楽しめる農泊施設。収穫の喜びを共有できます。',
    price: '1泊 7,500円～',
  },

];


export default function HousesPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          農泊施設一覧
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dummyHouses.map((house) => (
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
      </div>
    </div>
  );
}