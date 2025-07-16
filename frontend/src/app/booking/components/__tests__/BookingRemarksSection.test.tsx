// frontend/src/app/booking/components/__tests__/BookingRemarksSection.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingRemarksSection from '../BookingRemarksSection'; // コンポーネントのパスを修正
import { BookingFormData } from '../../../../types/booking'; // 型定義のパスを修正

describe('BookingRemarksSection', () => {
  // テスト用のダミーformData
  const mockFormData: BookingFormData = {
    checkInDate: '', checkOutDate: '', checkInTime: '', lodging: '',
    adultMale: 0, adultFemale: 0, child7_12: 0, childUnder6: 0,
    lastName: '', firstName: '', lastNameKana: '', firstNameKana: '',
    gender: '', phoneNumber: '', email: '',
    postalCode1: '', postalCode2: '', prefecture: '', city: '', street: '',
    remarks: '初期の備考です。', // remarksに初期値を設定
  };

  // handleChangeのモック関数
  const mockHandleChange = jest.fn();

  // 各テストの前にモックをクリア
  beforeEach(() => {
    mockHandleChange.mockClear();
  });

  // テストケース1: コンポーネントが正しくレンダリングされるか
  test('renders the remarks section correctly with initial value', () => {
    render(<BookingRemarksSection formData={mockFormData} handleChange={mockHandleChange} />);
    
    expect(screen.getByRole('heading', { name: '④ 備考欄' })).toBeInTheDocument();
    expect(screen.getByLabelText('ご質問やご要望があればご記入ください')).toBeInTheDocument();
    expect(screen.getByLabelText('ご質問やご要望があればご記入ください')).toHaveValue('初期の備考です。');
  });

  // テストケース2: テキストエリアの入力がhandleChangeを正しく呼び出すか
  test('calls handleChange with correct values when textarea is typed into', async () => {
    render(<BookingRemarksSection formData={mockFormData} handleChange={mockHandleChange} />);
    const user = userEvent.setup();

    const remarksTextarea = screen.getByLabelText('ご質問やご要望があればご記入ください');
    await user.clear(remarksTextarea); // 初期値をクリア
    await user.type(remarksTextarea, '新しい備考');

    // handleChangeが2回呼ばれることを期待 (クリアとタイプ)
    expect(mockHandleChange).toHaveBeenCalledTimes(11); // '新しい備考'の10文字 + clear
    // 最後の呼び出しが正しい値であることを確認
    expect(mockHandleChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          name: 'remarks',
          value: '新しい備考',
        }),
      })
    );
  });

  // テストケース3: remarksが空の場合にplaceholderが表示されるか
  test('displays placeholder when remarks is empty', () => {
    const emptyRemarksFormData = { ...mockFormData, remarks: '' };
    render(<BookingRemarksSection formData={emptyRemarksFormData} handleChange={mockHandleChange} />);
    
    expect(screen.getByLabelText('ご質問やご要望があればご記入ください')).toHaveAttribute(
      'placeholder',
      '例：食事のアレルギーについて、特別なリクエストなど'
    );
    expect(screen.getByLabelText('ご質問やご要望があればご記入ください')).toHaveValue('');
  });
});
