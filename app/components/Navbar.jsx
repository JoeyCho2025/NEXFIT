"use client";

import React from "react";
import Image from "next/image";
import css from "@/styles/navbar.css";
import Link from "next/link";

export default function Navbar1Page() {
  return (
    <nav className="nav">
      <p className="">NEXFIT</p>
      <div className="linkGroup ">
        <Link href="News" className="Link">
          NEWS
        </Link>
        <Link href="ABOUT" className="Link">
          ABOUT
        </Link>
        <Link href="FAQ" className="Link">
          FAQ
        </Link>
        <Link href="FUEL" className="Link">
          FUEL
        </Link>
        <Link href="CLASS" className="Link">
          CLASS
        </Link>
        <Link href="CONTACT" className="Link">
          CONTACT
        </Link>
        <Link href="Forum" className="Link">
          FORUM
        </Link>
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
