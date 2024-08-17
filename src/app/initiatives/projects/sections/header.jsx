import { BreadcrumbsComponent } from "@/templates/BreadcrumbsComponent"
const ProjectsHeader = () => {
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
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default ProjectsHeader