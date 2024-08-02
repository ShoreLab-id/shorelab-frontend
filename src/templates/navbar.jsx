import { Navbar, NavbarContent, NavbarItem, NavbarBrand, Na } from "@nextui-org/react"
import { oxygen } from "./font"
import Link from "next/link"
import { ButtonPrimary, ButtonSecondary } from "./buttons"

const MyNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className={oxygen + " text-[32px] font-bold text-primary-dark"}>ShoreLab</p>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem><Link href="/" className={oxygen + "text-primary-dark text-[20px]"}>Home</Link></NavbarItem>
        <NavbarItem><Link href="#" className={oxygen + "text-primary-dark text-[20px]"}>About Us</Link></NavbarItem>
        <NavbarItem><Link href="#" className={oxygen + "text-primary-dark text-[20px]"}>Initiatives</Link></NavbarItem>
        <NavbarItem><Link href="#" className={oxygen + "text-primary-dark text-[20px]"}>Community</Link></NavbarItem>
        <NavbarItem><Link href="#" className={oxygen + "text-primary-dark text-[20px]"}>Information</Link></NavbarItem>
        <NavbarItem><Link href="#"><ButtonSecondary size="sm">Login</ButtonSecondary></Link></NavbarItem>
        <NavbarItem><Link href="#"><ButtonPrimary size="sm">Register</ButtonPrimary></Link></NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default MyNavbar