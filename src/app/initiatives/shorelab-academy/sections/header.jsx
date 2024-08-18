import { ButtonPrimary } from "@/templates/buttons";
import { poppins, oxygen } from "@/templates/font";

const HeaderSection = () => {
  return (
    <div className="w-full h-[90vh] max-h-[1080px] bg-[url('/static/shorelab-hero.webp')] bg-cover bg-center">
      <div className="w-full h-full bg-[#03202C]/85 flex flex-col justify-end items-center">
        <div className="w-[70%] max-w-[1300px] flex items-center">
          <div className="flex flex-col gap-8">
            <h1
              className={
                poppins +
                "text-[84px] font-semibold text-secondary-white leading-tight"
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
            <ButtonPrimary>Upcoming Project</ButtonPrimary>
          </div>
          <div className="p-2 bg-white rounded-2xl flex-shrink-0">
            <div className="size-[30rem] overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902872.4303051748!2d117.92678211944552!3d1.9796336607511547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x320db9032df93133%3A0x2cea5b974756a685!2sKabupaten%20Berau%2C%20Kalimantan%20Timur!5e0!3m2!1sid!2sid!4v1723833757343!5m2!1sid!2sid"
                className="size-[30rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="relative w-[90%] max-w-[1080px] h-32 bg-teal-secondary drop-shadow-md shadow-lg rounded-md -bottom-14"
        />
        {/* <div className="h-full w-full overflow-hidden relative">
            <div className="absolute w-full -bottom-20">
              <img src="/assets/layer0_cloud.png" alt="" className="w-full" />
            </div>
            <div className="absolute w-full -bottom-20">
              <img src="/assets/layer1.png" alt="" className="w-full" />
            </div>
            <div className="absolute w-full -bottom-20">
              <img src="/assets/layer2.png" alt="" className="w-full" />
            </div>
            <div className="absolute w-full -bottom-20">
              <img src="/assets/layer3.png" alt="" className="w-full" />
            </div>
            <div className="absolute w-full -bottom-20">
              <img src="/assets/layer4.png" alt="" className="w-full" />
            </div>
            <div className="absolute w-full -bottom-20">
              <img src="/assets/layer5.png" alt="" className="w-full" />
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default HeaderSection;
