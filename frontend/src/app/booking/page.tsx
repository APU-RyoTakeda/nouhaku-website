// frontend/src/app/booking/page.tsx
"use client"; // This directive is necessary for client-side functionality in Next.js 13+

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { useRouter, useSearchParams } from 'next/navigation';
import { BookingFormData } from '../../types/booking'; // 正しいインポートパス

// 分割したコンポーネントをインポート
import BookingDatesSection from './components/BookingDatesSection'; 
import BookingGuestsSection from './components/BookingGuestsSection'; // ★追加: ご利用人数セクション

export default function BookingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // useStateの初期値にBookingFormDataの型を適用
  const [formData, setFormData] = useState<BookingFormData>({
    checkInDate: '',
    checkOutDate: '',
    checkInTime: '', 
    lodging: '',
    adultMale: 0,
    adultFemale: 0,
    child7_12: 0,
    childUnder6: 0,
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    gender: '',
    phoneNumber: '',
    email: '',
    postalCode1: '',
    postalCode2: '',
    prefecture: '',
    city: '',
    street: '',
    remarks: '',
  });

  // コンポーネントがマウントされたとき、またはクエリパラメータが変更されたときに実行
  useEffect(() => {
    const initialData: Record<string, any> = {}; 
    let hasQueryParams = false;

    searchParams.forEach((value: string, key: string) => {
      hasQueryParams = true;
      if (['adultMale', 'adultFemale', 'child7_12', 'childUnder6'].includes(key)) {
        initialData[key] = parseInt(value, 10) || 0;
      } else {
        initialData[key] = value;
      }
    });

    if (hasQueryParams) {
      setFormData(prevData => ({
        ...prevData,
        ...(initialData as Partial<BookingFormData>),
      }));
    }
  }, [searchParams]);

  // ページがロードされたときに一番上までスクロールする
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
  
    setFormData(prevData => {
      if (type === 'number') {
        return {
          ...prevData,
          [name]: parseInt(value, 10) || 0,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  // 郵便番号入力欄からフォーカスが外れたときに住所検索を行う
  const handlePostalCodeBlur = () => {
    if (formData.postalCode1.length === 3 && formData.postalCode2.length === 4) {
      setTimeout(() => {
        (window as any).AjaxZip3.zip2addr('postalCode1', 'postalCode2', 'prefecture', 'city', 'street');

        setTimeout(() => {
          const newPrefecture = (document.getElementById('prefecture') as HTMLSelectElement)?.value || '';
          const newCity = (document.getElementById('city') as HTMLInputElement)?.value || '';
          const ajaxZip3Street = (document.getElementById('street') as HTMLTextAreaElement)?.value || '';

          setFormData(currentFormData => {
            let finalStreet = currentFormData.street;

            if (ajaxZip3Street) {
              if (!currentFormData.street.startsWith(ajaxZip3Street)) {
                finalStreet = ajaxZip3Street + finalStreet;
              }
              if (!currentFormData.street) {
                finalStreet = ajaxZip3Street;
              }
            }
            return {
              ...currentFormData,
              prefecture: newPrefecture,
              city: newCity,
              street: finalStreet,
            };
          });
        }, 50);
      }, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // バリデーション
    if (!formData.checkInDate) {
      alert('チェックイン日を選択してください。');
      return;
    }
    if (!formData.checkOutDate) {
      alert('チェックアウト日を選択してください。');
      return;
    }
    if (!formData.checkInTime) {
      alert('チェックイン時間を選択してください。');
      return;
    }
    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    if (checkOut <= checkIn) {
      alert('チェックアウト日はチェックイン日より後の日付を選択してください。');
      return;
    }
    if (!formData.lodging) {
      alert('宿を選択してください。');
      return;
    }
    if (formData.adultMale + formData.adultFemale + formData.child7_12 + formData.childUnder6 === 0) {
      alert('ご利用人数を少なくとも1名入力してください。');
      return;
    }
    if (!formData.lastName || !formData.firstName || !formData.lastNameKana || !formData.firstNameKana || !formData.gender || !formData.phoneNumber || !formData.email || !formData.postalCode1 || !formData.postalCode2 || !formData.prefecture || !formData.city || !formData.street) {
      alert('予約者情報の必須項目をすべて入力してください。');
      return;
    }
    if (!formData.postalCode1 || !formData.postalCode2 || !formData.prefecture || !formData.city) {
        alert('住所（郵便番号、都道府県、市区町村）は必須です。');
        return;
    }

    const stringifiedFormData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, String(value)])
    );

    const queryString = new URLSearchParams(stringifiedFormData as Record<string, string>).toString();
    router.push(`/booking/confirm?${queryString}`);
  };

  // カスタムアラート表示用の状態 (今回は使用されていませんが、残しておきます)
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  // カスタムアラートを表示する関数 (今回は使用されていませんが、残しておきます)
  const showCustomAlert = (message: string) => {
    setAlertMessage(message);
  };

  // カスタムアラートを閉じる関数 (今回は使用されていませんが、残しておきます)
  const closeCustomAlert = () => {
    setAlertMessage(null);
  };

  return (
    <>
      <Script 
        src="https://ajaxzip3.github.io/ajaxzip3.js" 
        strategy="lazyOnload"
      />
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            農泊 予約フォーム
          </h1>
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 日程セクション */}
              <BookingDatesSection formData={formData} handleChange={handleChange} />

              {/* ★変更: ご利用人数セクション */}
              <BookingGuestsSection formData={formData} handleChange={handleChange as any} /> 
              {/* handleChangeの型がHTMLInputElement | HTMLSelectElement | HTMLTextAreaElement なので、
                 BookingGuestsSectionに渡す際はHTMLInputElementに絞るためにanyで一時的に型アサーションしています。
                 後でhandleChangeの型をより汎用的にするか、各セクションで専用のハンドラーを渡すことを検討します。*/}

              {/* --- 予約者情報 --- */}
              {/* このセクションはまだ分割していません */}
              <div className="border-b border-gray-200 pb-6 pt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">③ 予約者情報</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      申込者名 (姓)<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      申込者名 (名)<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastNameKana" className="block text-sm font-medium text-gray-700 mb-1">
                      フリガナ (セイ)<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastNameKana"
                      name="lastNameKana"
                      value={formData.lastNameKana}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="firstNameKana" className="block text-sm font-medium text-gray-700 mb-1">
                      フリガナ (メイ)<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstNameKana"
                      name="firstNameKana"
                      value={formData.firstNameKana}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    性別<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="男性"
                        checked={formData.gender === '男性'}
                        onChange={handleChange}
                        required
                        className="form-radio h-4 w-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-gray-700">男性</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="女性"
                        checked={formData.gender === '女性'}
                        onChange={handleChange}
                        required
                        className="form-radio h-4 w-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-gray-700">女性</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="その他/回答しない"
                        checked={formData.gender === 'その他/回答しない'}
                        onChange={handleChange}
                        required
                        className="form-radio h-4 w-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-gray-700">その他/回答しない</span>
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    電話番号<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="090-1234-5678"
                  />
                  <p className="mt-1 text-xs text-gray-500">※当日ご連絡のつく電話番号でお願いします。</p>
                </div>

                <div className="mt-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    メールアドレス<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="your.email@example.com"
                  />
                  <p className="mt-1 text-xs text-gray-500">※確認のため，ご連絡可能なメールアドレスをご入力ください。</p>
                  <p className="mt-1 text-xs text-gray-500">※携帯電話などでパソコンからのメールを受信拒否する設定をされている場合はドメイン「」からのメール受信を許可してください。</p>
                </div>

                {/* --- 住所 --- */}
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">住所<span className="text-red-500">*</span></h3>
                  <div className="space-y-4">
                    {/* 郵便番号 */}
                    <div>
                      <label htmlFor="postalCode1" className="block text-sm font-medium text-gray-700 mb-1">
                        郵便番号
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          id="postalCode1"
                          name="postalCode1"
                          value={formData.postalCode1}
                          onChange={handleChange}
                          onKeyUp={() => (window as any).AjaxZip3.zip2addr('postalCode1', 'postalCode2', 'prefecture', 'city', 'street')}
                          maxLength={3}
                          className="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          placeholder="例: 123"
                          required
                        />
                        <span>-</span>
                        <input
                          type="text"
                          id="postalCode2"
                          name="postalCode2"
                          value={formData.postalCode2}
                          onChange={handleChange}
                          onBlur={handlePostalCodeBlur}
                          maxLength={4}
                          className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                          placeholder="例: 4567"
                          required
                        />
                      </div>
                    </div>

                    {/* 都道府県 */}
                    <div>
                      <label htmlFor="prefecture" className="block text-sm font-medium text-gray-700 mb-1">
                        都道府県
                      </label>
                      <select
                        id="prefecture"
                        name="prefecture"
                        value={formData.prefecture}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      >
                        {/* prefectures はまだ元の場所に残っています */}
                        {/* ここにprefectures.mapのロジックが残っていますが、後で移動します */}
                        <option value="">選択してください</option>
                        {/* 仮の都道府県リスト（後でBookingAddressSectionに移動） */}
                        {["", "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県",
                          "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県",
                          "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府",
                          "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県",
                          "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県",
                          "鹿児島県", "沖縄県"
                        ].map((pref, index) => (
                          <option key={index} value={pref}>{pref}</option>
                        ))}
                      </select>
                    </div>

                    {/* 市区町村 */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        市区町村
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        placeholder="市町村"
                      />
                    </div>

                    {/* 番地・建物名 */}
                    <div>
                      <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                        番地・建物名
                      </label>
                      <textarea
                        id="street"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        rows={3}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        placeholder="例: 〇〇1-2-3 〇〇マンション101号室"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- 備考欄 --- */}
              {/* このセクションはまだ分割していません */}
              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">④ 備考欄</h2>
                <div>
                  <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 mb-1">
                    ご質問やご要望があればご記入ください
                  </label>
                  <textarea
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    rows={5}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="例：食事のアレルギーについて、特別なリクエストなど"
                  ></textarea>
                </div>
              </div>

              {/* --- Submit Button --- */}
              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  予約内容を確認する
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
