// frontend/jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Next.jsアプリのルートディレクトリ
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  // moduleNameMapper や transform は next/jest が自動で設定するため、ここでは削除
  // msw のトランスパイルが必要な場合は、transformIgnorePatterns を残す
  // transformIgnorePatterns: ['/node_modules/(?!msw)/'], // 必要であればコメント解除
};

module.exports = createJestConfig(config);
