import { poppins, oxygen } from "@/templates/font";
import Link from "next/link";

const Partnership = () => {
  return (
    <main className="w-full py-20 flex items-center justify-center">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[90%] max-w-[1300px] rounded-xl">
          <div className="flex flex-col justify-center items-center h-full w-full rounded-xl">
            <div className="flex flex-col gap-7 max-w-fit px-[496px] py-10">
              <h1
                className={
                  poppins +
                  "text-[27px] max-w-[630px] font-medium leading-snug text-[#00A8A8] text-center"
                }
              >
                SUPPORTED BY
              </h1>
              <h2
                className={
                  poppins +
                  "text-[48px] max-w-[633px] text-[#005377] text-center font-semibold"
                }
              >
                Our Partners
              </h2>
            </div>
            <div className="flex flex-row gap-6 py-10 max-w-fit">
              <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
              <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
              <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
              <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="flex flex-row gap-6 py-10 max-w-fit">
              <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
              <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
              <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
              <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Partnership;
