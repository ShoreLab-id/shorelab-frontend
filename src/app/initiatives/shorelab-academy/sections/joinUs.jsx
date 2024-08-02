import { poppins, oxygen } from "@/templates/font"

const JoinUsSection = () => {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-[90%] max-w-[1300px] flex flex-col items-center">
        <div about="section-heading" className="mb-12 text-center">
          <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary"}>JOIN US</h2>
          <h1 className={poppins + "text-[48px] font-semibold text-primary-dark leading-tight"}>Timeline and Registration</h1>
        </div>
        <div className="flex gap-5 mb-[72px]">
          <div className="size-[90px] bg-teal-secondary rounded-full"/>
          <div className="size-[90px] outline outline-teal-secondary rounded-full"/>
          <div className="size-[90px] outline outline-teal-secondary rounded-full"/>
          <div className="size-[90px] outline outline-teal-secondary rounded-full"/>
          <div className="size-[90px] outline outline-teal-secondary rounded-full"/>
          <div className="size-[90px] outline outline-teal-secondary rounded-full"/>
        </div>
        <div className="flex flex-col gap-8">
          <p className={oxygen + "text-3xl font-semibold text-center text-primary-dark"}>
            Online Registration
          </p>
          <p className={oxygen + "text-[27px] text-center max-w-prose text-primary-dark"}>
          Start your journey towards marine conservation by completing our application form. This initial step is crucial to get you registered and ready for the selection process.
          </p>
        </div>
        <div className="w-full flex items-end justify-end mt-16">
          <button className={poppins + "text-lg bg-salmon-accent text-absolute-white py-4 px-8 rounded-lg"}>Register Now</button>
        </div>
      </div>
    </div>
  )
}

export default JoinUsSection