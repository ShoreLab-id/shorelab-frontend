import { poppins, oxygen } from "@/templates/font";
import { ButtonPrimary } from "@/templates/buttons";

const OtherInitiatives = () => {
  return (
    <main className="flex justify-center items-center py-20">
      <div className="flex flex-col items-center justify-center gap-8 w-[90%] max-w-[1300px]">
        <div className="container mx-auto flex flex-row items-center p-8 gap-[20px]">
          <div className="flex flex-col w-[550px] gap-6">
            <h1
              className={poppins + "text-[27px] text-[#00A8A8] font-semibold"}
            >
              OTHER INITIATIVES
            </h1>
            <h2
              className={
                poppins +
                "text-[48px] font-semibold text-[#005377] leading-snug"
              }
            >
              Leading the Waves of Oceanic Change
            </h2>
            <p className={oxygen + "text-[20px] text-[#005377]"}>
              Explore the diverse initiatives we undertake to protect and
              restore marine life
            </p>
            <ButtonPrimary>Explore</ButtonPrimary>
          </div>
          <div className="flex flex-row space-x-4 mt-0 w-[860px]">
            <div className="w-1/2 h-80 bg-gray-300 rounded-xl"></div>
            <div className="w-1/2 h-80 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OtherInitiatives;
