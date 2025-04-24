"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { accountCenter, mall } from "/app/config/sidebarSection";
import "@/styles/sidebar.css";

export default function Sidebar() {
  const [activeId, setActiveId] = useState("1");

  const addActive = (id) => {
    setActiveId(id);
  };

  const pathname = usePathname();

  return (
    <div className="flex w-2/7">
      <div className="ml-10 mt-10 w-full">
        <ul className=" mb-10  ">
          <li className="text-base  text-white w-full bg-black text-center p-3 rounded-t-xl">
            會員中心
          </li>
          {accountCenter.map((a) => (
            <Link key={a.id} href={a.href}>
              <li
                className={`text-sm border-b border-x py-3.5 px-5 border-borderColor text-fontColor opacity-80
              ${a.isLast ? "rounded-b-lg" : ""}
              ${pathname === a.href ? "active" : ""}
              `}
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
                className={`text-sm border-b border-x py-3.5 px-5 border-borderColor text-fontColor opacity-80 ${
                  m.isLast ? "rounded-b-lg" : ""
                }
                 ${pathname === m.href ? "active" : ""}
                `}
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
