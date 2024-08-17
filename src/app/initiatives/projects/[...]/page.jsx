'use client'

import { BreadcrumbsComponent } from "@/templates/BreadcrumbsComponent"
import { usePathname } from "next/navigation"
import { oxygen } from "@/templates/font"

const ProjectDetail = () => {
  const p = usePathname()
  return (
    <>
      <div className="w-full bg-[url('/static/home-hero.jpg')] bg-cover bg-center h-[40vh]">
        <div className="w-full bg-[#03202C]/65 h-full">
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[80%] max-w-[1300px] py-4">
          <BreadcrumbsComponent
            items={[
              {
                name: 'Home',
                href: '/'
              },
              {
                name: 'Projects',
                href: '/initiatives/projects'
              },
              {
                name: "Unknown Project",
                href: p
              }
            ]}
          />
        </div>
      </div>
      <div className="w-full bg-[#F3F9FC] flex flex-col items-center py-4">
        <div className="w-[80%] max-w-[1300px] bg-white h-[50vh] rounded-lg flex justify-center items-center">
          <p className={oxygen + "text-teal-secondary text-lg"}>We cannot find the information of this project</p>
        </div>
      </div>
    </>
  )
}

export default ProjectDetail