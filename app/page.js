"use client";

import LoginModal from "./components/login";
import Image from "next/image";
import { useState } from "react"; 

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      {/* 你的其他內容 */}
      <Image
        src="/account.svg"
        alt="觸發登入彈窗的圖片"
        width={50}
        height={50}
        className="cursor-pointer"
        onClick={openLoginModal} // 調用 openLoginModal 函數
      />

      {/* 條件渲染 LoginModal 元件 */}
      {isLoginModalOpen && (
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      )}

      {/* 你的其他內容 */}
    </div>
  );
}
