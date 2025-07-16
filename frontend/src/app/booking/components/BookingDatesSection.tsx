// frontend/src/app/booking/components/BookingDatesSection.tsx
import React from 'react';
import { BookingFormData } from '../../../types/booking'; // 親から渡されるformDataの型

// Propsの型定義
interface BookingDatesSectionProps {
  formData: BookingFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function BookingDatesSection({ formData, handleChange }: BookingDatesSectionProps) {
  // 今日の日付を取得し、ISO形式（YYYY-MM-DD）にフォーマット
  const getTodayString = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // 明日以降を選択可能にするため、今日の日付を基準に調整
    return today.toISOString().split('T')[0];
  };

  // チェックイン日の翌日を取得し、ISO形式にフォーマット
  const getMinCheckOutDate = () => {
    if (formData.checkInDate) {
      const checkIn = new Date(formData.checkInDate);
      checkIn.setDate(checkIn.getDate() + 1); // チェックイン日の翌日
      return checkIn.toISOString().split('T')[0];
    }
    return getTodayString(); // チェックイン日が未選択の場合は今日の日付を返す
  };

  const checkInTimes = Array.from({ length: 6 }, (_, i) => `${15 + i}:00`); // 15:00 to 20:00

  return (
    <div className="border-b border-gray-200 pb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">① 日程</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-1">
            チェックイン日<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            required
            min={getTodayString()}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-1">
            チェックアウト日<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            required
            min={getMinCheckOutDate()}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="checkInTime" className="block text-sm font-medium text-gray-700 mb-1">
          チェックイン時間<span className="text-red-500">*</span>
        </label>
        <select
          id="checkInTime"
          name="checkInTime"
          value={formData.checkInTime}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
          <option value="">選択してください</option>
          {checkInTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="lodging" className="block text-sm font-medium text-gray-700 mb-1">
          宿<span className="text-red-500">*</span>
        </label>
        <select
          id="lodging"
          name="lodging"
          value={formData.lodging}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
          <option value="">選択してください</option>
          <option value="ブナの森">ブナの森</option>
          <option value="陶">陶</option>
          <option value="さんこの宿">さんこの宿</option>
        </select>
      </div>
    </div>
  );
}
