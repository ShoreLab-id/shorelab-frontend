import "./globals.css";
import { Providers } from "./providers";
import MyNavbar from "@/templates/navbar";
import Footer from "@/templates/footer";
import dynamic from "next/dynamic";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShoreLab Foundation",
  description: "A website for the seas.",
};

const Navbar = dynamic(() => import('@/templates/navbar'), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
