"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    id: "1",
    href: "https://www.facebook.com/?locale=zh_TW",
    icon: "/fb.svg",
  },
  {
    id: "2",
    href: "https://www.instagram.com/",
    icon: "/ig.svg",
  },
  {
    id: "3",
    href: "https://tw.linkedin.com/",
    icon: "/in.svg",
  },
  {
    id: "4",
    href: "https://x.com/",
    icon: "/x.svg",
    isLast: true,
  },
];

const sections = [
  {
    id: "how-we-are",
    title: "How We are",
    links: [
      { id: "about-nexfit", text: "關於 NEXFIT", href: "/about" },
      { id: "brand-philosophy", text: "品牌理念", href: "/about" },
      { id: "origin", text: "NEXFIT 的誕生", href: "/about" },
      { id: "health-definition", text: "健康的定義", href: "/about" },
      { id: "team", text: "運營團隊", href: "/about" },
    ],
  },
  {
    id: "service",
    title: "Service",
    links: [
      { id: "services", text: "服務項目", href: "/about" },
      { id: "booking", text: "課程預約平台", href: "/about" },
      { id: "coach-system", text: "專屬教練制度", href: "/about" },
      { id: "store", text: "健康補給商城", href: "/about" },
      { id: "consult", text: "健身計畫諮詢", href: "/about" },
      { id: "support", text: "客戶服務", href: "/about" },
    ],
  },
  {
    id: "journal",
    title: "Journal",
    links: [
      { id: "content-info", text: "內容與資訊", href: "/about" },
      { id: "news", text: "最新消息", href: "/about" },
      { id: "knowledge", text: "健身知識", href: "/about" },
      { id: "guide", text: "補給指南", href: "/about" },
      { id: "stories", text: "成員故事", href: "/about" },
      { id: "psychology", text: "運動心理學", href: "/about" },
    ],
  },
  {
    id: "member",
    title: "Member",
    links: [
      { id: "member-zone", text: "會員專區", href: "/about" },
      { id: "join", text: "加入會員", href: "/about" },
      { id: "my-courses", text: "我的課程", href: "/about" },
      { id: "orders", text: "補給訂單", href: "/about" },
      { id: "growth", text: "成長紀錄", href: "/about" },
      { id: "rewards", text: "點數與回饋", href: "/about" },
    ],
  },
  {
    id: "recruit",
    title: "Recruit",
    links: [
      { id: "recruit-info", text: "招募與文化", href: "/about" },
      { id: "join-us", text: "加入我們", href: "/about" },
      { id: "culture", text: "NEX 團隊文化", href: "/about" },
      { id: "events", text: "社群活動", href: "/about" },
      { id: "coach-program", text: "教練合作計畫", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 w-full h-180 absolute bg-[url(/bgimg.jpg)]">
      <div className="pt-10 h-full">
        <div className="ml-10 bg-white h-full rounded-2xl p-10">
          <div className="flex-row pr-10">
            <div className="mb-10">
              <div className="bg-borderColor p-10 rounded-2xl">
                <p className="text-4xl mb-5 ml-20 ">Keep in touch</p>
                <p className="ml-20">
                  保持聯繫，也保持狀態，關於課程、補給或健身的事，都可以來找我們聊聊。
                </p>
              </div>
            </div>
            <div className="mb-10 flex justify-between ">
              <p className="text-5xl">NEXFIT</p>
              <div className="flex">
                {socialLinks.map((sL, index) => (
                  <Link href={sL.href} key={sL.id} className="ml-5">
                    <Image
                      src={sL.icon}
                      alt="Account Icon"
                      width={30}
                      height={30}
                      className={sL.isLast ? "mr-5" : ""}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="mb-10 flex justify-between">
              {sections.map((section) => (
                <div key={section.id} className="flex flex-col pr-15">
                  <div>
                    <p className="text-4xl">{section.title}</p>
                    <Link
                      href={section.links[0].href}
                      className="text-sm"
                      id={section.links[0].id}
                    >
                      {section.links[0].text}
                    </Link>
                  </div>
                  {section.links.slice(1).map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="text-sm my-2"
                      id={link.id}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="text-right text-base font-bold">
              © NETFIT Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
