'use client'

import { oxygen } from '@/templates/font'

const TitleSection = () => {
  window.addEventListener('scroll', () => {
    const title = document.getElementById("title");
    const axY = window.scrollY;

    title.style.transform = "translateY(" + 0.75 * axY + "px)";
    title.style.scale = (100 - 0.05 * axY) / 100;
    title.style.opacity = (100 - 0.5 * axY) / 100;
    title.style.filter = "blur(" + 0.1 * axY + "px)";
  })
  return (
    <div
      data-aos="fade-up"
      id="title"
      className="flex gap-10 items-center justify-center">
      <div className="size-32 bg-slate-200 animate-pulse rounded-lg" />
      <h1 className={oxygen + "text-9xl font-bold text-white"}>ShoreLab</h1>
    </div>
  )
}

export default TitleSection