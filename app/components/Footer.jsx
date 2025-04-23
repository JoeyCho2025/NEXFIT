"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/footer.css";

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
                <Link
                  href="https://www.facebook.com/?locale=zh_TW"
                  className=""
                >
                  <Image
                    src="/fb.svg"
                    alt="Account Icon"
                    width={30}
                    height={30}
                    
                  />
                </Link>
                <Link href="https://www.instagram.com/" className="">
                  <Image
                    src="/ig.svg"
                    alt="Account Icon"
                    width={30}
                    height={30}
                    className="ml-5"
                  />
                </Link>
                <Link href="https://tw.linkedin.com/" className="">
                  <Image
                    src="/in.svg"
                    alt="Account Icon"
                    width={30}
                    height={30}
                    className="ml-5"
                  />
                </Link>
                <Link href="https://x.com/" className="">
                  <Image
                    src="/x.svg"
                    alt="Account Icon"
                    width={30}
                    height={30}
                    className="ml-5"
                  />
                </Link>
              </div>
            </div>
            <div className="mb-10 flex justify-between">
              <div className="flex flex-col">
                <div>
                  <p className="text-4xl">How We are</p>
                  <Link href="/about" className="text-sm">
                    關於 NEXFIT
                  </Link>
                </div>
                <Link href="/about" className="text-sm my-2">
                  品牌理念
                </Link>
                <Link href="/about" className="text-sm my-2">
                  NEXFIT 的誕生
                </Link>
                <Link href="/about" className="text-sm my-2">
                  健康的定義
                </Link>
                <Link href="/about" className="text-sm my-2">
                  運營團隊
                </Link>
              </div>
              <div className="flex flex-col">
                <div>
                  <p className="text-4xl">Service</p>
                  <Link href="/about" className="text-sm">
                    服務項目
                  </Link>
                </div>
                <Link href="/about" className="text-sm my-2">
                  課程預約平台
                </Link>
                <Link href="/about" className="text-sm my-2">
                  專屬教練制度
                </Link>
                <Link href="/about" className="text-sm my-2">
                  健康補給商城
                </Link>
                <Link href="/about" className="text-sm my-2">
                  健身計畫諮詢
                </Link>
                <Link href="/about" className="text-sm my-2">
                  客戶服務
                </Link>
              </div>
              <div className="flex flex-col">
                <div>
                  <p className="text-4xl">Journal</p>
                  <Link href="/about" className="text-sm">
                    內容與資訊
                  </Link>
                </div>
                <Link href="/about" className="text-sm my-2">
                  最新消息
                </Link>
                <Link href="/about" className="text-sm my-2">
                  健身知識
                </Link>
                <Link href="/about" className="text-sm my-2">
                  補給指南
                </Link>
                <Link href="/about" className="text-sm my-2">
                  成員故事
                </Link>
                <Link href="/about" className="text-sm my-2">
                  運動心理學
                </Link>
              </div>
              <div className="flex flex-col">
                <div>
                  <p className="text-4xl">Member</p>
                  <Link href="/about" className="text-sm">
                    會員專區
                  </Link>
                </div>
                <Link href="/about" className="text-sm my-2">
                  加入會員
                </Link>
                <Link href="/about" className="text-sm my-2">
                  我的課程
                </Link>
                <Link href="/about" className="text-sm my-2">
                  補給訂單
                </Link>
                <Link href="/about" className="text-sm my-2">
                  成長紀錄
                </Link>
                <Link href="/about" className="text-sm my-2">
                  點數與回饋
                </Link>
              </div>
              <div className="flex flex-col">
                <div>
                  <p className="text-4xl">Recruit</p>
                  <Link href="/about" className="text-sm">
                    招募與文化
                  </Link>
                </div>
                <Link href="/about" className="text-sm my-2">
                  加入我們
                </Link>
                <Link href="/about" className="text-sm my-2">
                  NEX 團隊文化
                </Link>
                <Link href="/about" className="text-sm my-2">
                  社群活動
                </Link>
                <Link href="/about" className="text-sm my-2">
                  教練合作計畫
                </Link>
              </div>
            </div>
            <div className="text-right text-base font-bold">© NETFIT Inc. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
