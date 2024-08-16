import { oxygen } from "@/templates/font";
import SectionHeading from "@/templates/heading";

const AboutSection = () => {
  return (
    <div className="w-full flex justify-center pt-32 pb-20 bg-[#F3F9FC]">
      <div className="w-[80%] max-w-[1300px] h-full">
        <div className="flex gap-[130px] items-center">
          <div className="w-[530px] h-[525px] bg-slate-200 animate-pulse rounded-xl flex-shrink-0" />
          <div>
            <SectionHeading sub="ABOUT US" title="What is ShoreLab Academy?" />
            <p
              className={oxygen + "text-primary-dark text-justify mb-4 text-xl"}
            >
              For the past two years, ShoreLab Academy has empowered university
              students with hands-on marine conservation experience. We&apos;ve
              completed 8 projects involving 167 participants, collaborating
              with local marine organizations, the Ministry of Maritime Affairs
              and Fishery, and Kampus Merdeka.
            </p>
            <p
              className={oxygen + "text-primary-dark text-justify mb-4 text-xl"}
            >
              Our mission is to immerse students from Marine Technology and
              related majors in real-world conservation, enabling them to
              identify issues and create innovative solutions. Each program
              culminates in a Capstone Project and Deliverables, showcasing
              their work. All our initiatives are held exclusively in Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
