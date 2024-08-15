import "./globals.css";
import { Providers } from "./providers";
import MyNavbar from "@/templates/navbar";
import Footer from "@/templates/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShoreLab Foundation",
  description: "A website for the seas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MyNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
