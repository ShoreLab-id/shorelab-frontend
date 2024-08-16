"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";

export function Providers({ children }) {

  useEffect(() => {
    Aos.init({
      disable: "mobile",
      duration: 700,
      easing: "ease-out-cubic",
    })
  })

  return <NextUIProvider>{children}</NextUIProvider>;
}
