/* eslint-disable react/no-unescaped-entities */
import PageTransitionEffect from "@/components/PageTransitionEffect";
import profile from "../../../public/images/profile.png";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <Head>
        <title>PW-About</title>
      </Head>

      <PageTransitionEffect />
      <div className="max-w-3xl flex flex-col items-center mx-auto">
        <div className="box relative w-[300px] h-[300px] bg-[#070a1c] rounded-full my-10 group overflow-hidden">
          <div className="absolute inset-[6px] z-[10] rounded-full overflow-hidden">
            <Image
              src={profile}
              className=" group-hover:translate-y-72 group-hover:opacity-0 duration-500 translate-x-4 translate-y-10"
              priority
              alt="profile"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center opacity-0 group-hover:opacity-[1] duration-500">
            <p className="-translate-y-48 group-hover:translate-y-1 duration-500">
              <span className="text-4xl flex flex-col text-white font-josefin font-extrabold min-w-[206px]">
                Hello I'm <span className="text-xl">Pasindu Weerarathne</span>
              </span>
            </p>
          </div>
        </div>

        <p className="px-4 font-mono text-white text-lg text-center">
          Greetings! I'm a passionate undergraduate at Sri Lanka Institute of
          Informmation Technology (SLIIT), wielding over three years of
          development prowess. With a solid foundation in frontend, backend, and
          full-stack development, I thrive in crafting seamless digital
          experiences. My journey extends beyond academia, boasting a year of
          hands-on work experience. <br />
          <br /> Driven by a love for coding, I bring creativity and precision
          to every project. A tech enthusiast with a knack for problem-solving,
          I am dedicated to transforming ideas into captivating digital
          solutions. Whether it's crafting elegant user interfaces or optimizing
          backend functionalities, I excel in delivering results that marry form
          and function.
          <br />
          <br /> My commitment to continuous learning ensures I stay at the
          forefront of technology trends, making me a reliable and adaptable
          developer. Join me in exploring the limitless possibilities of the
          digital realm!
        </p>
      </div>
    </div>
  );
};

export default About;
