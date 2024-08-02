import { oxygen } from './font'

export const ButtonPrimary = ({onClick, width,  size, children}) => {
  return (
    <button
      onClick={onClick}
      className={oxygen + "bg-salmon-accent text-absolute-white hover:bg-[#FF8F84] active:bg-[#D65448] transition-colors "
        + (
          width === "full" ? "w-full " : "w-fit "
        ) + (
          size === "sm" ? "py-3 px-6 rounded-md "
          : size === "lg" ? "py-5 px-10 text-xl rounded-lg " 
          : "py-4 px-8 text-lg rounded-lg "
        )
      }>
      {children}
    </button>
  )
}

export const ButtonSecondary = ({onClick, width, size, children}) => {
  return (
    <button
      onClick={onClick}
      className={oxygen + "bg-transparent text-teal-secondary outline outline-teal-primary hover:bg-teal-secondary hover:text-absolute-white active:bg-[#1F8383] transition-colors "
        + (
          width === "full" ? "w-full " : "w-fit "
        ) + (
          size === "sm" ? "py-3 px-6 rounded-md "
          : size === "lg" ? "py-5 px-10 text-xl rounded-lg " 
          : "py-4 px-8 text-lg rounded-lg "
        )
      }>
      {children}
    </button>
  )
}