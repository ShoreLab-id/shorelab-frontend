"use client";

import React from "react";
import LoginForm from "./section/form";
import { Image } from "@nextui-org/react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-teal-secondary to-primary-dark ">
      <div className="flex justify-center items-center">
        <div className="flex w-2/5 min-h-screen items-center justify-center font-extrabold text-4xl bg-red-500">
          Allan, please add pictures
        </div>
        <div className="w-3/5 h-full flex items-center justify-center ">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
