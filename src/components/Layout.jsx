import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Roboto_Condensed,
  Josefin_Sans,
  Architects_Daughter,
} from "next/font/google";
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
});

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
});

const arch_daug = Architects_Daughter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-arch-daug",
});

const Layout = ({ children }) => {
  const [isSocialLinksOpen, setIsSocialLinksOpen] = useState(false);

  return (
    <div
      className={`flex flex-col min-h-screen bg-[#4801FF] ${roboto_condensed.variable} ${josefin_sans.variable} ${arch_daug.variable}`}
    >
      <header>
        <Header />
      </header>

      <main className={`flex-1 mt-[100px] mb-[50px]`}>
        {children}
        <div
          className={`fixed bottom-10 right-10 bg-white/85 hover:bg-white rounded-full p-1 cursor-pointer duration-300 flex items-center justify-center ${
            isSocialLinksOpen && "rotate-180"
          } z-50`}
          onClick={() => setIsSocialLinksOpen(!isSocialLinksOpen)}
        >
          <IoIosArrowUp className="text-5xl text-black" />
        </div>
        {isSocialLinksOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: "0%",
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            className="fixed bottom-[110px] right-10"
          >
            <SocialLinks />
          </motion.div>
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
