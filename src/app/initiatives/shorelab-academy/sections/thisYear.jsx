import { poppins, oxygen } from "@/templates/font";

const ThisYearSection = () => {
  return (
    <div className="w-full flex justify-center py-20 pt-40 bg-primary-dark">
      <div className="w-[90%] max-w-[1300px] h-full">
        <div className="flex gap-[130px] items-center">
          <div>
            <div about="section-heading" className="mb-12">
              <h2
                className={
                  poppins +
                  "text-[27px] font-semibold capitalize text-teal-secondary"
                }
              >
                SAILING THIS YEAR
              </h2>
              <h1
                className={
                  poppins + "text-[48px] font-semibold text-white leading-tight"
                }
              >
                Where the Waves Call
              </h1>
            </div>
            <p className={oxygen + "text-white text-justify mb-4 text-xl"}>
              Embark on an exciting sea exploration with ShoreLab Academy as we
              venture into the pristine waters of Kabupaten Berau, East
              Kalimantan. Our latest initiative focuses on Sea Turtle and
              Jellyfish Conservation, aiming to develop innovative,
              technology-based solutions to address the challenges these
              majestic creatures face. From advanced tracking systems for sea
              turtles to sustainable methods for managing jellyfish populations,
              join us in harnessing the power of technology to protect and
              preserve this unique marine ecosystem.
            </p>
          </div>
          <div className="w-[640px] h-[464px] bg-slate-200 animate-pulse rounded-xl flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default ThisYearSection;
