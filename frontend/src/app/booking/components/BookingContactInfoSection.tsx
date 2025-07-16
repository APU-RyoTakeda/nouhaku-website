// frontend/src/app/booking/components/BookingContactInfoSection.tsx
import React from 'react';
import { BookingFormData } from '../../../types/booking'; // 親から渡されるformDataの型

// Propsの型定義
interface BookingContactInfoSectionProps {
  formData: BookingFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; // input, select要素に対応
}

export default function BookingContactInfoSection({ formData, handleChange }: BookingContactInfoSectionProps) {
  return (
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
    </div>
  );
}
