// frontend/src/components/common/MenuBarIcon.tsx
'use client'; // クライアントコンポーネントとしてマーク

import React from 'react';

// MenuBarIconコンポーネントのpropsの型定義
interface MenuBarIconProps {
  toggled: boolean; // メニューが開いているかどうか
  toggle: (toggled: boolean) => void; // メニューの開閉を切り替える関数
  isScrolled: boolean; // ヘッダーがスクロールされた状態かどうか
}

const MenuBarIcon: React.FC<MenuBarIconProps> = ({ toggled, toggle, isScrolled }) => {
  return (
    <button
      onClick={() => toggle(!toggled)} // 親から渡されたtoggle関数を使用
      className="block p-2 focus:outline-none z-50 relative transition-transform duration-300 ease-in-out hover:scale-110"
      aria-label={toggled ? "Close menu" : "Open menu"}
    >
      {/* 一本の線。メニューが開いているときは非表示、開いていないときは呼吸効果 */}
      <div
        className={`w-8 h-1 rounded transition-opacity duration-300 ease-in-out ${
          isScrolled ? 'bg-white' : 'bg-gray-900' // スクロールに応じた色
        } ${toggled ? 'opacity-0' : 'opacity-100'} ${!toggled ? 'animate-breathing-light' : ''}`} // アニメーションクラス
      ></div>
    </button>
  );
};

export default MenuBarIcon;