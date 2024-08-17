"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";

export function Providers({ children }) {

  useEffect(() => {
    Aos.init({
      disable: "mobile",
    })
  })

  return <NextUIProvider>{children}</NextUIProvider>;
}
