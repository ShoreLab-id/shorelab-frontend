import { ButtonPrimary } from "@/templates/buttons";
import { poppins, oxygen } from "@/templates/font";
import Link from "next/link";

const HeroSection = () => {
  return (
    <main className="py-20 flex items-center justify-center ">
      <div className="w-full flex items-center justify-center">
        <div className="h-4/5 max-h-[624px] w-[90%] max-w-[1300px] rounded-xl bg-cover bg-[url('https://shorelab-backend.vercel.app/api/static/img?fileName=janis-karkossa.webp')]">
          <div className="flex flex-col justify-end h-full w-full rounded-xl bg-[#03202C]/65">
            <div className="flex flex-col gap-7 max-w-fit px-[110px] py-14">
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
              <div className="">
                <ButtonPrimary size={"lg"}>Join ShoreLab Academy</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
