"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export default function SignupPage(props) {
  return (
    <>
      <div className="  h-150 w-200  flex  justify-start items-center flex-col">
        <h1 className="text-3xl text-white mb-10 ">登入</h1>
        <div className="bg-[#ffffff19] w-104 h-100 rounded-lg flex justify-center pt-6">
          <form className="w-full px-15 pt-5">
            <div>
              <div className="my-1 text-white">Email</div>
              <Input className="w-full h-10" placeholder="請輸入Email" />
              <Button variant="outline" className="w-full h-10 mt-5">
                登入
              </Button>
              <div className="flex mt-5 justify-center text-white text-2xl">
                or
              </div>
              <div class="flex justify-between">
                <Button variant="outline" className="w-30 h-10 mt-5">
                  <Image
                    src="/Facebook.svg"
                    alt="Cart Icon"
                    width={20}
                    height={20}
                  />
                </Button>
                <Button variant="outline" className="w-30 h-10 mt-5">
                  <Image
                    src="/Google.svg"
                    alt="Cart Icon"
                    width={20}
                    height={20}
                  />
                </Button>
              </div>
              <div class="flex justify-between">
                <Button variant="outline" className="w-30 h-10 mt-5">
                  <Image
                    src="/Line.svg"
                    alt="Cart Icon"
                    width={30}
                    height={30}
                  />
                </Button>
                <Button variant="outline" className="w-30 h-10 mt-5">
                  <Image
                    src="/Apple.svg"
                    alt="Cart Icon"
                    width={30}
                    height={30}
                  />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
