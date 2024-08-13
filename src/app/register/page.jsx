"use client";

import React from "react";
import Form from "./section/form";

const RegisterPage = () => {
  return (
    <div className="h-screen w-full bg-cover bg-[url('/static/home-hero.jpg')]">
      <div className="flex flex-col justify-center items-center h-full w-full bg-black/65 py-12 px-4 sm:px-6 lg:px-8">
        <Form />
      </div>
    </div>
  );
};

export default RegisterPage;
