import { ButtonPrimary } from "@/templates/buttons"
import { poppins, oxygen } from "@/templates/font"
import Timeline from "./components/timeline"

const JoinUsSection = () => {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-[90%] max-w-[1300px] flex flex-col items-center">
        <div about="section-heading" className="mb-12 text-center">
          <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary"}>JOIN US</h2>
          <h1 className={poppins + "text-[48px] font-semibold text-primary-dark leading-tight"}>Timeline and Registration</h1>
        </div>
        <Timeline />
        <div className="w-full flex items-end justify-end mt-16">
          <a href="/initiatives/shorelab-academy/form">
            <ButtonPrimary size="base">Register Now</ButtonPrimary>
          </a>
        </div>
      </div>
    </div>
  )
}

export default JoinUsSection