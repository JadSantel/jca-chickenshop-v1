import type { Metadata } from "next";
import { Vollkorn, Work_Sans } from "next/font/google";
import "./globals.css";

const vollkorn = Vollkorn({ variable: "--font-display", subsets: ["latin", "vietnamese"] });
const workSans = Work_Sans({ variable: "--font-body", subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Mr. James Chicken Phong Nha | Fresh Chicken & Burgers",
  description: "Freshly prepared chicken burgers, crispy chicken, homestyle sides, opening hours and directions to Mr. James Chicken in Phong Nha, Vietnam.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${vollkorn.variable} ${workSans.variable}`}><body>{children}</body></html>;
}
