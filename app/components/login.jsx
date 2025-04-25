import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 在這裡處理你的登入邏輯
    console.log("登入資訊：", { email, password });
    // 登入成功後可以調用 onClose 關閉彈窗
    onClose();
  };

  if (!isOpen) {
    return null; // 如果 isOpen 為 false，則不渲染
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md relative">
        <Button
          onClick={onClose}
          className=" absolute top-3  rounded-sm right-5 text-gray-500  text-2xl"
        >
          ×
        </Button>
        <h2 className="text-[40px] font-bold my-5 text-center text-[#333333]">
          登入到 NEXFIT
        </h2>

        <div className="flex justify-center">
          <Link href="#">
            <p className="relative mr-6 mb-10 text-2xl opacity-60 hover:opacity-100 text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#a9ba5c] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">
              SIGN IN
            </p>
          </Link>
          <Link href="#">
            <p className="relative mr-6 mb-5 text-2xl opacity-60 hover:opacity-100 text-black after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#a9ba5c] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">
              SIGN UP
            </p>
          </Link>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[#444444] text-lg font-medium mb-2"
          >
            電子信箱
          </label>
          <input
            type="text"
            id="email"
            className=" border-b w-full py-2 px-3 text-[#333333] leading-tight focus:outline-none "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-[#444444] text-lg font-medium mb-2"
          >
            密碼
          </label>
          <input
            type="password"
            id="password"
            className=" border-b w-full py-2 px-3 text-[#333333] leading-tight focus:outline-none "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end">
          <Link
            href="#"
            className="inline-block align-baseline font-medium text-lg text-[#555555]"
          >
            忘記密碼？
          </Link>
        </div>

        <div class="flex justify-center">
          <Button variant="outline" className="w-30 h-10 mt-5 mr-10  rounded-[60px]">
            <Image src="/Facebook.svg" alt="Cart Icon" width={20} height={20} />
          </Button>
          <Button variant="outline" className="w-30 h-10 mt-5 rounded-[60px]">
            <Image src="/Google.svg" alt="Cart Icon" width={20} height={20} />
          </Button>
        </div>
        <div class="flex justify-center">
          <Button variant="outline" className="w-30 h-10 mt-5 mr-10 rounded-[60px]">
            <Image src="/Line.svg" alt="Cart Icon" width={30} height={30} />
          </Button>
          <Button variant="outline" className="w-30 h-10 mt-5 rounded-[60px]">
            <Image src="/Apple.svg" alt="Cart Icon" width={30} height={30} />
          </Button>
        </div>
        <div className=" w-full flex justify-center mt-3">
          <Button
            className=" w-70 h-12 mt-4"
            type="button"
            onClick={handleLogin}
            rounded="login"
          >
            會員登入
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
