import { poppins, oxygen } from "@/templates/font"

const HeaderSection = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[75%] bg-primary-dark flex justify-center">
        <div className="w-[90%] max-w-[1300px] h-[65%] flex flex-col justify-end">
          <h1 className={poppins + "text-[84px] font-semibold text-secondary-white"}>ShoreLab Academy</h1>
          <p className={oxygen + "text-[27px] font-semibold text-secondary-white max-w-[530px]"}>Leading Marine Conservation Through Tech Innovation</p>
        </div>
      </div>
      <div className="flex justify-center relative">
        <div className="bg-white w-[90%] max-w-[1080px] h-32 absolute -top-14 drop-shadow-md shadow-lg rounded-md"></div>
      </div>
    </div>
  )
}

export default HeaderSection