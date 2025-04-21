"use client";

import React from "react";
import "@/styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="ml-20 mt-10 rtl w-1/4">
        <ul className=" border rounded-t-xl mb-10">
          <li className="text-4xl text-white bg-black text-center p-3 rounded-t-lg">
            會員中心
          </li>
          <li className="text-2xl border-b p-2">帳戶基本資料</li>
          <li className="text-2xl border-b p-2">身體基本資料</li>
          <li className="text-2xl border-b p-2">第三方綁定與密碼</li>
          <li className="text-2xl border-b p-2">課程進度</li>
          <li className="text-2xl border-b p-2">成就</li>
          <li className="text-2xl p-2 ">預設收件地址、門市</li>
        </ul>
        <ul className="border rounded-t-xl">
          <li className="text-4xl text-white bg-black text-center p-3 rounded-t-lg">
            商城
          </li>
          <li className="text-2xl border-b p-2">訂單</li>
          <li className="text-2xl border-b p-2">優惠券</li>
          <li className="text-2xl  p-2">收藏清單</li>
        </ul>
      </div>
    </div>
  );
}
