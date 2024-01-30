/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroImage from "../../public/images/programmer.webp";
import PageTransitionEffect from "@/components/PageTransitionEffect";

const AnimatedText = () => {
  const titles = [
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "UI/UX Designer",
  ];

  useEffect(() => {
    const words = document.querySelectorAll("#word");

    words.forEach((word) => {
      let letters = word.textContent.split("");
      word.textContent = "";
      letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0" : letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    const rotateText = () => {
      let currentWord = words[currentWordIndex];
      let nextWord =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1];

      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i * 80);
      });

      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });

      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    rotateText();
    const intervalId = setInterval(rotateText, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 font-josefin text-white">
      <p className="flex text-5xl font-bold">
        Hi! <span className="animate-waving-hand block">👋</span> I'm Pasindu
      </p>

      <div className="flex items-center gap-3 text-5xl font-bold">
        <p>I'm a</p>
        <p className="flex flex-col">
          {titles.map((title, i) => (
            <span key={i} id="word" className={`flex leading-[0] opacity-0 `}>
              {title}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <PageTransitionEffect />
      <div className="flex flex-col gap-5">
        <div className="flex justify-center mt-20">
          <AnimatedText />
        </div>

        <div className="">
          <div className="flex justify-center relative">
            <Image
              src={heroImage}
              className="max-w-xl"
              alt="hero-image"
              priority
            />

            <p className="max-w-3xl text-2xl text-center p-4 text-[#14202E] mx-auto font-bold absolute flex justify-center -bottom-5 bg-white font-arch">
              🚀 Passionate Fullstack Developer 🖥️ | Turning Ideas into
              Interactive Experiences! 💡 | Crafting Seamless User Journeys with
              Code ✨ | Frontend Magic 🌐 | Backend Wizardry ⚙️ | Let's Build
              the Future Together! 🌟 | #CodeCraftsman #InnovationEnthusiast
            </p>
          </div>
        </div>

        <div className="mt-10"></div>
      </div>
    </div>
  );
};

export default Home;
