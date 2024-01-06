import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Menu = ({ isOpen, setIsOpen, scrollPosition }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isOpen
          ? "bg-[#4801FF]"
          : `${
              scrollPosition > 20
                ? "bg-white/30 backdrop-blur-sm"
                : "bg-transparent"
            }`
      } flex flex-col justify-center duration-300 items-center rounded-full w-10 h-10 z-20`}
    >
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

const Header = () => {
  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "My Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];
  const { asPath } = useRouter();
  const [active, setActive] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const x = menus.findIndex((menu) => menu.path === asPath);
    setActive(x);
  }, [asPath]);

  const animateNav = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const animateLinksContainer = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const animateLink = {
    initial: {
      opacity: 0,
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <div
      className="flex justify-center fixed w-full z-20 font-josefin"
      onScroll={handleScroll}
    >
      <div
        className={`mt-4 h-[50px] relative rounded-full px-1 duration-500 ${
          scrollPosition > 25 && "bg-white/30 backdrop-blur-sm"
        } hidden sm:flex`}
      >
        <div className="flex gap-5 items-center">
          {menus.map((menu, menuIndex) => (
            <Link
              key={`${menu.name}-${menuIndex}`}
              href={menu.path}
              className={`uppercase ${
                active === menuIndex
                  ? "bg-white rounded-full p-2"
                  : "p-2 hover:bg-white/50"
              } duration-300 rounded-full group`}
            >
              <span
                className={`${
                  active === menuIndex
                    ? "text-[#14202E]"
                    : "text-white group-hover:text-[#14202E]"
                } font-semibold`}
              >
                {menu.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className={`sm:hidden z-10 absolute top-3`}>
        <Menu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          scrollPosition={scrollPosition}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={animateNav}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`relative bg-white/70 w-full`}
          >
            <motion.div
              variants={animateLinksContainer}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col w-screen h-screen items-center justify-center gap-3 overflow-hidden"
            >
              {menus.map((menu, menuIndex) => (
                <motion.div
                  key={`${menu.name}-${menuIndex}`}
                  variants={animateLink}
                >
                  <Link
                    href={menu.path}
                    className={`uppercase font-extrabold ${
                      active === menuIndex
                        ? "p-2 text-[#4801FF]"
                        : "p-2 text-[#14202E]"
                    } duration-500 text-5xl`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {menu.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
