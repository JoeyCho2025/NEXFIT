"use client";

import Link from "next/link";
import React from "react";
import "@/styles/sidebar.css";

const accountCenter = [
  { id: "1", href: "/account", name: "帳戶基本資料" },
  { id: "2", href: "/body", name: "身體基本資料" },
  { id: "3", href: "/password", name: "第三方綁定與密碼" },
  { id: "4", href: "/course", name: "課程進度" },
  { id: "5", href: "/achievement", name: " 成就" },
  { id: "6", href: "/address", name: " 預設收件地址", isLast: true },
];

const mall = [
  { id: "1", href: "/order", name: "訂單" },
  { id: "2", href: "/coupon", name: "優惠券" },
  { id: "3", href: "/favorite", name: "收藏清單", isLast: true },
];

export default function Sidebar() {
  return (
    <div className="flex w-2/7">
      <div className="ml-10 mt-10 w-full">
        <ul className=" mb-10  ">
          <li className="text-base  text-white w-full bg-black text-center p-3 rounded-t-xl">
            會員中心
          </li>
          {accountCenter.map((a, index) => (
            <Link key={a.id} href={a.href}>
              <li
                className={`text-sm border-b border-x py-3.5 px-5 border-borderColor
              ${a.isLast ? "rounded-b-lg" : ""}`}
              >
                {a.name}
              </li>
            </Link>
          ))}
        </ul>
        <ul>
          <li className="text-base text-white bg-black text-center p-3 rounded-t-xl">
            商城
          </li>
          {mall.map((m, index) => (
            <Link key={m.id} href={m.href}>
              <li
                className={`text-sm border-b border-x py-3.5 px-5 border-borderColor ${
                  m.isLast ? "rounded-b-lg" : ""
                }`}
              >
                {m.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
