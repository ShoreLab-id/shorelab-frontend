import { Button } from "@nextui-org/react";
import { poppins, oxygen } from "@/templates/font";

const Footer = () => {
  return (
    <footer className="bg-primary-dark w-full flex justify-center items-center text-white py-20">
      <div className="w-[1440px] mx-auto px-4 max-h-[624px]">
        <div className="text-center mb-12">
          <h3 className="text-[#00A8A8] font-bold mb-2">Newsletter</h3>
          <p className="mb-4">Get the latest news from us</p>
          <div className="flex justify-center items-center max-w-md mx-auto">
            <input type="email" className="p-2 w-full rounded-l-lg" />
            <Button
              className="bg-salmon-accent hover:bg-[#ffa49b] active:bg-[#D65448] p-2 rounded-r-lg"
              radius="none"
            >
              Subscribe
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-[69.82px] font-bold">ShoreLab</h2>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-[#00A8A8] font-bold mb-2">EXPLORE</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#00A8A8] font-bold mb-2">COMMUNITY</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    ShoreLab Academy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Initiatives
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    ShoreSnap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    ShoreLab Insight
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#00A8A8] font-bold mb-2">INFORMATION</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Career
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 text-center flex items-center justify-center bg-teal-secondary">
          <p>ShoreLab | Copyright 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
