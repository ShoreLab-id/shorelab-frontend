'use client'

import { oxygen } from "@/templates/font";
import { ButtonPrimary } from "@/templates/buttons";
import SectionHeading from "@/templates/heading";
import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';


const OtherInitiatives = () => {
  return (
    <main className="relative flex justify-center py-20 z-0">
      <div className="w-[80%] max-w-[1300px] flex flex-row relative">
        <div className="relative flex w-4/5 z-[2]">
          <div className="px-10 py-16">
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
                interval: 2500,
                pauseOnHover: false
              }
            }
          >
            <SplideTrack >
              <SplideSlide>
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/static/home-shorelab_1.png" fill alt="" sizes="100vw" className="rounded-2xl object-cover" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/static/home-shorelab_2.png" fill alt="" sizes="100vw" className="rounded-2xl object-cover" />
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
