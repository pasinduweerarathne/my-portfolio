"use client";

import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

const social = [
  { icon: <FiGithub />, path: "" },
  { icon: <FiLinkedin />, path: "" },
];

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col gap-8 xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="order-2 xl:order-none text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent-default">Pasindu Weerarathne</span>
            </h1>
            <p className="max-w-[500px] mx-auto xl:mx-0 mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col items-center gap-4 xl:flex-row">
              <Button className="uppercase gap-2 border bg-transparent hover:bg-accent-default hover:text-primary-default cursor-pointer w-fit">
                <span>Download CV</span> <FiDownload className="text-xl" />
              </Button>

              <div className="flex gap-4">
                {social.map((social, i) => (
                  <Link
                    href={social.path}
                    key={i}
                    className="border border-accent-default rounded-full p-2 hover:bg-accent-hover-default hover:text-primary-default transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="relative flex items-center justify-center order-1 xl:order-none">
            <div className="relative size-[300px] xl:size-[506px]">
              {/* Animated SVG Circle Behind */}
              <motion.svg
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                className="absolute top-0 left-0 w-full h-full z-0"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="253"
                  cy="253"
                  r="250"
                  stroke="#00ff99"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 18 8 8" }}
                  animate={{
                    strokeDasharray: [
                      "15 120 25 25",
                      "16 25 92 72",
                      "4 250 22 22",
                    ],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.svg>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                className="relative z-10 size-[298px] xl:size-[498px] rounded-full shadow-lg overflow-hidden mix-blend-lighten"
              >
                <Image
                  src="/assets/profile.jpg"
                  alt="Profile"
                  priority
                  quality={100}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
