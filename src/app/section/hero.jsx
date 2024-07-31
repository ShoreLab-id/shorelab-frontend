import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="relative w-full min-h-screen flex flex-col justify-center items-center">
      <Image
        src="/static/BG.jpg"
        alt="profile"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute z-10 flex flex-col items-start text-left text-white px-6 py-20 rounded-lg">
        <div className="mb-28 bg-black">
          <h1 className="text-8xl font-semibold">Creating Ripples Across</h1>
          <h1 className="text-8xl">the Tides</h1>
        </div>
        <div className="mb-28 bg-black">
          <h2 className="text-2xl">
            Merges technology and marine science to create
          </h2>
          <h2 className="text-2xl">
            innovative solutions for ocean conservation.
          </h2>
        </div>
        <Button
          as={Link}
          target="_blank"
          href="https://petrusariaa.vercel.app"
          className="bg-[#ff6f61] text-white"
          radius="60"
        >
          Join ShoreLab Academy
        </Button>
      </div>
    </main>
  );
};

export default HeroSection;
