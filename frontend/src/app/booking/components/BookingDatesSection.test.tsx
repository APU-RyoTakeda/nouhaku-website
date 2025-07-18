// frontend/src/app/booking/components/BookingDatesSection.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; // jest-dom のカスタムマッチャーをインポート
import BookingDatesSection from './BookingDatesSection';
import { BookingFormData } from '../../../types/booking'; // BookingFormData の型定義をインポート

describe('BookingDatesSection', () => {
  // テストごとにリセットされるモックデータと関数
  let mockFormData: BookingFormData;
  let mockHandleChange: jest.Mock;
  let user: ReturnType<typeof userEvent.setup>; // userEvent のインスタンスを保持

  beforeEach(() => {
    // 各テストの前にモックデータを初期化
    mockFormData = {
      checkInDate: '',
      checkOutDate: '',
      checkInTime: '',
      lodging: '',
      // BookingFormData に含まれる他のプロパティも必要に応じて追加
      name: '',
      email: '',
      phone: '',
      adults: 1,
      children: 0,
      notes: '',
      totalPrice: 0,
    };
    // handleChange 関数をモック化
    mockHandleChange = jest.fn();
    user = userEvent.setup(); // userEvent のセットアップ
  });

  // コンポーネントが正しくレンダリングされることをテスト
  test('renders all form fields correctly', () => {
    render(
      <BookingDatesSection
        formData={mockFormData}
        handleChange={mockHandleChange}
      />
    );

    // 見出しがレンダリングされていることを確認
    expect(screen.getByRole('heading', { name: /① 日程/i })).toBeInTheDocument();

    // チェックイン日フィールドがレンダリングされていることを確認
    expect(screen.getByLabelText(/チェックイン日/i)).toBeInTheDocument();
    // チェックアウト日フィールドがレンダリングされていることを確認
    expect(screen.getByLabelText(/チェックアウト日/i)).toBeInTheDocument();
    // チェックイン時間選択フィールドがレンダリングされていることを確認
    expect(screen.getByLabelText(/チェックイン時間/i)).toBeInTheDocument();
    // 宿選択フィールドがレンダリングされていることを確認
    expect(screen.getByLabelText(/宿/i)).toBeInTheDocument();

    // チェックイン時間のオプションがレンダリングされていることを確認
    expect(screen.getByRole('option', { name: '15:00' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '20:00' })).toBeInTheDocument();

    // 宿のオプションがレンダリングされていることを確認
    expect(screen.getByRole('option', { name: 'ブナの森' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '陶' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'さんこの宿' })).toBeInTheDocument();
  });

  // チェックイン日の入力が handleChange を呼び出すことをテスト
  test('calls handleChange when check-in date is changed', () => { // async は不要に
    render(
      <BookingDatesSection
        formData={mockFormData}
        handleChange={mockHandleChange}
      />
    );

    const checkInDateInput = screen.getByLabelText(/チェックイン日/i) as HTMLInputElement;
    // DOM要素の値を直接設定してから change イベントを発火
    checkInDateInput.value = '2025-07-20';
    fireEvent.change(checkInDateInput); // target オブジェクトは不要

    // handleChange が呼び出されたことを確認
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    // 呼び出された最初の引数（イベントオブジェクト）の target.name と target.value を直接検証
    const event = mockHandleChange.mock.calls[0][0];
    expect(event.target.name).toBe('checkInDate');
    expect(event.target.value).toBe('2025-07-20');
  });

  // チェックアウト日の入力が handleChange を呼び出すことをテスト
  test('calls handleChange when check-out date is changed', () => { // async は不要に
    render(
      <BookingDatesSection
        formData={mockFormData}
        handleChange={mockHandleChange}
      />
    );

    const checkOutDateInput = screen.getByLabelText(/チェックアウト日/i) as HTMLInputElement;
    // DOM要素の値を直接設定してから change イベントを発火
    checkOutDateInput.value = '2025-07-22';
    fireEvent.change(checkOutDateInput);

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    const event = mockHandleChange.mock.calls[0][0];
    expect(event.target.name).toBe('checkOutDate');
    expect(event.target.value).toBe('2025-07-22');
  });

  // チェックイン時間の選択が handleChange を呼び出すことをテスト
  test('calls handleChange when check-in time is selected', async () => {
    render(
      <BookingDatesSection
        formData={mockFormData}
        handleChange={mockHandleChange}
      />
    );

    const checkInTimeSelect = screen.getByLabelText(/チェックイン時間/i) as HTMLSelectElement;
    // userEvent.selectOptions は <select> 要素のオプションを選択するために使用
    // userEvent は内部でDOMのvalueを更新するため、fireEvent.changeは不要
    await user.selectOptions(checkInTimeSelect, '16:00');

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    const event = mockHandleChange.mock.calls[0][0];
    expect(event.target.name).toBe('checkInTime');
    expect(event.target.value).toBe('16:00');
  });

  // 宿の選択が handleChange を呼び出すことをテスト
  test('calls handleChange when lodging is selected', async () => {
    render(
      <BookingDatesSection
        formData={mockFormData}
        handleChange={mockHandleChange}
      />
    );

    const lodgingSelect = screen.getByLabelText(/宿/i) as HTMLSelectElement;
    await user.selectOptions(lodgingSelect, '陶');

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    const event = mockHandleChange.mock.calls[0][0];
    expect(event.target.name).toBe('lodging');
    expect(event.target.value).toBe('陶');
  });

  // チェックイン日の min 属性が正しく設定されていることをテスト
  test('check-in date min attribute is set to today or later', () => {
    render(
      <BookingDatesSection
        formData={mockFormData}
        handleChange={mockHandleChange}
      />
    );

    const checkInDateInput = screen.getByLabelText(/チェックイン日/i);
    const today = new Date();
    today.setDate(today.getDate() + 1); // コンポーネントのロジックに合わせて翌日
    const expectedMinDate = today.toISOString().split('T')[0];

    expect(checkInDateInput).toHaveAttribute('min', expectedMinDate);
  });

  // チェックアウト日の min 属性がチェックイン日の翌日以降に設定されていることをテスト
  test('check-out date min attribute is set to day after check-in date', () => {
    // チェックイン日が設定された状態をシミュレート
    mockFormData.checkInDate = '2025-07-20';

    render(
      <BookingDatesSection
        formData={mockFormData}
        handleChange={mockHandleChange}
      />
    );

    const checkOutDateInput = screen.getByLabelText(/チェックアウト日/i);
    const expectedMinCheckOutDate = '2025-07-21'; // 2025-07-20 の翌日

    expect(checkOutDateInput).toHaveAttribute('min', expectedMinCheckOutDate);
  });

  // チェックイン日が未選択の場合、チェックアウト日の min 属性が今日以降に設定されていることをテスト
  test('check-out date min attribute is set to today or later if check-in date is not set', () => {
    render(
      <BookingDatesSection
        formData={mockFormData}
        handleChange={mockHandleChange}
      />
    );

    const checkOutDateInput = screen.getByLabelText(/チェックアウト日/i);
    const today = new Date();
    today.setDate(today.getDate() + 1); // コンポーネントのロジックに合わせて翌日
    const expectedMinDate = today.toISOString().split('T')[0];

    expect(checkOutDateInput).toHaveAttribute('min', expectedMinDate);
  });
});
