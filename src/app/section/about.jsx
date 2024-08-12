import { ButtonPrimary } from "@/templates/buttons";
import { poppins, oxygen } from "@/templates/font";
import SectionHeading from "@/templates/heading";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const AboutBait = () => {
  return (
    <main className="w-full py-20 flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <div className="max-w-[1300px] rounded-xl">
          <div className="flex justify-start h-full w-full rounded-xl gap-[244px] bg-red-500/25">
            <div className="flex flex-col w-[526px] justify-center bg-red-500/25">
              <Image
                src="static/Surfer.jpg"
                objectFit="cover"
                alt="Surfer on a Blue Wave"
                className="rounded-tl-xl rounded-bl-xl"
              />
            </div>
            <div className="flex flex-col bg-blue-500/25">
              <SectionHeading
                sub={"About Us"}
                title={"Innovate and Evolve"}
              ></SectionHeading>
              <p
                className={
                  oxygen + "text-[#005377] w-[530px] bg-red-500/25 text-justify"
                }
              >
                ShoreLab is dedicated to preserving marine ecosystems through
                innovative projects and community involvement. We want to
                inspire and equip the next generation of marine
                conservationists.
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
