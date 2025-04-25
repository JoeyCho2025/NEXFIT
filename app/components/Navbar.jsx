"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { links } from "/app/config/navbarSection";
import LoginModal from "./login";

const HoverLink = ({ en, zh }) => {
  return (
    <div className="relative inline-block opacity-70 group-hover:opacity-100 min-w-[100px] text-center h-8">
      <div className="relative h-full w-full">
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform group-hover:-translate-y-5 group-hover:opacity-0">
          {en}
        </span>
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          {zh}
        </span>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <nav className="flex items-center justify-between p-1 border-b-2 border-white shadow-md mb-[1px]">
      <Link href="/" className="logo">
        <p className="text-3xl font-bold pl-16 py-2.5">NEXFIT</p>
      </Link>
      <div className="flex justify-center gap-1">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="relative ml-5 text-gray-700 group"
          >
            <HoverLink en={link.en} zh={link.zh} />
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#a9ba5c] transition-all duration-300 transform -translate-x-1/2 group-hover:w-[calc(100%-45px)]" />
          </Link>
        ))}
      </div>
      <div className="flex gap-8 pr-25">
        <Link href="/accountCenter/member/account">
          <Image
            src="/account.svg"
            alt="Account Icon"
            width={30}
            height={30}
            onClick={openLoginModal}
          />
        </Link>
        {isLoginModalOpen && (
          <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        )}

        <Link href="/cart">
          <Image src="/cart.svg" alt="Cart Icon" width={30} height={30} />
        </Link>
      </div>
    </nav>
  );
}
