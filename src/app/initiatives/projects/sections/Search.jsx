import SectionHeading from "@/templates/heading"
import { IoLocationSharp, IoPeople } from "react-icons/io5";
import {Input} from "@nextui-org/react";
import { ButtonPrimary } from "@/templates/buttons";
import { oxygen } from "@/templates/font";
import Link from "next/link";

const CardComponent = ({project}) => {
  return (
    <div className="bg-white drop-shadow-sm shadow-lg w-full aspect-[4/6] rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="bg-slate-200 w-full aspect-square" />
              <div className={oxygen + "flex flex-col gap-2 px-4"}>
                <Link
                  href={project.link}
                  className={"text-teal-secondary text-2xl font-semibold transition-colors hover:underline hover:text-salmon-accent"}>
                  {project.title}
                </Link>
                <p className="flex items-center gap-1">
                  <span className="text-slate-500"><IoPeople size={15} /></span> <span className="bg-emerald-400/25 text-emerald-500 text-sm px-3 py-0.5 rounded-full">{project.type}</span>
                </p>
                <p className="flex items-center gap-1 text-sm">
                  <span className="text-slate-500"><IoLocationSharp size={15} /></span> {project.location}
                </p>
              </div>
            </div>
            <div className={oxygen + "w-full px-4 py-2 text-primary-dark"}>
              status: <span className="text-emerald-500">{project.status}</span>
            </div>
          </div>
  )
}

const SearchSection = () => {
  return (
    <>
      <div className="w-full bg-[#F3F9FC] flex flex-col items-center py-4">
        <div className="w-[80%] max-w-[1300px] bg-white rounded-xl p-4">
          <SectionHeading sub="JOIN A PROJECT" title="Find Projects Suitable for You" />
          <form className="flex items-center gap-4">
            <Input size="lg" placeholder="Find nearest project"
              classNames={{
                input: "text-lg placeholder:text-slate-300",
                inputWrapper: "shadow-none border-2 border-slate-200 rounded-md group-data-[focus-visible=true]:ring-teal-secondary bg-tranparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent "
              }} 
              startContent={
                <IoLocationSharp className="text-teal-secondary" size={25} />
              } />
            <ButtonPrimary size="sm">Search</ButtonPrimary>
          </form>
        </div>
        <div className="w-[80%] max-w-[1300px] grid grid-cols-3 gap-10 pt-10 pb-20">
          <CardComponent project={{
            link: '#',
            title: 'Lorem Ipsum Dolor Sit Amet, Fuck You Mate',
            type: 'Volunteer',
            location: 'Yogyakarta',
            status: 'On going',
          }} />
          <CardComponent project={{
            link: '#',
            title: 'Lorem Ipsum Dolor Sit Amet, Fuck You Mate',
            type: 'Volunteer',
            location: 'Yogyakarta',
            status: 'On going',
          }} />
          <CardComponent project={{
            link: '#',
            title: 'Lorem Ipsum Dolor Sit Amet, Fuck You Mate',
            type: 'Volunteer',
            location: 'Yogyakarta',
            status: 'On going',
          }} />
          <CardComponent project={{
            link: '#',
            title: 'Lorem Ipsum Dolor Sit Amet, Fuck You Mate',
            type: 'Volunteer',
            location: 'Yogyakarta',
            status: 'On going',
          }} />
        </div>
      </div>
    </>
  )
}

export default SearchSection