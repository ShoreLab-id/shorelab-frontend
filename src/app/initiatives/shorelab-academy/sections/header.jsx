import { poppins, oxygen } from "@/templates/font";

const HeaderSection = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[75%] bg-primary-dark flex justify-center">
        <div className="w-[90%] max-w-[1300px] h-[65%] flex flex-col justify-end">
          <h1
            className={
              poppins + "text-[84px] font-semibold text-secondary-white"
            }
          >
            ShoreLab Academy
          </h1>
          <p
            className={
              oxygen +
              "text-[27px] font-semibold text-secondary-white max-w-[530px]"
            }
          >
            Leading Marine Conservation Through Tech Innovation
          </p>
        </div>
        <div className="relative w-[90%] max-w-[1080px] h-32 bg-white drop-shadow-md shadow-lg rounded-md -bottom-14"/>
      </div>
    </div>
  );
};

export default HeaderSection;
