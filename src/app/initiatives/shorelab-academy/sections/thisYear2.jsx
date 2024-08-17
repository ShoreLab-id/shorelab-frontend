import Image from "next/image";
import { poppins } from "@/templates/font";

const ThisYear2Section = () => {
  return (
    <div className="w-full flex justify-center bg-primary-dark py-20 pt-0">
      <div className="w-[80%] max-w-[1300px] flex flex-col gap-10 items-center">
        <div className="flex justify-end w-full">
          <div className={poppins + "flex flex-col gap-4 w-max"}>
            <p className="text-7xl font-semibold text-teal-secondary">
              Kabupaten Berau
            </p>
            <p className="text-5xl text-white">East Kalimantan</p>
          </div>
        </div>
        <div className="relative aspect-[16/5] w-[80rem]">
          <Image
            src="/assets/berau-poly.png"
            fill
            sizes="80vw"
            className="object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ThisYear2Section;
