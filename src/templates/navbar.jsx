'use client'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
} from "@nextui-org/react";
import { oxygen } from "./font";
import Link from "next/link";
import { ButtonPrimary } from "./buttons";

const deleteClass = (className, attr) => {
  return className.replace(attr, "")
}

const handleScrollChange = (position) => {
  const _navbar = document.getElementById("navbar");
  const _loginButton = document.getElementById("login-button");
  // const imageWrapper = document.querySelector(".__navbar-logo-image__")
  const navbarText = document.querySelectorAll(".__navbar-text__")
  if (position > 200){
    navbarText.forEach((item) => {
      if (item.className.includes(" !text-primary-dark")) {
        return
      }
      item.className = deleteClass(item.className, " text-primary-dark lg:text-white hover:bg-slate-200/20")
      item.className += " !text-primary-dark"
    })
    if (_navbar.className.includes(" lg:!bg-white")) {
      return
    }
    // imageWrapper.className = deleteClass(imageWrapper.className, " lg:w-16 lg:h-16")
    _navbar.className = deleteClass(_navbar.className, " lg:!bg-transparent")
    _loginButton.className = deleteClass(_loginButton.className, " text-white outline-white")
    _navbar.className += " lg:!bg-white lg:!py-0"
    _loginButton.className += " text-teal-secondary outline-teal-secondary"
    // imageWrapper.className += " lg:w-10 lg:h-10"
    return 
  }
  else {
    navbarText.forEach((item) => {
      if (item.className.includes(" !text-primary-dark")) {
        item.className = deleteClass(item.className, " !text-primary-dark")
        item.className += " text-primary-dark lg:text-white"
      }
    })
    if (_navbar.className.includes(" lg:!bg-white")) {
      _navbar.className = deleteClass(_navbar.className, " lg:!bg-white lg:!py-0")
      _navbar.className += " lg:!bg-transparent"
      // imageWrapper.className = deleteClass(imageWrapper.className, " lg:w-10 lg:h-10")
      // imageWrapper.className += " lg:w-16 lg:h-16"
    }
    if (_loginButton.className.includes(" text-teal-secondary")){
      _loginButton.className = deleteClass(_loginButton.className, " text-teal-secondary outline-teal-secondary");
      _loginButton.className += " text-white outline-white"

    }
  }
}

const LoginButton = ({children}) => {
  return (
    <button
      id="login-button"
      className={oxygen + "outline py-3 px-6 hover:outline-teal-secondary rounded-md bg-transparent hover:bg-teal-secondary active:bg-[#1F8383] transition-colors hover:text-white text-white outline-white"}>
      {children}
    </button>
  )
}

const MyNavbar = () => {
  return (
    <Navbar
      id="navbar"
      disableScrollHandler={false}
      isBlurred={false}
      onScrollPositionChange={(yPos) => handleScrollChange(yPos)}
      classNames={{
      base: "fixed py-4 bg-white lg:!bg-transparent border-b border-slate-200/50 transition-all shadow-lg drop-shadow-sm",
      wrapper: "max-w-[1300px]"
    }}>
      <NavbarBrand>
        <p className={oxygen + " __navbar-text__ text-[32px] font-bold transition-colors text-primary-dark lg:text-white"}>
          ShoreLab
        </p>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link href="/" className={oxygen + "__navbar-text__ transition-colors text-primary-dark lg:text-white hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-[21px]"}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={oxygen + "__navbar-text__ transition-colors text-primary-dark lg:text-white hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-[21px]"}>
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={oxygen + "__navbar-text__ transition-colors text-primary-dark lg:text-white hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-[21px]"}>
            Initiatives
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={oxygen + "__navbar-text__ transition-colors text-primary-dark lg:text-white hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-[21px]"}>
            Community
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={oxygen + "__navbar-text__ transition-colors text-primary-dark lg:text-white hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-[21px]"}>
            Information
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <LoginButton size="sm">Login</LoginButton>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/register">
            <ButtonPrimary size="sm">Register</ButtonPrimary>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MyNavbar;
