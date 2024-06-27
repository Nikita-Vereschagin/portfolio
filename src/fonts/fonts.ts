import { Roboto, Raleway } from "next/font/google";

const raleway_light = Raleway({
  weight: ["300"],
  style: ["normal"],
  subsets: ["latin"],
});

const raleway_bold = Raleway({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

const raleway_black = Raleway({
  weight: ["900"],
  style: ["normal"],
  subsets: ["latin"],
});

export { raleway_light, raleway_bold, raleway_black };
