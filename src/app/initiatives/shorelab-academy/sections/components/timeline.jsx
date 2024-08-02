'use client'

import { oxygen, poppins } from "@/templates/font"
import { useState } from "react"

const timeline = [
  {
    title: 'Online Registration',
    caption: 'Start your journey towards marine conservation by completing our user-friendly online application form. This initial step is crucial to get you registered and ready for the selection process.'
  },
  {
    title: 'Documents Submission',
    caption: 'Strengthen your application by submitting all necessary documents, including academic transcripts and recommendation letters. These documents help us understand your background and readiness for the program.'
  },
  {
    title: 'Screening',
    caption: 'Our dedicated team meticulously reviews each application to ensure all eligibility criteria are met. This screening process is designed to identify the most passionate and qualified candidates.'
  },
  {
    title: 'Online Interviews',
    caption: "Shortlisted candidates will be invited to participate in an interview. This is an opportunity for you to discuss your aspirations, demonstrate your motivation, and show how you align with ShoreLab Academy's mission."
  },
  {
    title: 'Final Selection',
    caption: 'Successful applicants will receive an official acceptance letter, along with detailed information about the program schedule and requirements. This final selection is based on your overall fit and potential impact.'
  },
  {
    title: 'Orientation and Onboarding',
    caption: "Begin your adventure with our comprehensive orientation session. Here, you'll meet fellow participants, learn about the program's objectives, and get prepared for an enriching experience with ShoreLab Academy."
  },
]

const TimelineButton = ({currentActive, index, onChange}) => {
  return(
    <button onClick={onChange} className={poppins +
      "size-[90px] rounded-full transition-colors text-3xl font-semibold outline outline-teal-secondary " + (
      currentActive === index ? "bg-teal-secondary text-absolute-white " : "text-teal-secondary "
    )}>{index+1}</button>
  )
}

const Timeline = () => {
  const [active, setActive] = useState(0)
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-5 mb-[72px]">
          <TimelineButton index={0} currentActive={active} onChange={() => setActive(0)} />
          <TimelineButton index={1} currentActive={active} onChange={() => setActive(1)} />
          <TimelineButton index={2} currentActive={active} onChange={() => setActive(2)} />
          <TimelineButton index={3} currentActive={active} onChange={() => setActive(3)} />
          <TimelineButton index={4} currentActive={active} onChange={() => setActive(4)} />
          <TimelineButton index={5} currentActive={active} onChange={() => setActive(5)} />
        </div>
        <div className="flex flex-col gap-8">
          <p className={oxygen + "text-3xl font-semibold text-center text-primary-dark"}>
            {timeline[active].title}
          </p>
          <p className={oxygen + "text-[27px] text-center max-w-prose text-primary-dark"}>
          {timeline[active].caption}
          </p>
        </div>
    </div>
  )
}

export default Timeline