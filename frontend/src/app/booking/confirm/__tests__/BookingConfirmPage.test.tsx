// frontend/src/app/booking/confirm/__tests__/BookingConfirmPage.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingConfirmPage from '../../page';
import { useRouter, useSearchParams } from 'next/navigation';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

// useRouterとuseSearchParamsのモックをセットアップ
const mockPush = jest.fn();
const mockUseRouter = useRouter as jest.Mock;
const mockUseSearchParams = useSearchParams as jest.Mock;

// MSW (Mock Service Worker) のセットアップ
const server = setupServer(
  // 予約APIのモック（成功ケース）
  http.post('http://localhost:8000/api/bookings/', ({ request }) => {
    return HttpResponse.json({ message: '予約が正常に作成されました', bookingId: '12345' }, { status: 201 });
  })
);

describe('BookingConfirmPage', () => {
  // 各テストの前にMSWサーバーを起動
  beforeAll(() => server.listen());
  // 各テストの後にモックをリセット
  afterEach(() => {
    server.resetHandlers();
    mockPush.mockClear();
    mockUseRouter.mockReturnValue({ push: mockPush });
    mockUseSearchParams.mockReturnValue(new URLSearchParams());
  });
  // 全てのテストの後にMSWサーバーを停止
  afterAll(() => server.close());

  // テストデータ
  const mockFormData = {
    checkInDate: '2025-08-01',
    checkOutDate: '2025-08-03',
    checkInTime: '15:00',
    lodging: 'ブナの森',
    adultMale: '1',
    adultFemale: '1',
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
    street: '丸の内1-1-1',
    remarks: 'アレルギーあり',
  };

  // テストケース1: クエリパラメータからデータが正しくパースされ、表示されるか
  test('displays parsed form data correctly from query parameters', () => {
    const params = new URLSearchParams(mockFormData as Record<string, string>).toString(); // ★修正: ここに型アサーションを追加
    mockUseSearchParams.mockReturnValue(new URLSearchParams(params));

    render(<BookingConfirmPage />);

    expect(screen.getByText(/予約内容確認/i)).toBeInTheDocument();
    expect(screen.getByText(`チェックイン日: ${mockFormData.checkInDate}`)).toBeInTheDocument();
    expect(screen.getByText(`チェックアウト日: ${mockFormData.checkOutDate}`)).toBeInTheDocument();
    expect(screen.getByText(`チェックイン時間: ${mockFormData.checkInTime}`)).toBeInTheDocument();
    expect(screen.getByText(`宿: ${mockFormData.lodging}`)).toBeInTheDocument();
    expect(screen.getByText(`大人（男性）: ${mockFormData.adultMale}名`)).toBeInTheDocument();
    expect(screen.getByText(`大人（女性）: ${mockFormData.adultFemale}名`)).toBeInTheDocument();
    expect(screen.getByText(`7～12歳: ${mockFormData.child7_12}名`)).toBeInTheDocument();
    expect(screen.getByText(`6歳以下: ${mockFormData.childUnder6}名`)).toBeInTheDocument();
    expect(screen.getByText(`申込者名: ${mockFormData.lastName} ${mockFormData.firstName}`)).toBeInTheDocument();
    expect(screen.getByText(`フリガナ: ${mockFormData.lastNameKana} ${mockFormData.firstNameKana}`)).toBeInTheDocument();
    expect(screen.getByText(`性別: ${mockFormData.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`電話番号: ${mockFormData.phoneNumber}`)).toBeInTheDocument();
    expect(screen.getByText(`メールアドレス: ${mockFormData.email}`)).toBeInTheDocument();
    expect(screen.getByText(`住所: 〒${mockFormData.postalCode1}-${mockFormData.postalCode2} ${mockFormData.prefecture}${mockFormData.city}{mockFormData.street}`)).toBeInTheDocument();
    expect(screen.getByText(mockFormData.remarks)).toBeInTheDocument();
    
    // 合計人数も確認
    const totalGuests = parseInt(mockFormData.adultMale) + parseInt(mockFormData.adultFemale) + parseInt(mockFormData.child7_12) + parseInt(mockFormData.childUnder6);
    expect(screen.getByText(`合計人数: ${totalGuests}名`)).toBeInTheDocument();
  });

  // テストケース2: 「修正する」ボタンが正しくフォームページに遷移するか
  test('navigates back to booking page with current data when "修正する" button is clicked', async () => {
    const params = new URLSearchParams(mockFormData as Record<string, string>).toString(); // ★修正: ここに型アサーションを追加
    mockUseSearchParams.mockReturnValue(new URLSearchParams(params));

    render(<BookingConfirmPage />);
    const user = userEvent.setup();

    const editButton = screen.getByRole('button', { name: '修正する' });
    await user.click(editButton);

    expect(mockPush).toHaveBeenCalledTimes(1);
    // 渡されるクエリパラメータが元のデータと一致することを確認
    const expectedQueryString = new URLSearchParams(mockFormData as Record<string, string>).toString(); // ★修正: ここに型アサーションを追加
    expect(mockPush).toHaveBeenCalledWith(`/booking?${expectedQueryString}`);
  });

  // テストケース3: 「この内容で予約を確定する」ボタンがAPIを呼び出し、成功時に完了ページへ遷移するか
  test('calls API and navigates to completion page on successful booking', async () => {
    const params = new URLSearchParams(mockFormData as Record<string, string>).toString(); // ★修正: ここに型アサーションを追加
    mockUseSearchParams.mockReturnValue(new URLSearchParams(params));

    render(<BookingConfirmPage />);
    const user = userEvent.setup();

    const confirmButton = screen.getByRole('button', { name: 'この内容で予約を確定する' });
    await user.click(confirmButton);

    // API呼び出しとrouter.pushが非同期で発生するため、waitForを使用
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/booking/completion');
    });
  });

  // テストケース4: API呼び出しが失敗した場合にエラーページへ遷移するか
  test('navigates to error page on API failure', async () => {
    // APIエラーをモック
    server.use(
      http.post('http://localhost:8000/api/bookings/', () => {
        return HttpResponse.json({ detail: 'サーバーエラーが発生しました' }, { status: 500 });
      })
    );

    const params = new URLSearchParams(mockFormData as Record<string, string>).toString(); // ★修正: ここに型アサーションを追加
    mockUseSearchParams.mockReturnValue(new URLSearchParams(params));

    render(<BookingConfirmPage />);
    const user = userEvent.setup();

    const confirmButton = screen.getByRole('button', { name: 'この内容で予約を確定する' });
    await user.click(confirmButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/booking/error');
    });
  });

  // テストケース5: ネットワークエラーが発生した場合にエラーページへ遷移するか
  test('navigates to error page on network error', async () => {
    // ネットワークエラーをモック
    server.use(
      http.post('http://localhost:8000/api/bookings/', () => {
        return HttpResponse.error();
      })
    );

    const params = new URLSearchParams(mockFormData as Record<string, string>).toString(); // ★修正: ここに型アサーションを追加
    mockUseSearchParams.mockReturnValue(new URLSearchParams(params));

    render(<BookingConfirmPage />);
    const user = userEvent.setup();

    const confirmButton = screen.getByRole('button', { name: 'この内容で予約を確定する' });
    await user.click(confirmButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/booking/error');
    });
  });
});
