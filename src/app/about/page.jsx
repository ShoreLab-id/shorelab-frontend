"use client";

import Image from "next/image";
import { poppins, oxygen } from "@/templates/font";
import { useEffect } from "react";
import SectionHeading from "@/templates/heading";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const AboutPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const aboutSection = document.getElementById("about");
      const title = document.getElementById("title");
      const axY = window.scrollY;
      if (aboutSection) {
        aboutSection.style.transform =
          "translateY(" + (-80 + 0.6 * -axY) + "px)";
        title.style.transform = "translateY(" + 0.75 * axY + "px)";
        title.style.scale = (100 - 0.05 * axY) / 100;
        title.style.opacity = (100 - 0.5 * axY) / 100;
        title.style.filter = "blur(" + 0.1 * axY + "px)";
      }
    });
  }, []);

  return (
    <div>
      <section className="relative w-full h-screen bg-cover bg-center bg-[url('/static/home-hero.jpg')] z-0">
        <div className="w-full h-full bg-[#03202C]/65 flex justify-center">
          <div className="w-[80%] max-w-[1300px] flex flex-col justify-center items-center gap-20">
            <div
              data-aos="fade-up"
              id="title"
              className="flex gap-10 items-center justify-center"
            >
              <div className="size-32 bg-slate-200 animate-pulse rounded-lg" />
              <h1 className={oxygen + "text-9xl font-bold text-white"}>
                ShoreLab
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-min bg-[#03202C] bg-[url('/assets/topography.webp')]">
        <div className="relative flex justify-center w-full h-fit max-h-[1600px]">
          <div
            data-aos="fade-up"
            data-aos-offset="-500"
            id="about"
            className="bg-primary-dark w-[80%] max-w-[1300px] text-white z-[1] rounded-2xl drop-shadow-md shadow-xl -translate-y-20 p-20 flex flex-col gap-32 h-fit"
          >
            <div className="flex flex-row gap-10">
              <div
                data-aos="fade-up-right"
                className="relative w-3/5 aspect-[5/4] rounded-2xl shadow-xl drop-shadow-md"
              >
                <Image
                  src="/static/about_1.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                  sizes="50vw"
                />
              </div>
              <div className="w-2/5">
                <div about="section-heading" className="mb-12">
                  <h2
                    className={
                      poppins +
                      "text-[27px] font-semibold capitalize text-teal-secondary"
                    }
                  >
                    THE AWAKENING
                  </h2>
                  <h1
                    className={
                      poppins +
                      "text-[48px] font-semibold text-white leading-tight"
                    }
                  >
                    A Passion for the Ocean
                  </h1>
                </div>
                <p className="text-pretty">
                  Our journey started with a love for the ocean, where we found
                  peace and inspiration. But as we explored further, we began to
                  see the signs of a struggling marine ecosystem—bleached
                  corals, polluted waters, and declining marine life.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse gap-10">
              <div
                data-aos="fade-up-left"
                data-aos-offset="-200"
                className="relative w-2/5 aspect-[4/5] rounded-2xl shadow-xl drop-shadow-md"
              >
                <Image
                  src="/static/about_2.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                  sizes="50vw"
                />
                {/* https://www.ipb.ac.id/wp-content/uploads/2024/07/Sea-Farming-IPB-University-Bersama-Dinas-Ketahanan-Pangan-Kelautan-dan-Pertanian-DKI-Jakarta-Mengawal-Pembangunan-Budaya-Maritim.png */}
              </div>
              <div className="w-2/5">
                <div about="section-heading" className="mb-12">
                  <h2
                    className={
                      poppins +
                      "text-[27px] font-semibold capitalize text-teal-secondary"
                    }
                  >
                    THE REALIZATION
                  </h2>
                  <h1
                    className={
                      poppins +
                      "text-[48px] font-semibold text-white leading-tight"
                    }
                  >
                    A Call to Action
                  </h1>
                </div>
                <p className="text-pretty">
                  Seeing the ocean&apos;s distress sparked a deep concern within
                  us. We realized that our passion for marine life came with a
                  responsibility to protect it. This realization became the
                  driving force behind our mission.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-10">
              <div
                data-aos="fade-up-right"
                data-aos-offset="-400"
                className="relative w-2/5 aspect-square rounded-2xl shadow-xl drop-shadow-md"
              >
                <Image
                  src="/static/about_3.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                  sizes="50vw"
                />
              </div>
              <div className="w-2/5">
                <div about="section-heading" className="mb-12">
                  <h2
                    className={
                      poppins +
                      "text-[27px] font-semibold capitalize text-teal-secondary"
                    }
                  >
                    THE VISION
                  </h2>
                  <h1
                    className={
                      poppins +
                      "text-[48px] font-semibold text-white leading-tight"
                    }
                  >
                    Founding ShoreLab
                  </h1>
                </div>
                <p className="text-pretty">
                  ShoreLab was established with a clear purpose: to create a
                  platform where knowledge meets action. We aimed to equip
                  students with the tools and experiences needed to address the
                  pressing challenges facing our oceans.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse gap-10">
              <div
                data-aos="fade-up-left"
                data-aos-offset="-600"
                className="relative w-3/5 aspect-[5/4] rounded-2xl shadow-xl drop-shadow-md"
              >
                <Image
                  src="/static/about_4.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                  sizes="50vw"
                />
              </div>
              <div className="w-2/5">
                <div about="section-heading" className="mb-12">
                  <h2
                    className={
                      poppins +
                      "text-[27px] font-semibold capitalize text-teal-secondary"
                    }
                  >
                    THE JOURNEY
                  </h2>
                  <h1
                    className={
                      poppins +
                      "text-[48px] font-semibold text-white leading-tight"
                    }
                  >
                    Growing Together
                  </h1>
                </div>
                <p className="text-pretty">
                  What began as a modest effort quickly grew into a
                  collaborative movement. Through ShoreLab Academy, students
                  from around the world now come together to learn, innovate,
                  and make a lasting impact on marine conservation.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-10">
              {/* https://i.pinimg.com/originals/51/35/99/513599a7b70bbcc1ddb68765e534cd1e.jpg */}
              <div
                data-aos="fade-up-right"
                data-aos-offset="-800"
                className="relative w-2/5 aspect-[5/4] rounded-2xl shadow-xl drop-shadow-md"
              >
                <Image
                  src="/static/about_5.jpg"
                  alt=""
                  fill
                  className="object-cover rounded-2xl"
                  sizes="50vw"
                />
              </div>
              <div id="section5" className="w-3/5">
                <div about="section-heading" className="mb-12">
                  <h2
                    className={
                      poppins +
                      "text-[27px] font-semibold capitalize text-teal-secondary"
                    }
                  >
                    THE IMPACT
                  </h2>
                  <h1
                    className={
                      poppins +
                      "text-[48px] font-semibold text-white leading-tight"
                    }
                  >
                    Creating Waves of Change
                  </h1>
                </div>
                <p className="text-pretty">
                  Today, ShoreLab is a beacon of hope for the ocean. Our
                  projects have restored habitats, protected marine life, and
                  inspired thousands to join the cause. Every action we take
                  creates ripples, leading to a healthier and more sustainable
                  ocean.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-bottom-1 relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F3F9FC"
              fillOpacity="1"
              d="M0,96L26.7,128C53.3,160,107,224,160,224C213.3,224,267,160,320,144C373.3,128,427,160,480,165.3C533.3,171,587,149,640,128C693.3,107,747,85,800,101.3C853.3,117,907,171,960,202.7C1013.3,235,1067,245,1120,234.7C1173.3,224,1227,192,1280,192C1333.3,192,1387,224,1413,240L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="relative w-full py-20">
        <div
          data-aos="fade-up"
          className="relative z-10 max-w-[1300px] mx-auto px-6 text-center"
        >
          <SectionHeading
            sub={"THE PEOPLE BEHIND THE SCENES"}
            title={"Team Members"}
          ></SectionHeading>
        </div>
        <div className="flex flex-row justify-around relative z-10 max-w-[1300px] mx-auto px-6">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/static/Nokotan.png"
                alt="First Member"
                className="object-cover rounded-md"
                fill
              />
            </div>
            <div className="w-full text-center font-bold">
              Shikanoko Nokonoko
            </div>
            <div className="w-full text-center text-sm text-gray-500">
              Deer God
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/static/Gung.jpg"
                alt="Second Member"
                className="object-cover rounded-md"
                fill
              />
            </div>
            <div className="w-full text-center font-bold">Agung Hapsah lol</div>
            <div className="w-full text-center text-sm text-gray-500">
              Reyna only
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/static/Juan.jpg"
                alt="Third Member"
                className="object-cover rounded-md"
                fill
              />
            </div>
            <div className="w-full text-center font-bold">
              His name is Juan. He&apos;s a Homse.
            </div>
            <div className="w-full text-center text-sm text-gray-500">
              A homse. You know. Neighs..
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-10 gap-6">
        <div className="text-center">
          <SectionHeading
            sub={"SUPPORTED BY"}
            title={"Our Partners"}
          ></SectionHeading>
        </div>
        <div className="w-[1300px] justify-center">
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              perMove: 1,
              focus: "center",
              autoWidth: true,
              gap: "2rem",
              pagination: false,
              autoplay: true,
              interval: 5000,
              speed: 5000,
              pauseOnHover: false,
              pauseOnFocus: false,
              omitEnd: true,
              drag: false,
              arrows: false,
              easing: "linear",
            }}
          >
            <SplideTrack>
              <SplideSlide>
                <div className="w-[310px] h-[288px] bg-red-300"></div>
              </SplideSlide>
              <SplideSlide>
                <div className="w-[310px] h-[288px] bg-green-400"></div>
              </SplideSlide>
              <SplideSlide>
                <div className="w-[310px] h-[288px] bg-blue-500"></div>
              </SplideSlide>
              <SplideSlide>
                <div className="w-[310px] h-[288px] bg-red-600"></div>
              </SplideSlide>
              <SplideSlide>
                <div className="w-[310px] h-[288px] bg-green-700"></div>
              </SplideSlide>
              <SplideSlide>
                <div className="w-[310px] h-[288px] bg-blue-800"></div>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
