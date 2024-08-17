"use client";

import React from "react";
import LoginForm from "./section/form";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Image } from "@nextui-org/react";
import "@splidejs/react-splide/css";
import SectionHeading from "@/templates/heading";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen max-h-screen items-center justify-center bg-gradient-to-l from-teal-secondary to-primary-dark ">
      <div className="w-2/5 h-screen flex justify-center items-center bg-primary-dark/65">
        <Image
          src="assets/topography.webp"
          alt="Background"
          className="object-cover w-full h-screen"
        ></Image>
      </div>
      <div className="w-3/5 h-full max-h-screen flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
