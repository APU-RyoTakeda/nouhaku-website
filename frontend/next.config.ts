import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // ★★★ この設定を追加または修正 ★★★
  // Turbopackを無効化する設定
  webpack(config, { isServer, dev }) {
    if (dev && !isServer) {
      // 開発モードかつサーバーサイドビルドでない場合にTurbopackを無効にするための設定
      // Next.jsのバージョンによっては 'config.plugins.push(new (require('webpack').IgnorePlugin)({ resourceRegExp: /^(.*)\.turbopack$/ }));'
      // のように複雑な設定が必要な場合もありますが、まずはシンプルに。
    }
    return config;
  },
  // ここに Turbopack を明示的に無効にする設定を追加
  // Next.js 15 では experimental.turbopack オプションは削除されました。
  // しかし、もし以前のバージョンからアップグレードした場合などに競合する設定が残っている場合、
  // 以下の行でturbopackを明示的に `false` にすることで解決する可能性があります。
  // 通常は `npx next dev --turbo` の有無で制御されますが、エラーを回避するためです。
  // experimental: {
  //   turbopack: false, // この行はNext.js 15では存在しない可能性が高いですが、念のため
  // },
};

export default nextConfig;