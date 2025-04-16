"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "/styles/custom.scss";

export default function Sidebar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <ul className="list-unstyled d-flex flex-column border border-light rounded-top mt-5 ">
            <li className="fs-4 text-center bg-dark text-white rounded-top py-3">
              會員中心
            </li>
            <li className="fs-5 px-3 py-4 border-bottom">帳戶基本資料</li>
            <li className="fs-5 px-3 py-4 border-bottom">身體基本資料</li>
            <li className="fs-5 px-3 py-4 border-bottom">
              第三方綁定與密碼
            </li>
            <li className="fs-5 px-3 py-4 border-bottom">課程進度</li>
            <li className="fs-5 px-3 py-4 border-bottom">成就</li>
            <li className="fs-5 px-3 py-4 border-bottom">
              預設收件地址、門市
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
