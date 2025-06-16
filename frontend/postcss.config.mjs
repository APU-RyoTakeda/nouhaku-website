// postcss.config.mjs (または .js / .cjs)

// 修正前 (もし以下のようになっている場合):
// module.exports = {
//   plugins: {
//     '@tailwindcss: {}, // この行が問題
//     'autoprefixer': {},
//   },
// };

// 修正後:
const config = {
  plugins: {
    tailwindcss: {}, // ★ここを 'tailwindcss' 本体に修正
    autoprefixer: {},
  },
};
export default config; // .mjs の場合
// または module.exports = config; // .js または .cjs の場合