"use client";

import React from "react";
import LoginForm from "./section/form";
import { Image } from "@nextui-org/react";

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="flex">
        <div className="w-full h-full">
          <Image
            src="/static/Juan.jpg"
            alt="Juan"
            className="object-cover
            bg-red-500/25"
          ></Image>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center bg-red-500/25">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
