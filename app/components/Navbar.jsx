"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import css from "@/styles/navbar.css"; // 引入 CSS

// 一定要大寫開頭，才會被視為自訂元件
const HoverLink = ({ en, zh }) => {
  const [language, setLanguage] = useState("en");

  return (
    <span
      className="linkText"
      onMouseEnter={() => setLanguage("zh")}
      onMouseLeave={() => setLanguage("en")}
    >
      {language === "en" ? en : zh}
    </span>
  );
};

export default function Navbar() {
  const links = [
    { id: "1", href: "/news", en: "NEWS", zh: "最新消息" },
    { id: "2", href: "/about", en: "ABOUT", zh: "關於我們" },
    { id: "3", href: "/fuel", en: "FUEL", zh: "補給" },
    { id: "4", href: "/faq", en: "FAQ", zh: "常見問答" },
    { id: "5", href: "/class", en: "CLASS", zh: "課程" },
    { id: "6", href: "/contact", en: "CONTACT", zh: "聯絡我們" },
    { id: "7", href: "/forum", en: "FORUM", zh: "論壇" },
  ];

  return (
    <nav className="nav">
      <p>NEXFIT</p>
      <div className="linkGroup">
        {links.map((link, index) => (
          <Link key={link.id} href={link.href} className="Link">
            <HoverLink en={link.en} zh={link.zh} />
          </Link>
        ))}
      </div>
      <div className="imageGroup">
        <Link href="/account">
          <Image src="/account.svg" alt="Account Icon" width={30} height={30} />
        </Link>
        <Link href="/cart">
          <Image src="/cart.svg" alt="Cart Icon" width={30} height={30} />
        </Link>
      </div>
    </nav>
  );
}
