// frontend/src/app/booking/components/BookingAddressSection.tsx
import React from 'react';
import { BookingFormData } from '../../../types/booking'; // 親から渡されるformDataの型

// Propsの型定義
interface BookingAddressSectionProps {
  formData: BookingFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handlePostalCodeBlur: () => void;
}

export default function BookingAddressSection({ formData, handleChange, handlePostalCodeBlur }: BookingAddressSectionProps) {
  const prefectures = [
    "", "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県",
    "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県",
    "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府",
    "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県",
    "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県",
    "鹿児島県", "沖縄県"
  ];

  return (
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
            <option value="">選択してください</option>
            {prefectures.map((pref, index) => (
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
  );
}
