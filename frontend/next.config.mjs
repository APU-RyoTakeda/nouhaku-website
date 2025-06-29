// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 古い 'domains' は削除し、新しい 'remotePatterns' を追加します
    // domains: ['placehold.co'], // <-- この行は削除
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // すべてのパスを許可
      },
      // もし将来的に他の外部画像を読み込む場合は、ここに追加します
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
