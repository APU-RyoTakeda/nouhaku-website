// frontend/src/app/booking/components/BookingRemarksSection.tsx
import React from 'react';
import { BookingFormData } from '../../../types/booking'; // 親から渡されるformDataの型

// Propsの型定義
interface BookingRemarksSectionProps {
  formData: BookingFormData;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // textarea要素に対応
}

export default function BookingRemarksSection({ formData, handleChange }: BookingRemarksSectionProps) {
  return (
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
  );
}
