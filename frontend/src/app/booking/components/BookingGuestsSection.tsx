// frontend/src/app/booking/components/BookingGuestsSection.tsx
import React from 'react';
import { BookingFormData } from '../../../types/booking'; // 親から渡されるformDataの型

// Propsの型定義
interface BookingGuestsSectionProps {
  formData: BookingFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 数値入力のみなのでHTMLInputElementに限定
}

export default function BookingGuestsSection({ formData, handleChange }: BookingGuestsSectionProps) {
  return (
    <div className="border-b border-gray-200 pb-6 pt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">② ご利用人数</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="adultMale" className="block text-sm font-medium text-gray-700 mb-1">
            大人（男性）<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="adultMale"
            name="adultMale"
            value={formData.adultMale}
            onChange={handleChange}
            min="0"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="adultFemale" className="block text-sm font-medium text-gray-700 mb-1">
            大人（女性）<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="adultFemale"
            name="adultFemale"
            value={formData.adultFemale}
            onChange={handleChange}
            min="0"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="child7_12" className="block text-sm font-medium text-gray-700 mb-1">
            7～12歳
          </label>
          <input
            type="number"
            id="child7_12"
            name="child7_12"
            value={formData.child7_12}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="childUnder6" className="block text-sm font-medium text-gray-700 mb-1">
            6歳以下
          </label>
          <input
            type="number"
            id="childUnder6"
            name="childUnder6"
            value={formData.childUnder6}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}
