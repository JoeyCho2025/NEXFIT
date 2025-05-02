'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks, sections } from "/app/config/footerSection";

export default function Footer() {
  return (
<footer className="w-full bg-[#444444] flex flex-col justify-end">
  <div className="pt-20 pl-20">
    <div className="ml-10 bg-white rounded-tl-[60px] p-5">
      <div className="flex-row px-20">
        <div className="my-6 flex justify-between">
          <p className="text-5xl font-bold">NEXFIT</p>
          <div className="flex mb-10">
            {socialLinks.map((sL) => (
              <Link href={sL.href} key={sL.id} className="ml-7">
                <Image
                  src={sL.icon}
                  alt="Account Icon"
                  width={30}
                  height={30}
                  className={sL.isLast ? "mr-7" : ""}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          {sections.map((section) => (
            <div key={section.id} className="flex flex-col pr-10">
              <div className="mb-6">
                <p className="text-4xl font-semibold">{section.title}</p>
                <p className="text-sm font-bold">{section.links[0].text}</p>
              </div>
              {section.links.slice(1).map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-sm my-2 font-bold"
                  id={link.id}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}
