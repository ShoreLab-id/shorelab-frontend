import { poppins } from "@/templates/font";
import { Image, Button } from "@nextui-org/react";

const AcademyHook = () => {
  return (
    <main className="w-full py-20 flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-8 w-[90%] max-w-[1300px] max-h-[624px]">
        <h1 className={poppins + "text-[#00A8A8] text-lg font-semibold"}>
          SHORELAB ACADEMY 2025
        </h1>
        <h2
          className={
            poppins +
            "text-[#005377] text-3xl md:text-4xl font-semibold text-center leading-snug"
          }
        >
          Leading Marine Conservation <br /> Through Tech Innovation
        </h2>
        <div className="flex flex-row justify-center items-center gap-6 py-10">
          <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
          <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
          <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex flex-row gap-6">
          <Button
            auto
            className={
              poppins +
              "border-2 border-[#00A8A8] text-[#00A8A8] hover:bg-[#00A8A8] hover:text-white active:bg-[#0F7878] active:text-white bg-transparent font-light text-lg rounded-md px-6 py-2"
            }
          >
            Learn More
          </Button>
          <Button
            auto
            className={
              poppins +
              "bg-[#ff6f61] hover:bg-[#ffa49b] active:bg-[#D65448] text-white font-light text-lg rounded-md px-6 py-2"
            }
          >
            Apply Now
          </Button>
        </div>
      </div>
    </main>
  );
};

export default AcademyHook;
