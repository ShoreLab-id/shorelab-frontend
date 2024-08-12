import { ButtonPrimary, ButtonSecondary } from "@/templates/buttons";
import { poppins } from "@/templates/font";
import SectionHeading from "@/templates/heading";
import { Image } from "@nextui-org/react";

const AcademyHook = () => {
  return (
    <main className="w-full py-20 flex flex-col items-center justify-center gap-8">
      <div className="w-[800px] text-center">
        <SectionHeading
          sub={"SHORELAB ACADEMY 2025"}
          title={"Leading Marine Conservation Through Tech Innovation"}
        ></SectionHeading>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 w-[90%] max-w-[1300px] max-h-[624px]">
        <div className="flex flex-row justify-center items-center gap-6 py-10">
          <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
          <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
          <div className="w-60 h-80 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="flex flex-row gap-6">
          <ButtonSecondary>Learn More</ButtonSecondary>
          <ButtonPrimary>Apply Now</ButtonPrimary>
        </div>
      </div>
    </main>
  );
};

export default AcademyHook;
