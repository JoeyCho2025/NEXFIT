"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/navbar.css";

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 w-10 h-10">
        <Image src="/bg.png" alt="背景色" width={10} height={10} className="h-screen" />
      </div>
    </footer>
  );
}
