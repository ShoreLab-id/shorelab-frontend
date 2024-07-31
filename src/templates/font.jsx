import { Poppins, Oxygen } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"] , weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]});
const oxygen = Oxygen({ subsets: ["latin"] , weight: ["300", "400", "700",]});

module.exports = {
  poppins: poppins.className + " ",
  oxygen: oxygen.className + " ",
}