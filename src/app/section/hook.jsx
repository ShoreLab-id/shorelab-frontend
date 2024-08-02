import { poppins, oxygen } from "@/templates/font";

const UserHook = () => {
  return (
    <main className="bg-cover bg-[url('/static/Sec.png')] w-full flex items-center justify-center py-20">
      <div className="w-[90%] max-w-[1300px] rounded-xl flex items-center justify-center">
        <div className="flex flex-row justify-start h-full w-full rounded-xl">
          <div className="flex flex-col gap-6 max-w-fit px-[90px] py-14 justify-end">
            <h1
              className={
                poppins +
                "text-[84px] max-w-[630px] font-semibold leading-snug text-[#FF6F61]"
              }
            >
              202.54 Ha
            </h1>
            <h2
              className={
                oxygen + "font-regular text-[36px] max-w-[633px] text-[#005377]"
              }
            >
              of coral reef have been planted
            </h2>
          </div>
          <div className="flex flex-col gap-6 max-w-fit px-[27.5px] py-14">
            <h1
              className={
                poppins +
                "text-[27px] max-w-[630px] font-semibold leading-snug text-[#00A8A8]"
              }
            >
              Committed to Protecting
            </h1>
            <h2
              className={
                poppins +
                "font-semibold text-[48px] max-w-[633px] text-[#005377]"
              }
            >
              Marine life
            </h2>

            <p className={oxygen}>
              Our mission is to safeguard our oceans through impactful
              conservation efforts.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserHook;
