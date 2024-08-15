"use client";

import Image  from "next/image";
import { IoMdArrowDown } from "react-icons/io";
import { useEffect } from "react";

const AboutPage = () => {
  window.addEventListener("scroll", (e) => {
    const aboutSection = document.getElementById("about")
    const title = document.getElementById("title");
    const axY = window.scrollY
    aboutSection.style.transform = 'translateY(' + (-192 + (0.6 * -axY)) + 'px)';
    title.style.transform = 'translateY(' + (0.75 * axY) + 'px)';
    title.style.scale = (100 - (0.05 * axY))/100;
    title.style.opacity = (100 - (0.5 * axY))/100;
  })

  return (
    <div>
      <section
        className="relative w-full h-screen bg-cover bg-center bg-[url('/static/home-hero.jpg')] z-0">
        <div className="w-full h-full bg-[#03202C]/65 flex justify-center">
          <div className="w-[80%] max-w-[1300px] flex flex-col justify-center items-center gap-20">
            <div id="title" className="flex gap-10 items-center justify-center">
              <div className="size-32 bg-slate-200 animate-pulse rounded-lg" />
              <h1 className="text-7xl font-bold text-white">ShoreLab</h1>
            </div>
            {/* <IoMdArrowDown className="size-16 bg-primary-white/20 text-white p-2 rounded-full animate-bounce" /> */}
          </div>
        </div>
      </section>

      <section className="relative flex justify-center w-full">
        <div
          id="about"
          className="bg-primary-dark w-[80%] max-w-[1300px] py-20 text-white z-[1] rounded-2xl drop-shadow-md shadow-xl -translate-y-48"
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
                  ensuring a sustainable future for our beloved country&apos;s
                  underwater ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <section
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
        </section> */}
      </section>

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
  )
};

export default AboutPage;
