"use client";

import { Image } from "next/image";
import { useEffect } from "react";

const ScrollEffectPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const blueBox = document.getElementById("blue-box");

      if (scrollPosition > 100) {
        blueBox.style.opacity = "1";
      } else {
        blueBox.style.opacity = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/static/BG.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">ShoreLabs</h1>
          <p className="text-xl mt-4">Creating Ripples Across the Tides</p>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <div className="animate-bounce">
            <Image
              src="/static/Scroll.png"
              alt="Scroll Down"
              className="h-12 w-12"
            />
          </div>
        </div>
      </section>

      <div
        id="blue-box"
        className="absolute top-0 left-0 w-full bg-blue-700 opacity-0 transition-opacity duration-500 z-0"
      >
        <section
          id="about-section"
          className="relative w-full py-20 text-white"
        >
          <div className="relative z-10 max-w-[1300px] mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-20">
              <div className="w-full md:w-1/2 lg:w-[720px] mb-6 md:mb-0">
                <img
                  src="https://via.placeholder.com/720x400"
                  alt="Placeholder"
                  className="w-full h-auto rounded-tl-xl rounded-bl-xl"
                />
              </div>
              <div className="flex flex-col gap-6 p-6 md:p-12 lg:p-14 justify-center">
                <h1 className="text-[27px] font-semibold leading-snug text-[#00A8A8]">
                  About Us
                </h1>
                <h2 className="font-semibold text-[48px]">Who are we?</h2>
                <p className="text-lg max-w-[630px]">
                  We are a team of three dedicated members from different
                  universities, united by a single mission: to conserve the
                  vibrant coral reefs of Indonesia. Our shared passion for
                  marine preservation drives us to collaborate and innovate,
                  ensuring a sustainable future for our beloved country's
                  underwater ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects-section"
          className="relative w-full py-20 text-white"
        >
          <div className="relative z-10 max-w-[1300px] mx-auto px-6">
            <h2 className="text-[24px] text-[#00A8A8] font-semibold">
              Projects
            </h2>
            <h3 className="text-[36px] font-semibold mb-8">
              What have we done?
            </h3>
            <div className="flex justify-center items-center gap-6">
              <div className="w-[200px] h-[300px] bg-gray-300 rounded-lg"></div>
              <div className="w-[300px] h-[400px] bg-gray-300 rounded-lg"></div>
              <div className="w-[200px] h-[300px] bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </section>
      </div>

      <section className="relative w-full py-20 bg-white text-black">
        <div className="relative z-10 max-w-[1300px] mx-auto px-6">
          <h2 className="text-[24px] font-semibold">Continued Content</h2>
          <p className="text-lg max-w-[630px]">
            This section continues with the white background after the blue box
            ends.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ScrollEffectPage;
