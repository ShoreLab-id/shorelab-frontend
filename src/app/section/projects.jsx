import { Button } from "@nextui-org/react";
import { poppins, oxygen } from "@/templates/font";

const OtherInitiatives = () => {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto flex flex-row items-center p-8 gap-[20px]">
        <div className="flex flex-col w-[550px]">
          <h1 className={poppins + "text-[27px] text-[#00A8A8] font-semibold"}>
            OTHER INITIATIVES
          </h1>
          <h2
            className={
              poppins + "text-[48px] font-semibold text-[#005377] leading-snug"
            }
          >
            Leading the Waves of Oceanic Change
          </h2>
          <p className={oxygen + "text-[20px] text-[#005377]"}>
            Explore the diverse initiatives we undertake to protect and restore
            marine life
          </p>
          <Button
            className={
              oxygen +
              "bg-[#ff6f61] text-white rounded-md py-2 px-4 mt-4 w-[200px] h-[56px]"
            }
          >
            Explore
          </Button>
        </div>
        <div className="flex flex-row space-x-4 mt-0 w-[860px]">
          <div className="w-1/2 h-80 bg-gray-300 rounded-xl"></div>
          <div className="w-1/2 h-80 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </main>
  );
};

export default OtherInitiatives;
