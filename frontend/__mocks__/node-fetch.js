// frontend/__mocks__/node-fetch.js
// JestのJSDOM環境でFetch APIをモックするためのシンプルな実装
// 実際のネットワークリクエストは行わず、MSWがインターセプトすることを期待
module.exports = jest.fn((url, options) => {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({ mockData: 'This is a mock response' }),
    text: () => Promise.resolve('Mock text'),
  });
});

// ResponseとRequestオブジェクトをエクスポート
// MSWが内部でこれらのグローバルオブジェクトを期待する場合があるため
module.exports.Response = global.Response || class Response {};
module.exports.Request = global.Request || class Request {};
