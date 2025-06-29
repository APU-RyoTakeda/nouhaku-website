// frontend/tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // srcディレクトリも含む
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        breathingLight: { // 呼吸効果のためのキーフレーム
          '0%, 100%': { opacity: '0.6', filter: 'brightness(100%)' },
          '50%': { opacity: '1', filter: 'brightness(150%)' },
        }
      },
      animation: {
        'fade-in-scale': 'fadeInScale 0.3s ease-out forwards',
        'breathing-light': 'breathingLight 3s ease-in-out infinite', // 呼吸効果アニメーション
      },
      // ★ここから追加・修正★
      colors: { // もし以前追加したカラーがあれば残してください
        'washi-base': '#FDFBF6', // 例えば、おすすめのクリームホワイト
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'var(--font-inter)', 'sans-serif'], // デフォルトのサンセリフ体に Noto Sans JP を優先
        mincho: ['var(--font-shippori-mincho-b1)', 'serif'], // 明朝体として Shippori Mincho B1 を追加
      },
      // ★ここまで追加・修正★
    },
  },
  plugins: [],
};
export default config;
