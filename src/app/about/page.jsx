"use client";

import SectionHeading from "@/templates/heading";
import Image from "next/image";
import { poppins, oxygen } from "@/templates/font";

const AboutPage = () => {
  window.addEventListener("scroll", (e) => {
    let aboutSection = document.getElementById("about")
    const title = document.getElementById("title");
    const contents = document.querySelectorAll(".__about-content__")
    const axY = window.scrollY
    // console.log(axY > section5.getBoundingClientRect().top)
    // console.log(section5.getBoundingClientRect().top - section5.getBoundingClientRect().bottom)
    aboutSection.style.transform = 'translateY(' + (-80 + (0.6 * -axY)) + 'px)';
    title.style.transform = 'translateY(' + (0.75 * axY) + 'px)';
    title.style.scale = (100 - (0.05 * axY))/100;
    title.style.opacity = (100 - (0.5 * axY))/100;
    title.style.filter = 'blur('+ 0.1 * axY + 'px)'
    contents.forEach((content) => {
      if (axY > content.getBoundingClientRect().bottom) {
        const _disp = axY - content.getBoundingClientRect().bottom
        console.log(axY, window.innerHeight - content.getBoundingClientRect().bottom)
        if (0.05 * _disp < 100) {
          content.style.transform = 'translateY(' + (-0.05 * _disp) + 'px)';
        }
      }
    })
  })

  return (
    <div>
      <section
        className="relative w-full h-screen bg-cover bg-center bg-[url('/static/home-hero.jpg')] z-0">
        <div className="w-full h-full bg-[#03202C]/65 flex justify-center">
          <div className="w-[80%] max-w-[1300px] flex flex-col justify-center items-center gap-20">
            <div id="title" className="flex gap-10 items-center justify-center">
              <div className="size-32 bg-slate-200 animate-pulse rounded-lg" />
              <h1 className={oxygen + "text-9xl font-bold text-white"}>ShoreLab</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex justify-center w-full bg-red-500/25 h-fit max-h-[1600px]">
        <div
          id="about"
          className="bg-primary-dark w-[80%] max-w-[1300px] text-white z-[1] rounded-2xl drop-shadow-md shadow-xl -translate-y-20 p-20 flex flex-col gap-32 h-fit"
        >
          <div className="flex flex-row gap-10">
            <div className="relative w-3/5 aspect-[5/4] rounded-2xl shadow-xl drop-shadow-md">
              <Image src="/static/about_1.jpg" alt="" fill className="object-cover rounded-2xl" sizes="50vw" />
            </div>
            <div className="w-2/5 __about-content__">
              <div about="section-heading" className="mb-12">
                <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary"}>THE AWAKENING</h2>
                <h1 className={poppins + "text-[48px] font-semibold text-white leading-tight"}>A Passion for the Ocean</h1>
              </div>
              <p className="text-pretty" >Our journey started with a love for the ocean, where we found peace and inspiration. But as we explored further, we began to see the signs of a struggling marine ecosystem—bleached corals, polluted waters, and declining marine life.</p>
            </div>
          </div>

          <div className="flex flex-row-reverse gap-10">
            <div className="relative w-2/5 aspect-[4/5] rounded-2xl shadow-xl drop-shadow-md">
              <Image src="/static/about_2.png" alt="" fill className="object-cover rounded-2xl" sizes="50vw" />
              {/* https://www.ipb.ac.id/wp-content/uploads/2024/07/Sea-Farming-IPB-University-Bersama-Dinas-Ketahanan-Pangan-Kelautan-dan-Pertanian-DKI-Jakarta-Mengawal-Pembangunan-Budaya-Maritim.png */}
            </div>
            <div className="w-2/5 __about-content__">
              <div about="section-heading" className="mb-12">
                <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary"}>THE REALIZATION</h2>
                <h1 className={poppins + "text-[48px] font-semibold text-white leading-tight"}>A Call to Action</h1>
              </div>
              <p className="text-pretty" >Seeing the ocean&apos;s distress sparked a deep concern within us. We realized that our passion for marine life came with a responsibility to protect it. This realization became the driving force behind our mission.</p>
            </div>
          </div>

          <div className="flex flex-row gap-10">
            <div className="relative w-2/5 aspect-square rounded-2xl shadow-xl drop-shadow-md">
              <Image src="/static/about_3.png" alt="" fill className="object-cover rounded-2xl" sizes="50vw" />
            </div>
            <div className="w-2/5 __about-content__">
              <div about="section-heading" className="mb-12">
                <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary"}>THE VISION</h2>
                <h1 className={poppins + "text-[48px] font-semibold text-white leading-tight"}>Founding ShoreLab</h1>
              </div>
              <p className="text-pretty" >ShoreLab was established with a clear purpose: to create a platform where knowledge meets action. We aimed to equip students with the tools and experiences needed to address the pressing challenges facing our oceans.</p>
            </div>
          </div>

          <div className="flex flex-row-reverse gap-10">
            <div className="relative w-3/5 aspect-[5/4] rounded-2xl shadow-xl drop-shadow-md">
              <Image src="/static/about_4.png" alt="" fill className="object-cover rounded-2xl" sizes="50vw" />
            </div>
            <div className="w-2/5 __about-content__">
              <div about="section-heading" className="mb-12">
                <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary"}>THE JOURNEY</h2>
                <h1 className={poppins + "text-[48px] font-semibold text-white leading-tight"}>Growing Together</h1>
              </div>
              <p className="text-pretty" >What began as a modest effort quickly grew into a collaborative movement. Through ShoreLab Academy, students from around the world now come together to learn, innovate, and make a lasting impact on marine conservation.</p>
            </div>
          </div>

        <div className="flex flex-row gap-10">
          {/* https://i.pinimg.com/originals/51/35/99/513599a7b70bbcc1ddb68765e534cd1e.jpg */}
          <div className="relative w-2/5 aspect-[5/4] rounded-2xl shadow-xl drop-shadow-md">
              <Image src="/static/about_5.jpg" alt="" fill className="object-cover rounded-2xl" sizes="50vw" />
            </div>
          <div id="section5" className="w-3/5 __about-content__ bg-red-500/25">
            <div about="section-heading" className="mb-12">
              <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary"}>THE IMPACT</h2>
              <h1 className={poppins + "text-[48px] font-semibold text-white leading-tight"}>Creating Waves of Change</h1>
            </div>
            <p className="text-pretty" >Today, ShoreLab is a beacon of hope for the ocean. Our projects have restored habitats, protected marine life, and inspired thousands to join the cause. Every action we take creates ripples, leading to a healthier and more sustainable ocean.</p>
          </div>
        </div>
        </div>
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
