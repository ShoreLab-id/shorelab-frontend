import { ButtonPrimary } from "@/templates/buttons";
import { poppins, oxygen } from "@/templates/font";
import SectionHeading from "@/templates/heading";
import Image from "next/image";
// import { Image } from "@nextui-org/react";

// https://blog.remoovit.com/2022/11/02/great-weekend-environmental-volunteer-events/
const AboutBait = () => {
  return (
    <main className="w-full py-20 flex flex-col items-center justify-center bg-[#F3F9FC]">
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%] max-w-[1300px]">
          <div className="flex justify-evenly gap-8 items-center">
            <div className="relative aspect-[4/5] w-[28rem] flex-shrink-0 rounded-xl overflow-hidden">
              <Image
                src="/static/home-about.webp"
                alt=""
                sizes="30vw"
                fill
                className="object-cover" />
            </div>
            <div className="flex flex-col max-w-[40rem]">
              <SectionHeading
                sub={"About Us"}
                title={"Innovate and Evolve"}
              ></SectionHeading>
              <p className={oxygen + "text-[#005377] text-pretty"}>
                ShoreLab is dedicated to preserving marine ecosystems through innovative projects and community involvement. We want to inspire and equip the next generation of marine conservationists.
              </p>
              <div className="pt-6">
                <ButtonPrimary>Learn More</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutBait;
