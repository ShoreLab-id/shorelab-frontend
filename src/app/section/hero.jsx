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
      <div className="absolute z-10 flex flex-col items-start text-center text-white px-6 py-20 rounded-lg">
        <h1 className="text-6xl font-semibold mb-4 font-serif">Makan</h1>
        <h1 className="text-6xl font-semibold mb-4 font-serif">Dulu</h1>
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
