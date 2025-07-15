// frontend/src/app/booking/__tests__/BookingPage.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingPage from '../page';
import { useRouter, useSearchParams } from 'next/navigation';

// useRouterとuseSearchParamsのモックをセットアップ
const mockPush = jest.fn();
const mockUseRouter = useRouter as jest.Mock;
const mockUseSearchParams = useSearchParams as jest.Mock;

describe('BookingPage', () => {
  // 各テストの前にモックをリセットし、初期状態を設定
  beforeEach(() => {
    mockPush.mockClear();
    mockUseRouter.mockReturnValue({ push: mockPush });
    mockUseSearchParams.mockReturnValue(new URLSearchParams()); // デフォルトで空のSearchParams
    // window.alertをモック
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    // window.scrollToをモック
    jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    // AjaxZip3をモック
    // ★修正: mockImplementationの引数をunknown[]として受け取り、内部で型アサーション
    jest.spyOn((window as any).AjaxZip3, 'zip2addr').mockImplementation((...args: unknown[]) => {
      // 引数をstring型として展開
      const [zip1, zip2, pref, city, street] = args as [string, string, string, string, string];

      if (zip1 === 'postalCode1' && zip2 === '4567') {
        const prefectureEl = document.getElementById(pref) as HTMLSelectElement;
        const cityEl = document.getElementById(city) as HTMLInputElement;
        const streetEl = document.getElementById(street) as HTMLTextAreaElement;

        if (prefectureEl) prefectureEl.value = '東京都';
        if (cityEl) cityEl.value = '千代田区';
        if (streetEl) streetEl.value = '丸の内';
      }
    });
  });

  // 各テストの後にモックを復元
  afterEach(() => {
    jest.restoreAllMocks();
  });

  // テストケース1: コンポーネントが正しくレンダリングされるか
  test('renders the booking form correctly', () => {
    render(<BookingPage />);
    expect(screen.getByText('農泊 予約フォーム')).toBeInTheDocument();
    expect(screen.getByLabelText('チェックイン日*')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '予約内容を確認する' })).toBeInTheDocument();
  });

  // テストケース2: クエリパラメータからフォームデータが正しく初期化されるか
  test('initializes form data from query parameters', () => {
    const params = new URLSearchParams({
      checkInDate: '2025-08-01',
      lodging: 'ブナの森',
      adultMale: '2',
      lastName: '山田',
    } as Record<string, string>);
    mockUseSearchParams.mockReturnValue(params);

    render(<BookingPage />);

    expect(screen.getByLabelText('チェックイン日*')).toHaveValue('2025-08-01');
    expect(screen.getByLabelText('宿*')).toHaveValue('ブナの森');
    expect(screen.getByLabelText('大人（男性）*')).toHaveValue(2);
    expect(screen.getByLabelText('申込者名 (姓)*')).toHaveValue('山田');
  });

  // テストケース3: 入力フィールドの変更がformDataに正しく反映されるか
  test('updates form data on input change', async () => {
    render(<BookingPage />);
    const user = userEvent.setup();

    const checkInDateInput = screen.getByLabelText('チェックイン日*');
    await user.type(checkInDateInput, '2025-08-10');
    expect(checkInDateInput).toHaveValue('2025-08-10');

    const adultMaleInput = screen.getByLabelText('大人（男性）*');
    await user.clear(adultMaleInput); // デフォルトの0をクリア
    await user.type(adultMaleInput, '3');
    expect(adultMaleInput).toHaveValue(3); // 数値として扱われることを確認

    const lastNameInput = screen.getByLabelText('申込者名 (姓)*');
    await user.type(lastNameInput, 'テスト');
    expect(lastNameInput).toHaveValue('テスト');

    const genderRadio = screen.getByLabelText('男性');
    await user.click(genderRadio);
    expect(genderRadio).toBeChecked();
  });

  // テストケース4: 必須フィールドが空の場合にバリデーションアラートが表示されるか
  test('shows alert for missing required fields on submit', async () => {
    render(<BookingPage />);
    const user = userEvent.setup();

    const submitButton = screen.getByRole('button', { name: '予約内容を確認する' });
    await user.click(submitButton);

    // 複数の必須フィールドがあるため、最初のアラートがチェックイン日であることを確認
    expect(window.alert).toHaveBeenCalledWith('チェックイン日を選択してください。');
    expect(mockPush).not.toHaveBeenCalled(); // ページ遷移が阻止されることを確認

    // 他の必須フィールドも同様にテスト可能だが、ここでは代表的なもののみ
    // 例：日付を入力して、人数が0の場合
    (window.alert as jest.Mock).mockClear(); // アラートをクリア
    await user.type(screen.getByLabelText('チェックイン日*'), '2025-08-01');
    await user.type(screen.getByLabelText('チェックアウト日*'), '2025-08-02');
    await user.selectOptions(screen.getByLabelText('チェックイン時間*'), '15:00');
    await user.selectOptions(screen.getByLabelText('宿*'), 'ブナの森');
    // 人数はデフォルト0なので、そのまま送信
    await user.click(submitButton);
    expect(window.alert).toHaveBeenCalledWith('ご利用人数を少なくとも1名入力してください。');
  });

  // テストケース5: チェックアウト日がチェックイン日より前の場合にバリデーションアラートが表示されるか
  test('shows alert if checkout date is before or same as checkin date', async () => {
    render(<BookingPage />);
    const user = userEvent.setup();

    // 必須フィールドを埋める
    await user.type(screen.getByLabelText('チェックイン日*'), '2025-08-10');
    await user.type(screen.getByLabelText('チェックアウト日*'), '2025-08-09'); // チェックイン日より前
    await user.selectOptions(screen.getByLabelText('チェックイン時間*'), '15:00');
    await user.selectOptions(screen.getByLabelText('宿*'), 'ブナの森');
    await user.type(screen.getByLabelText('大人（男性）*'), '1');
    await user.type(screen.getByLabelText('申込者名 (姓)*'), 'テスト');
    await user.type(screen.getByLabelText('申込者名 (名)*'), '太郎');
    await user.type(screen.getByLabelText('フリガナ (セイ)*'), 'テスト');
    await user.type(screen.getByLabelText('フリガナ (メイ)*'), 'タロウ');
    await user.click(screen.getByLabelText('男性'));
    await user.type(screen.getByLabelText('電話番号*'), '09012345678');
    await user.type(screen.getByLabelText('メールアドレス*'), 'test@example.com');
    await user.type(screen.getByLabelText('郵便番号'), '123');
    await user.type(screen.getByLabelText('郵便番号').nextElementSibling as HTMLInputElement, '4567'); // 2つ目の郵便番号入力欄
    await user.selectOptions(screen.getByLabelText('都道府県'), '東京都');
    await user.type(screen.getByLabelText('市区町村'), '千代田区');
    await user.type(screen.getByLabelText('番地・建物名'), '丸の内1-1');

    const submitButton = screen.getByRole('button', { name: '予約内容を確認する' });
    await user.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith('チェックアウト日はチェックイン日より後の日付を選択してください。');
    expect(mockPush).not.toHaveBeenCalled();
  });

  // テストケース6: 全てのバリデーションをパスした場合に、確認ページへ正しく遷移するか
  test('navigates to confirm page with correct query params on successful submission', async () => {
    render(<BookingPage />);
    const user = userEvent.setup();

    // フォームに有効なデータを入力
    await user.type(screen.getByLabelText('チェックイン日*'), '2025-08-10');
    await user.type(screen.getByLabelText('チェックアウト日*'), '2025-08-11');
    await user.selectOptions(screen.getByLabelText('チェックイン時間*'), '15:00');
    await user.selectOptions(screen.getByLabelText('宿*'), 'ブナの森');
    await user.type(screen.getByLabelText('大人（男性）*'), '1');
    await user.type(screen.getByLabelText('申込者名 (姓)*'), 'テスト');
    await user.type(screen.getByLabelText('申込者名 (名)*'), '太郎');
    await user.type(screen.getByLabelText('フリガナ (セイ)*'), 'テスト');
    await user.type(screen.getByLabelText('フリガナ (メイ)*'), 'タロウ');
    await user.click(screen.getByLabelText('男性'));
    await user.type(screen.getByLabelText('電話番号*'), '09012345678');
    await user.type(screen.getByLabelText('メールアドレス*'), 'test@example.com');
    await user.type(screen.getByLabelText('郵便番号'), '123');
    await user.type(screen.getByLabelText('郵便番号').nextElementSibling as HTMLInputElement, '4567');
    await user.selectOptions(screen.getByLabelText('都道府県'), '東京都');
    await user.type(screen.getByLabelText('市区町村'), '千代田区');
    await user.type(screen.getByLabelText('番地・建物名'), '丸の内1-1');
    await user.type(screen.getByLabelText('ご質問やご要望があればご記入ください'), '備考テスト');

    const submitButton = screen.getByRole('button', { name: '予約内容を確認する' });
    await user.click(submitButton);

    // alertが呼ばれないことを確認
    expect(window.alert).not.toHaveBeenCalled();

    // router.pushが正しいURLで呼ばれたことを確認
    expect(mockPush).toHaveBeenCalledTimes(1);
    const expectedQueryString = new URLSearchParams({
      checkInDate: '2025-08-10',
      checkOutDate: '2025-08-11',
      checkInTime: '15:00',
      lodging: 'ブナの森',
      adultMale: '1',
      adultFemale: '0',
      child7_12: '0',
      childUnder6: '0',
      lastName: 'テスト',
      firstName: '太郎',
      lastNameKana: 'テスト',
      firstNameKana: 'タロウ',
      gender: '男性',
      phoneNumber: '09012345678',
      email: 'test@example.com',
      postalCode1: '123',
      postalCode2: '4567',
      prefecture: '東京都',
      city: '千代田区',
      street: '丸の内1-1',
      remarks: '備考テスト',
    } as Record<string, string>).toString();
    expect(mockPush).toHaveBeenCalledWith(`/booking/confirm?${expectedQueryString}`);
  });

  // テストケース7: handlePostalCodeBlurがAjaxZip3を呼び出し、フォームデータを更新するか
  test('handlePostalCodeBlur calls AjaxZip3 and updates form data', async () => {
    render(<BookingPage />);
    const user = userEvent.setup();

    const postalCode1Input = screen.getByLabelText('郵便番号');
    const postalCode2Input = screen.getByLabelText('郵便番号').nextElementSibling as HTMLInputElement; // 2つ目の郵便番号入力欄

    await user.type(postalCode1Input, '123');
    await user.type(postalCode2Input, '4567');

    // onBlurイベントを発火
    fireEvent.blur(postalCode2Input);

    // AjaxZip3.zip2addrが呼ばれたことを確認
    expect((window as any).AjaxZip3.zip2addr).toHaveBeenCalledWith(
      'postalCode1',
      'postalCode2',
      'prefecture',
      'city',
      'street'
    );

    // setTimeout内のsetStateが完了するのを待つ
    await waitFor(() => {
      expect(screen.getByLabelText('都道府県')).toHaveValue('東京都');
      expect(screen.getByLabelText('市区町村')).toHaveValue('千代田区');
      // streetはAjaxZip3が設定する値が反映される
      expect(screen.getByLabelText('番地・建物名')).toHaveValue('丸の内');
    }, { timeout: 100 }); // タイムアウトを少し長めに設定
  });

  // テストケース8: getTodayStringが正しい日付を返すか
  test('getTodayString returns correct date string (tomorrow)', () => {
    render(<BookingPage />); // コンポーネントをレンダリングして関数を呼び出す
    const today = new Date();
    today.setDate(today.getDate() + 1); // 翌日
    const expectedDate = today.toISOString().split('T')[0];
    
    // min属性の値が正しいことを確認
    expect(screen.getByLabelText('チェックイン日*')).toHaveAttribute('min', expectedDate);
  });

  // テストケース9: getMinCheckOutDateがチェックイン日の翌日を返すか
  test('getMinCheckOutDate returns check-in date + 1 day', async () => {
    render(<BookingPage />);
    const user = userEvent.setup();

    const checkInDateInput = screen.getByLabelText('チェックイン日*');
    await user.type(checkInDateInput, '2025-08-15');

    const expectedCheckOutDate = new Date('2025-08-15');
    expectedCheckOutDate.setDate(expectedCheckOutDate.getDate() + 1);
    const expectedDateString = expectedCheckOutDate.toISOString().split('T')[0];

    // checkOutDateのmin属性が正しく更新されたことを確認
    expect(screen.getByLabelText('チェックアウト日*')).toHaveAttribute('min', expectedDateString);
  });
});
