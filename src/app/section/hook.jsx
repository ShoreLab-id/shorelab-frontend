import { poppins, oxygen } from "@/templates/font";
import SectionHeading from "@/templates/heading";

const UserHook = () => {
  return (
    <main className="bg-teal-secondary w-full flex justify-center py-20">
      <div className="w-[80%] max-w-[1300px] rounded-xl flex flex-col items-center justify-center">
        <h1 className={oxygen + "text-[36px] text-white text-center text-pretty"}>Impact waves across <b>marine conservation and innovation</b> in numbers</h1>
        <div className={oxygen + "grid grid-cols-4 pt-8 gap-16"}>
          <div className="text-center text-white max-w-56 flex flex-col gap-4">
            <p className="text-[48px] leading-none"><b>23</b></p>
            <p className="text-[21px] leading-snug">projects have concluded</p>
          </div>
          <div className="text-center text-white max-w-56 flex flex-col gap-4">
            <p className="text-[48px] leading-none"><b>290+</b></p>
            <p className="text-[21px] leading-snug">people have participated</p>
          </div>
          <div className="text-center text-white max-w-56 flex flex-col gap-4">
            <p className="text-[48px] leading-none"><b>43.22+ Ha</b></p>
            <p className="text-[21px] leading-snug">of coral have been planted</p>
          </div>
          <div className="text-center text-white max-w-56 flex flex-col gap-4">
            <p className="text-[48px] leading-none"><b>100.2+ Kg</b></p>
            <p className="text-[21px] leading-snug">of plastic have been picked up</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserHook;
