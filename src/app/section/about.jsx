import { poppins, oxygen } from "@/templates/font";
import { Image, Button } from "@nextui-org/react";
import Link from "next/link";

const AboutBait = () => {
  return (
    <main className="w-full py-20 flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="max-w-[1300px] rounded-xl">
          <div className="flex flex-row justify-start h-full w-full rounded-xl">
            <div className="flex flex-col w-[720px] justify-center">
              <Image
                src="http://192.168.1.115:8080/api/static/img?fileName=surfer-blue-wave.webp"
                objectFit="cover"
                alt="Surfer on a Blue Wave"
                className="rounded-tl-xl rounded-bl-xl"
              />
            </div>
            <div className="flex flex-col gap-6 max-w-fit px-[27.5px] py-14 justify-center">
              <h1
                className={
                  poppins +
                  " text-[27px] max-w-[630px] font-semibold leading-snug text-[#00A8A8]"
                }
              >
                About Us
              </h1>
              <h2
                className={
                  poppins +
                  " font-semibold text-[48px] max-w-[633px] text-[#005377]"
                }
              >
                Innovate and Involve
              </h2>
              <p className={oxygen}>
                ShoreLab is dedicated to preserving marine ecosystems through
                innovative projects and community involvement. Our mission is to
                inspire and equip the next generation of marine
                conservationists.
              </p>
              <div className="pt-6">
                <Button
                  className={
                    poppins +
                    " focus:border-0 bg-[#ff6f61] font-light text-white text-lg rounded-md px-12 py-4 hover:bg-[#ffa49b] active:bg-[#D65448]"
                  }
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutBait;
