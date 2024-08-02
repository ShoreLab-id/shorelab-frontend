import { poppins, oxygen } from "@/templates/font"

const HighlightSection = () => {
  return (
    <div className="w-full bg-primary-white py-20 flex justify-center">
      <div className="w-[90%] max-w-[1300px]">
        <div className="flex gap-[130px] items-center">
          <div>
            <div about="section-heading" className="mb-12">
              <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary"}>
                HIGHLIGHT
              </h2>
              <h1 className={poppins + "text-[48px] font-semibold text-primary-dark leading-tight"}>
                Story From Previous ShoreLab Academies
              </h1>
            </div>
            <p className={oxygen + "text-primary-dark text-justify mb-4 text-xl"}>
              Hear from our past participants as they share their transformative experiences and impactful journeys with ShoreLab Academy. Discover how our program has empowered them to make a difference in marine conservation and beyond.
            </p>
          </div>
          <div className="w-[640px] h-[464px] bg-slate-200 animate-pulse rounded-xl flex-shrink-0"/>
        </div>
      </div>
    </div>
  )
}

export default HighlightSection