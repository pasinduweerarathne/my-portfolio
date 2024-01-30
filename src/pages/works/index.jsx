import PageTransitionEffect from "@/components/PageTransitionEffect";
import React from "react";
import Image from "next/image";
import { project1, project2 } from "../../../public/projects";
import Link from "next/link";

const projects = [
  {
    image: project1,
    name: "Fitlab Gym",
    link: "https://fitlab-gym.netlify.app/",
  },
  {
    image: project2,
    name: "Extate Explorer",
    link: "https://real-estate-mern-app.netlify.app/",
  },
];

const Works = () => {
  return (
    <div className="">
      <PageTransitionEffect />

      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`flex gap-5 ${
              i % 2 !== 0 && "flex-row-reverse"
            } items-center`}
          >
            <Image
              src={project.image}
              width={450}
              height={300}
              alt={project.name}
              className={``}
            />
            <div
              className={`flex flex-col ${i % 2 !== 0 && "items-end"} gap-3`}
            >
              <h1 className="text-3xl text-white font-semibold font-arch">
                {project.name}
              </h1>
              <Link
                href={project.link}
                className="bg-white w-[100px] flex items-center justify-center py-1 rounded-md font-bold hover:bg-black hover:text-white duration-300"
              >
                Visit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
