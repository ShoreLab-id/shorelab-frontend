"use client"

import { IoSend } from "react-icons/io5";
import { oxygen } from "./font";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GroupHeader = ({children}) => {
  return (
    <h3 className={ oxygen + " capitalize text-teal-secondary font-bold text-left mb-10 text-[20px]" }>
      {children}
    </h3>
  )
}

const LinkItem = ({to, children}) => {
  return (
    <Link href={to} className={oxygen + " text-[20px] text-secondary-white hover:underline hover:text-foam-tertiary transition-colors"}>
      {children}
    </Link>
  )
}

const EXCEPT_RENDER = ["/login", "/register"]

const Footer = () => {
  const path = usePathname()

  if ( EXCEPT_RENDER.includes(path) ) {
    return null
  }

  return (
    <footer className="w-full flex flex-col items-center">
      <div className="w-full bg-primary-dark flex justify-center">
        <div className="w-[90%] max-w-[1300px] pt-20 pb-48 flex flex-col gap-16">
          {/* form */}
          <div className={ oxygen + "flex flex-col items-center gap-6"}>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-teal-secondary font-bold text-[27px] leading-none ">Newsletter</h1>
              <h2 className="text-secondary-white text-[20px] text-center">Get the latest news from us</h2>
            </div>
            <form className="w-1/3 min-w-[254px] flex">
              <input type="email" className={oxygen + " text-primary-dark px-4 w-full rounded-l-lg focus:outline-none"} />
              <Button 
                type="submit"
                isIconOnly 
                disableAnimation 
                disableRipple 
                radius="none"
                className="bg-salmon-accent text-absolute-white rounded-r-lg"
                ><IoSend size={18}/>
              </Button>
            </form>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className={ oxygen + " text-secondary-white text-[69.82px] font-bold" }>ShoreLab</h2>
            <div className="grid grid-cols-3 gap-20">
              <div>
                <GroupHeader>EXPLORE</GroupHeader>
                <ul className="flex flex-col gap-4">
                  <li><LinkItem to="/">Home</LinkItem></li>
                  <li><LinkItem to="#">About Us</LinkItem></li>
                  <li><LinkItem to="#">Partners</LinkItem></li>
                </ul>
              </div>
              <div>
                <GroupHeader>COMMUNITY</GroupHeader>
                <ul className="flex flex-col gap-4">
                  <li><LinkItem to="/initiatives/shorelab-academy">ShoreLab Academy</LinkItem></li>
                  <li><LinkItem to="#">Initiatives</LinkItem></li>
                  <li><LinkItem to="#">ShoreSnap</LinkItem></li>
                  <li><LinkItem to="#">ShoreLab Insight</LinkItem></li>
                </ul>
              </div>
              <div>
                <GroupHeader>INFORMATION</GroupHeader>
                <ul className="flex flex-col gap-4">
                  <li><LinkItem to="#">Contact</LinkItem></li>
                  <li><LinkItem to="#">Partnership</LinkItem></li>
                  <li><LinkItem to="#">Career</LinkItem></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 bg-teal-secondary w-full">
        <p className={oxygen + " text-secondary-white text-[20px] text-center"}>ShoreLab | Copyright 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
