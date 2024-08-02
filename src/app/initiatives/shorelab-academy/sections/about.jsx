import { poppins, oxygen } from "@/templates/font"

const AboutSection = () => {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-[90%] max-w-[1300px] h-full">
        <div className="flex gap-[130px] items-center">
          <div className="w-[530px] h-[525px] bg-slate-200 animate-pulse rounded-xl flex-shrink-0" />
          <div>
            <div about="section-heading" className="mb-12">
              <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary"}>ABOUT US</h2>
              <h1 className={poppins + "text-[48px] font-semibold text-primary-dark leading-tight"}>What is ShoreLab Academy?</h1>
            </div>
            <p className={oxygen + "text-primary-dark text-justify mb-4 text-xl"}>
              For the past two years, ShoreLab Academy has empowered university students with hands-on marine conservation experience. We’ve completed 8 projects involving 167 participants, collaborating with local marine organizations, the Ministry of Maritime Affairs and Fishery, and Kampus Merdeka.
            </p>
            <p className={oxygen + "text-primary-dark text-justify mb-4 text-xl"}>
              Our mission is to immerse students from Marine Technology and related majors in real-world conservation, enabling them to identify issues and create innovative solutions. Each program culminates in a Capstone Project and Deliverables, showcasing their work. All our initiatives are held exclusively in Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection