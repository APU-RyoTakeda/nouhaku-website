// frontend/src/components/sections/FeaturesSection.tsx
import FeatureCard from '@/components/cards/FeatureCard';

export default function FeaturesSection() {
  // 特徴のダミーデータ
  const features = [
    {
      icon: '🌿', // 仮のアイコン
      title: '豊かな自然体験',
      description: '秋田の里山や清流で、五感を癒す体験ができます。四季折々の景色が心を解放します。',
    },
    {
      icon: '🤝', // 仮のアイコン
      title: '温かい人情交流',
      description: '地元の人々との触れ合いを通じて、忘れかけていた心の温かさを感じられます。',
    },
    {
      icon: '🍚', // 仮のアイコン
      title: '旬の味覚を堪能',
      description: '採れたての新鮮な食材を使った、ここでしか味わえない郷土料理をお楽しみください。',
    },
    {
      icon: '🕰️', // 仮のアイコン
      title: '時間にとらわれない暮らし',
      description: '慌ただしい日常を忘れ、ゆったりと流れる時間の中で本当の自分と向き合えます。',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          秋田農泊で得られる４つの価値
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}