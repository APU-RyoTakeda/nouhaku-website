// frontend/next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ここに Next.js の設定を追加します
  images: {
    domains: ['via.placeholder.com', '127.0.0.1'], // ★ここに '127.0.0.1' を追加★
  },
  // その他の設定が必要になったらここに追加します
};

module.exports = nextConfig; // nextConfig オブジェクトをエクスポート