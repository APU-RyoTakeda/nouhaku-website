// frontend/src/components/cards/FeatureCard.tsx

interface FeatureCardProps {
  icon: string; // 将来的にアイコンコンポーネントに置き換える可能性あり
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="text-4xl text-green-600 mb-4">{icon}</div> {/* 仮のアイコン表示 */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}