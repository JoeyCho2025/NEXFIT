"use client";

import React from "react";
import Image from "next/image";
import css from "@/styles/navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <p className="">NEXFIT</p>
      <div className="linkGroup ">
        <Link
          href="News"
          className="Link"
          data-en="NEWS"
          data-zh="最新消息"
        ></Link>
        <Link
          href="ABOUT"
          className="Link"
          data-en="ABOUT"
          data-zh="關於我們"
        ></Link>
        <Link
          href="FAQ"
          className="Link"
          data-en="FAQ"
          data-zh="常見問答"
        ></Link>
        <Link
          href="FUEL"
          className="Link"
          data-en="FUEL"
          data-zh="補給?"
        ></Link>
        <Link
          href="CLASS"
          className="Link"
          data-en="CLASS"
          data-zh="課程"
        ></Link>
        <Link
          href="CONTACT"
          className="Link"
          data-en="CONTACT"
          data-zh="聯絡我們"
        ></Link>
        <Link
          href="Forum"
          className="Link"
          data-en="FORUM"
          data-zh="論壇"
        ></Link>
      </div>
      <div className="imageGroup">
        <Link href="account">
          <Image src="/account.svg" alt="Account Icon" width={30} height={30} />
        </Link>
        <Link href="cart">
          <Image src="/cart.svg" alt="Cart Icon" width={30} height={30} />
        </Link>
      </div>
    </nav>
  );
}
