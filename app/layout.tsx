import type { Metadata } from "next";
import localFont from "next/font/local";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const stockman = localFont({
  src: [{ path: "./fonts/Stockman-Regular.otf", weight: "400", style: "normal" }],
  variable: "--font-display",
  display: "swap",
});
const workSans = Work_Sans({ variable: "--font-body", subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Mr. James Chicken Phong Nha | Menu, Hours & Directions",
  description: "Crispy chicken and generous burgers in Phong Nha. Explore the menu, see opening hours, and get directions to Mr. James Chicken on ĐT20.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${stockman.variable} ${workSans.variable}`}><body>{children}</body></html>;
}
