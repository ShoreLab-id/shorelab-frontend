'use client'

import { useEffect } from 'react'

const AboutWrapper = ({children}) => {
  useEffect(() => {
  window.addEventListener("scroll", (e) => {
    const aboutSection = document.getElementById("about");
    const title = document.getElementById("title");
    const axY = window.scrollY;
    if (aboutSection) {
      aboutSection.style.transform =
        "translateY(" + (-80 + 0.6 * -axY) + "px)"
    }
  });
  }, []);
  return(
    <div
      data-aos="fade-up"
      data-aos-offset="-500"
      id="about"
      className="bg-primary-dark w-[80%] max-w-[1300px] text-white z-[1] rounded-2xl drop-shadow-md shadow-xl -translate-y-20 p-20 flex flex-col gap-32 h-fit">
      {children}
    </div>
  )
}

export default AboutWrapper