// frontend/jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    // .ts, .tsx ファイルを Babel で変換
    '^.+\\.(ts|tsx)$': 'babel-jest',
    // .js, .jsx ファイルも Babel で変換するように追加
    // jest.setup.js が .js ファイルなので、これが重要
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(.*some-es-module.*))', // 必要に応じて調整
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: [
    '<rootDir>/**/*.test.(ts|tsx|js|jsx)', // .js, .jsx のテストファイルも対象に含める
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};