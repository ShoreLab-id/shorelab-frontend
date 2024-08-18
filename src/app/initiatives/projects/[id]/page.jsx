import { BreadcrumbsComponent } from "@/templates/BreadcrumbsComponent"
import { ButtonPrimary } from "@/templates/buttons"
import { oxygen, poppins } from "@/templates/font"

const ProjectDetail = async (id) => {
  const {params} = id
  let projectData
  let date
  let price
  try{
    const res = await fetch(`http://localhost:8080/api/projects?projectID=${params.id[0]}`)
    const resJson = await res.json()
    if (resJson) {
      projectData = resJson.data
      const _date = new Date(Date.parse(projectData?.date))
      date = _date.toLocaleDateString("id-ID", {
        dateStyle: "long"
      })
      price = projectData?.price > 0 ? Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR"
                  }).format(projectData?.price) : 'FREE' 
    }
  } catch (err) {
    console.error(err)
  }

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
                name: projectData?.title || 'Unknown project',
              }
            ]}
          />
        </div>
      </div>
      <div className="w-full bg-[#F3F9FC] flex flex-col items-center py-4">
        <div className="w-[80%] max-w-[1300px] bg-white min-h-[50vh] rounded-lg flex justify-center items-center p-10">
          {
            !projectData ? <p className={oxygen + "text-teal-secondary text-lg"}>We cannot find the information of this project</p> :
            <div className="flex justify-start gap-8">
              <div className="flex-shrink-0 size-96 bg-slate-200 animate-pulse rounded-lg" />
              <div className={oxygen + "flex flex-col gap-8"}>
                <div>
                  <h2 className={poppins + "text-teal-secondary font-semibold text-xl uppercase"}>{projectData?.location}</h2>
                  <h1 className={poppins + "text-3xl font-semibold text-primary-dark"}>{projectData?.title}</h1>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-salmon-accent font-semibold text-4xl">{price}</p>
                  <p className="px-3 py-1 text-primary-dark bg-slate-200 w-fit rounded-lg">{date}</p>
                  <div>
                    <h3 className="text-primary-dark font-semibold text-xl">Description</h3>
                    <p className="text-primary-dark text-lg">{projectData?.description}</p>
                  </div>
                  {
                    projectData?.status === 0 ? 
                    <ButtonPrimary size="sm">Join This Project</ButtonPrimary> :
                    projectData?.status === 1 ?
                    <button
                      className={oxygen + "w-fit py-3 px-6 rounded-md bg-slate-300 text-slate-400 cursor-not-allowed"} disabled>
                      Coming Soon
                    </button> :
                    <div>Project Closed</div>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default ProjectDetail