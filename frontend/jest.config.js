// frontend/jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Next.jsアプリのルートディレクトリ
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  // moduleNameMapper は不要な場合が多いので削除
  // transformIgnorePatterns も next/jest が適切に処理するため、基本的には不要
};

module.exports = createJestConfig(config);
