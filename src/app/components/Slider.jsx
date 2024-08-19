'use client'
import Image from 'next/image';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

const Slider = () => {
  return (
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
                <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden'>
                  <Image
                    src="/static/home-initiatives_1.webp" 
                    className="object-cover"
                    fill
                    sizes="40vw"
                    alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden'>
                  <Image
                    src="/static/home-initiatives_2.webp" 
                    className="object-cover"
                    fill
                    sizes="40vw"
                    alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden'>
                  <Image
                    src="/static/home-initiatives_3.webp" 
                    className="object-cover"
                    fill
                    sizes="40vw"
                    alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden'>
                  <Image
                    src="/static/home-initiatives_4.webp" 
                    className="object-cover"
                    fill
                    sizes="40vw"
                    alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden'>
                  <Image
                    src="/static/home-initiatives_5.webp" 
                    className="object-cover"
                    fill
                    sizes="40vw"
                    alt="" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden'>
                  <Image
                    src="/static/home-initiatives_6.webp" 
                    className="object-cover"
                    fill
                    sizes="40vw"
                    alt="" />
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
  )
}

export default Slider