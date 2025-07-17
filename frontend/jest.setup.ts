// frontend/jest.setup.ts
import '@testing-library/jest-dom';

// Fetch API (Response, Request, fetch) をグローバルに利用可能にする
// JSDOM環境でこれらが未定義の場合があるため、node-fetchでポリフィル
import fetch, { Response, Request } from 'node-fetch';

// globalオブジェクトにFetch API関連のオブジェクトが存在しない場合にのみ設定
if (typeof global.fetch === 'undefined') {
  global.fetch = fetch as any; // fetchの型定義がJestと合わない場合があるためany
}
if (typeof global.Response === 'undefined') {
  global.Response = Response;
}
if (typeof global.Request === 'undefined') {
  global.Request = Request;
}

// TextEncoder と TextDecoder をグローバルに利用可能にする
// JestのJSDOM環境でこれらが未定義の場合があるため、text-encodingでポリフィル
import { TextEncoder, TextDecoder } from 'text-encoding';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}

// Next.jsのrouterとsearchParamsフックをモックします
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
  })),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  usePathname: jest.fn(() => '/'),
}));

// window.scrollTo をモックします
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

// window.alert をモックします
const mockAlert = jest.fn();
Object.defineProperty(window, 'alert', {
  value: mockAlert,
  writable: true,
});

// AjaxZip3のグローバルオブジェクトをモックします
Object.defineProperty(window, 'AjaxZip3', {
  value: {
    zip2addr: jest.fn((...args: unknown[]) => {
      const [zip1, zip2, pref, city, street] = args as [string, string, string, string, string];

      if (zip1 === 'postalCode1' && zip2 === '4567') {
        const prefectureEl = document.getElementById(pref) as HTMLSelectElement;
        const cityEl = document.getElementById(city) as HTMLInputElement;
        const streetEl = document.getElementById(street) as HTMLTextAreaElement;

        if (prefectureEl) prefectureEl.value = '東京都';
        if (cityEl) cityEl.value = '千代田区';
        if (streetEl) streetEl.value = '丸の内';
      }
    }),
  },
  writable: true,
});
