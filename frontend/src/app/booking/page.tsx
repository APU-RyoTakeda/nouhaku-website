// frontend/src/app/booking/page.tsx
"use client"; // This directive is necessary for client-side functionality in Next.js 13+

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { useRouter, useSearchParams } from 'next/navigation';
import { BookingFormData } from '../../types/booking'; // 正しいインポートパス

// 分割したコンポーネントをインポート
import BookingDatesSection from './components/BookingDatesSection'; 
import BookingGuestsSection from './components/BookingGuestsSection';
import BookingContactInfoSection from './components/BookingContactInfoSection';
import BookingAddressSection from './components/BookingAddressSection';
import BookingRemarksSection from './components/BookingRemarksSection'; // ★追加: 備考欄セクション

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

              {/* ご利用人数セクション */}
              <BookingGuestsSection formData={formData} handleChange={handleChange as any} /> 
              
              {/* 予約者情報セクション */}
              <BookingContactInfoSection formData={formData} handleChange={handleChange as any} />

              {/* 住所セクション */}
              <BookingAddressSection 
                formData={formData} 
                handleChange={handleChange} 
                handlePostalCodeBlur={handlePostalCodeBlur} 
              />

              {/* ★変更: 備考欄セクション */}
              <BookingRemarksSection formData={formData} handleChange={handleChange as any} />

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
