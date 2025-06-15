// frontend/src/app/privacy/page.tsx

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          プライバシーポリシー
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            個人情報の収集について
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            本ウェブサイトでは、お問い合わせフォームを通じて、お客様の氏名、メールアドレス等の個人情報を収集する場合がございます。これらの情報は、お問い合わせへの対応、サービス改善、および統計分析にのみ利用し、目的外で利用することはありません。
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            個人情報の利用目的
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>お問い合わせ内容へのご返信のため</li>
            <li>サービスに関する情報提供のため</li>
            <li>統計データとして、個人を特定できない形でサービス改善に役立てるため</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            個人情報の第三者提供
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            クッキー（Cookie）について
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            本ウェブサイトでは、お客様の利便性向上やサイト改善のため、クッキーを使用する場合があります。クッキーにより個人を特定することはできません。ブラウザの設定でクッキーの利用を拒否することも可能です。
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            お問い合わせ窓口
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            個人情報に関するお問い合わせは、お問い合わせフォームよりご連絡ください。
          </p>

          <p className="text-gray-500 text-sm text-right mt-8">
            最終更新日: 2025年6月15日
          </p>
        </div>
      </div>
    </div>
  );
}