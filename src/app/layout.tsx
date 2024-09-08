   import "./globals.css";

import {Figtree} from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300","400","500","600", "700","800","900"],
  variable: "--font-figtree",
})

const vazir = localFont({
  src: [
    {
      path: "../../public/fonts/vazir-font-v16.1.0/vazir-font-v16.1.0/Vazir-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir-font-v16.1.0/vazir-font-v16.1.0/Vazir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir-font-v16.1.0/vazir-font-v16.1.0/Vazir-Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`dark` }>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header/>
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
