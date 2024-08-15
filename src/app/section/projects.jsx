'use client'

import { oxygen } from "@/templates/font";
import { ButtonPrimary } from "@/templates/buttons";
import SectionHeading from "@/templates/heading";
import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

// https://i.pinimg.com/originals/76/1b/97/761b97f3f16f6b117d10616fa78a2d3d.jpg

const OtherInitiatives = () => {
  return (
    <main className="relative flex justify-center pt-20 z-0">
      <div className="w-[80%] max-w-[1300px] flex flex-row relative">
        <div className="relative flex w-4/5 z-[2]">
          <div className="px-10 flex flex-col justify-center">
            <SectionHeading title="Leading the Waves of Oceanic Change" sub="OTHER INITIATIVES" />
            <p className={oxygen + "text-[21px] text-primary-dark pb-6"}>
              Explore the diverse initiatives we undertake to protect and
              restore marine life
            </p>
            <ButtonPrimary>Explore</ButtonPrimary>
          </div>
          <div className="z-[-1] bg-white h-full w-64 absolute -right-24 blur-2xl scale-150 rotate-3"/>
        </div>
        <div className="relative w-full aspect-[4/3] z-[1]">
          <Splide hasTrack={false}
            options={
              {
                rewind: true,
                autoplay: true,
                gap:"2rem",
                resetProgress: false,
                rewindByDrag: true,
                interval: 5000,
                pauseOnHover: false,
                arrows: false
              }
            }
            tag="section"
          >
            <SplideTrack >
              <SplideSlide>
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/static/home-initiatives_1.jpg" fill alt="" sizes="50vw" className="rounded-2xl object-cover" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/static/home-initiatives_2.png" fill alt="" sizes="50vw" className="rounded-2xl object-cover" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/static/home-initiatives_3.png" fill alt="" sizes="50vw" className="rounded-2xl object-cover" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/static/home-initiatives_4.png" fill alt="" sizes="50vw" className="rounded-2xl object-cover" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/static/home-initiatives_5.jpg" fill alt="" sizes="50vw" className="rounded-2xl object-cover" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/static/home-initiatives_6.jpeg" fill alt="" sizes="50vw" className="rounded-2xl object-cover" />
                </div>
              </SplideSlide>
            </SplideTrack>
            <div className="splide__progress">
              <div className="splide__progress__bar" style={{
                background: "#00A8A8"
              }}/>
            </div>
          </Splide>
        </div>
      </div>
    </main>
  );
};

export default OtherInitiatives;
