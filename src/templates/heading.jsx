import { poppins } from './font'

const SectionHeading = ({title, sub}) => {
  return (
    <div about="section-heading" className="mb-12">
      <h2 className={poppins + "text-[27px] font-semibold capitalize text-teal-secondary"}>{sub}</h2>
      <h1 className={poppins + "text-[48px] font-semibold text-primary-dark leading-tight"}>{title}</h1>
    </div>
  )
}

export default SectionHeading