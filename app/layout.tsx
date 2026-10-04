import type { Metadata } from "next";
import { Barlow_Condensed, Work_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({ variable: "--font-display", subsets: ["latin", "vietnamese"], weight: ["500", "600", "700", "800", "900"] });
const workSans = Work_Sans({ variable: "--font-body", subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Mr. James Chicken Phong Nha | Menu, Hours & Directions",
  description: "Crispy chicken and generous burgers in Phong Nha. Explore the menu, see opening hours, and get directions to Mr. James Chicken on ĐT20.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${barlowCondensed.variable} ${workSans.variable}`}><body>{children}</body></html>;
}
