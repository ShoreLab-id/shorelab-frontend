"use client";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import { oxygen } from "./font";
import Link from "next/link";
import { ButtonPrimary } from "./buttons";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react"

const LoginButton = ({ onScroll, children }) => {
  return (
    <button
      id="login-button"
      className={
        (onScroll > 200 ? "lg:text-teal-secondary lg:outline-teal-secondary " : "lg:text-white lg:outline-white ") +
        oxygen +
        "py-3 px-6 outline outline-teal-secondary text-teal-secondary hover:outline-teal-secondary rounded-md bg-transparent hover:bg-teal-secondary active:bg-[#1F8383] transition-colors hover:text-white"
      }
    >
      {children}
    </button>
  );
};

const EXCEPT_RENDER = ["/login", "/register"];

const DropdownComponent = ({ title, onScroll, onOpenChange, isOpen, children }) => {
  return (
    <Dropdown radius="sm" onOpenChange={(isOpen) => onOpenChange(isOpen)} placement="bottom-end">
          <DropdownTrigger >
            <div
              className={
                (onScroll > 200 ? "lg:text-primary-dark " : "lg:text-white ") +
                oxygen +
                "cursor-pointer flex items-end gap-2 transition-all hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-[21px]"
              }
            >
              <p>{title}</p>
              <FiChevronDown
                size={20}
                className={"transition-transform " + (isOpen ? "rotate-180" : "")}
              />
            </div>
          </DropdownTrigger>
          <DropdownMenu variant="flat">
            {children}
          </DropdownMenu>
        </Dropdown>
  )
}

const MyNavbar = () => {

  const [isInitiativeOpen, setIsInitiativeOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isInformationOpen, setIsInformationOpen] = useState(false);

  const [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect (() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    })
  }, [])

  const path = usePathname()

  if (EXCEPT_RENDER.includes(path)) {
    return null;
  }


  return (
    <Navbar
      // id="navbar"
      isBlurred={false}
      classNames={{
        base: (scrollPos > 200 ? "lg:py-0 lg:bg-white " : "lg:py-4 lg:bg-transparent ") + "bg-white fixed py-4 border-b border-slate-200/50 transition-all shadow-lg drop-shadow-sm",
        wrapper: "max-w-[1300px]",
      }}
    >
      <NavbarBrand>
        <Link href="/">
          <p
            className={
              (scrollPos > 200 ? "lg:text-primary-dark ":"lg:text-white " ) +
              oxygen +
              " __navbar-text__ text-[32px] font-bold transition-colors text-primary-dark"
            }
          >
            ShoreLab
          </p>
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link
            href="/"
            className={
              (scrollPos > 200 ? "lg:text-primary-dark ":"lg:text-white " ) +
              oxygen +
              "transition-colors text-primary-dark hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-[21px]"
            }
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about"
            className={
              (scrollPos > 200 ? "lg:text-primary-dark ":"lg:text-white " ) +
              oxygen +
              "transition-colors text-primary-dark hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-[21px]"
            }
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Dropdown radius="sm" onOpenChange={(isOpen) => setIsInitiativeOpen(isOpen)} placement="bottom-end">
          <DropdownTrigger >
            <div
              className={
                (scrollPos > 200 ? "lg:text-primary-dark " : "lg:text-white ") +
                oxygen +
                "cursor-pointer flex items-end gap-2 transition-all text-primary-dark hover:bg-teal-secondary/20 hover:!text-teal-secondary rounded-md px-3 py-1 text-[21px]"
              }
            >
              <p>Initiatives</p>
              <FiChevronDown
                size={20}
                className={"transition-transform " + (isInitiativeOpen ? "rotate-180" : "")}
              />
            </div>
          </DropdownTrigger>
          <DropdownMenu variant="flat">
            <DropdownItem
              key="shorelab-academy"
              href="/initiatives/shorelab-academy"
              className={oxygen + "text-teal-secondary data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
              ><span className="text-lg">ShoreLab Academy</span></DropdownItem>
            <DropdownItem
              key="projects"
              href="/initiatives/shorelab-academy"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">Other Projects</span></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent
            onScroll={scrollPos}
            title="Community"
            isOpen={isCommunityOpen}
            onOpenChange={setIsCommunityOpen}>
              <DropdownItem
              key="shoresnap"
              href="#"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">ShoreSnap</span></DropdownItem>
              <DropdownItem
              key="shorelab-insight"
              href="#"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">ShoreLab Insight</span></DropdownItem>
          </DropdownComponent>
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent
            onScroll={scrollPos}
            title="Information"
            isOpen={isInformationOpen}
            onOpenChange={setIsInformationOpen}>
              <DropdownItem
              key="contact"
              href="#"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">Contact</span></DropdownItem>
              <DropdownItem
              key="partnership"
              href="#"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">Partnership</span></DropdownItem>
              <DropdownItem
              key="career"
              href="#"
              className={oxygen + "text-primary-dark data-[hover]:bg-teal-secondary/25 data-[hover]:text-teal-secondary data-[focus-visible=true]:outline-teal-secondary"}
            ><span className="text-lg">Career</span></DropdownItem>
          </DropdownComponent>
        </NavbarItem>
        <NavbarItem>
          <Link href="/login">
            <LoginButton onScroll={scrollPos} size="sm">Login</LoginButton>
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
