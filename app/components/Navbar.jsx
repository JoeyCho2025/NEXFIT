"use client";

import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "/styles/custom.scss";

export default function Navbar1Page() {
  return (
    <nav className="border-bottom border-light d-flex align-items-center justify-content-between shadow-sm px-4 py-3 mb-1">
      <p className="fw-bolder fs-3 mb-0">NEXFIT</p>
      <div className="d-flex justify-content-center gap-4 ">
        <a href="News" className="text-decoration-none nav-link">
          NEWS
        </a>
        <a href="News" className="text-decoration-none nav-link">
          ABOUT
        </a>
        <a href="News" className="text-decoration-none nav-link">
          FAQ
        </a>
        <a href="News" className="text-decoration-none nav-link">
          FUEL
        </a>
        <a href="News" className="text-decoration-none nav-link">
          CLASS
        </a>
        <a href="News" className="text-decoration-none nav-link">
          CONTACT
        </a>
      </div>

      <div className="d-flex gap-3">
        <Image src="/account.svg" alt="Account Icon" width={30} height={30} />
        <Image src="/cart.svg" alt="Cart Icon" width={30} height={30} />
      </div>
    </nav>
  );
}
