
import { oxygen } from "@/templates/font";
import { ButtonPrimary } from "@/templates/buttons";
import SectionHeading from "@/templates/heading";
import Slider from "../components/Slider";


// https://i.pinimg.com/originals/76/1b/97/761b97f3f16f6b117d10616fa78a2d3d.jpg

const OtherInitiatives = () => {
  return (
    <main className="relative flex justify-center pt-20 z-0">
      <div className="w-[80%] max-w-[1300px] flex flex-row relative">
        <div className="relative flex w-4/5 z-[2]">
          <div className="px-10 flex flex-col justify-center">
            <SectionHeading title="Leading the Waves of Oceanic Change" sub="OTHER INITIATIVES" />
            <p className={oxygen + "text-[21px] text-primary-dark pb-6"}>
              Explore the diverse initiatives we undertake to protect and
              restore marine life
            </p>
            <ButtonPrimary>Explore</ButtonPrimary>
          </div>
          <div className="z-[-1] bg-white h-full w-64 absolute -right-24 blur-2xl scale-150 rotate-3"/>
        </div>
        <Slider />
      </div>
    </main>
  );
};

export default OtherInitiatives;
