"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect } from "react";
import "@/styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="flex w-2/7">
      <div className="ml-10 mt-10 w-full">
        <ul className=" mb-10  ">
          <li className="text-base  text-white w-full bg-black text-center p-3 rounded-t-xl">
            會員中心
          </li>
          <Link href="account">
            <li className="text-sm border-b border-x py-3.5 px-5 border-borderColor ">
              帳戶基本資料
            </li>
          </Link>
          <Link href="body">
            <li className="text-sm border-b border-x py-3.5 px-5 border-borderColor">
              身體基本資料
            </li>
          </Link>
          <Link href="password">
            <li
              className="text-sm border-b border-x py-3.5 px-5 border-borderColor"
              id="account"
            >
              第三方綁定與密碼
            </li>
          </Link>
          <Link href="session">
            <li className="text-sm border-b border-x py-3.5 px-5 border-borderColor">
              課程進度
            </li>
          </Link>
          <Link href="achievement">
            <li className="text-sm border-b border-x py-3.5 px-5 border-borderColor">
              成就
            </li>
          </Link>
          <Link href="receive">
            <li className="text-sm py-3.5 px-5  border-b border-x rounded-b-lg border-borderColor">
              預設收件地址、門市
            </li>
          </Link>
        </ul>
        <ul className="">
          <li className="text-base text-white bg-black text-center p-3 rounded-t-xl">
            商城
          </li>
          <Link href="order">
            <li className="text-sm border-b border-x py-3.5 px-5 border-borderColor">
              訂單
            </li>
          </Link>
          <Link href="coupon">
            <li className="text-sm border-b border-x py-3.5 px-5 border-borderColor">
              優惠券
            </li>
          </Link>
          <Link href="favorite">
            <li className="text-sm border-b border-x py-3.5 px-5 border-borderColor rounded-b-lg">
              收藏清單
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
