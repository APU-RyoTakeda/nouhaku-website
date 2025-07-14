// frontend/src/app/houses/page.tsx
import HouseCard from '@/components/cards/HouseCard';

// 施設一覧用のダミーデータ
const dummyHouses = [
 
  {
    slug: 'mori-no-ibuki',
    imageUrl: '/images/houses/sannko_top.jpg',
    imageAlt: '森の息吹',
    title: '農家民宿　さんこの宿',
    location: '秋田県藤里町',
    description: '「みんなで食べるご飯は美味しい。」楽しい会話は最高のスパイス。暖かくて楽しいごはんをめしあがれ。',
    price: '1泊 9000円/1名（税込）',
  },
  {
    slug: 'umi-no-sato',
    imageUrl: '/images/houses/tou_top.png',
    imageAlt: '海の郷',
    title: '農家民宿　陶',
    location: '秋田県藤里町',
    description: '料理上手なお母さんの創作レシピや郷土料理をこだわりの器で提供。世界に二つとない素敵な宿。',
    price: '1泊 9000円/1名（税込）',
  },
  {
    slug: 'yuki-no-sato',
    imageUrl: '/images/houses/buna_top.jpg',
    imageAlt: '雪の里',
    title: '農家民宿　ブナの森',
    location: '秋田藤里町',
    description: '四季を感じられる眺めのよい部屋。お父さんとの会話は夜に飲むお酒の一番の肴。',
    price: '1泊 9000円/1名（税込）',
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