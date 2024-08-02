import { poppins } from "@/templates/font"

const PartnersSection = () => {
  return (
    <div className="w-full h-screen py-20 flex justify-center">
      <div className="w-[90%] max-w-[1300px]">
        <div about="section-heading" className="mb-12 text-center">
          <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary"}>OUR VALUED PARTNERS</h2>
          <h1 className={poppins + "text-[48px] font-semibold text-primary-dark leading-tight"}>Who Made It Possible</h1>
        </div>
      </div>
    </div>
  )
}

export default PartnersSection