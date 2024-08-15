import { ButtonPrimary } from "@/templates/buttons";
import { poppins, oxygen } from "@/templates/font";
import Link from "next/link";


const HeroSection = () => {
  return (
    <div className="h-screen w-full bg-cover bg-[url('/static/home-hero.jpg')]">
          {/* <a href="https://www.freepik.com/free-photo/aerial-shot-cliffs-covered-greenery-surrounded-by-sea-sunlight_29506031.htm#fromView=search&page=1&position=26&uuid=4d38bd97-a950-4d95-9791-315dd275e73a">Image by wirestock on Freepik</a> */}
          <div className="flex flex-col justify-end items-center h-full w-full bg-[#03202C]/65">
            <div className="w-[80%] max-w-[1300px] flex flex-col gap-7 h-3/4 justify-center">
              <h1
                className={
                  poppins +
                  "text-[48px] max-w-[630px] font-medium leading-snug text-white"
                }
              >
                Creating Ripples Across the Tides
              </h1>
              <h2 className={oxygen + "text-[27px] max-w-[633px] text-white"}>
                Merges technology and marine science to create innovative
                solutions for ocean conservation.
              </h2>
              <div>
                <Link href="#shorelab-academy">
                  <ButtonPrimary size="lg">Join ShoreLab Academy</ButtonPrimary>
                </Link>
              </div>
            </div>
          </div>
        </div>
  );
};

export default HeroSection;
