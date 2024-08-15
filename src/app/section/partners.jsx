import { poppins, oxygen } from "@/templates/font";
import Link from "next/link";

const Partnership = () => {
  return (
    <main className="relative z-1 w-full">
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#F3F9FC" fillOpacity="1" d="M0,64L40,106.7C80,149,160,235,240,250.7C320,267,400,213,480,213.3C560,213,640,267,720,250.7C800,235,880,149,960,122.7C1040,96,1120,128,1200,138.7C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
      <div className="w-full pb-20 flex justify-center bg-[#F3F9FC]">
        <div className="w-[90%] max-w-[1300px] rounded-xl">
          <div className="flex flex-col justify-center items-center h-full w-full rounded-xl">
            <div about="section-heading" className="mb-12 flex flex-col items-center">
              <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary text-center"}>
                SUPPORTED BY
              </h2>
              <h1 className={poppins + "text-[48px] font-semibold text-primary-dark leading-tight text-center text-pretty"}>
                Our Partners
              </h1>
            </div>
            {/* <div className="flex flex-row gap-6 py-10 max-w-fit">
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
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Partnership;
