import PageTransitionEffect from "@/components/PageTransitionEffect";
import React from "react";
import {
  bitbucket,
  html,
  css,
  expressjs,
  firebase,
  github,
  js,
  ts,
  mongodb,
  mySql,
  nodejs,
  nextjs,
  php,
  postgresql,
  reactjs,
  restApi,
  conversation,
  problemSolving,
  teamWork,
} from "../../../public/skills";
import Image from "next/image";

const technical_skills = [
  { type: "HTML", perc: "group-hover:w-[90%] w-0", icon: html },
  { type: "CSS", perc: "group-hover:w-[90%] w-0", icon: css },
  { type: "Javascript", perc: "group-hover:w-[90%] w-0", icon: js },
  { type: "Typescript", perc: "group-hover:w-[75%] w-0", icon: ts },
  { type: "React.js", perc: "group-hover:w-[95%] w-0", icon: reactjs },
  { type: "Next.js", perc: "group-hover:w-[80%] w-0", icon: nextjs },
  { type: "Node.js", perc: "group-hover:w-[80%] w-0", icon: nodejs },
  { type: "PHP", perc: "group-hover:w-[80%] w-0", icon: php },
  { type: "RESTful API", perc: "group-hover:w-[85%] w-0", icon: restApi },
  { type: "MySQL", perc: "group-hover:w-[70%] w-0", icon: mySql },
  { type: "PostgreSQL", perc: "group-hover:w-[60%] w-0", icon: postgresql },
  { type: "MongoDB", perc: "group-hover:w-[85%] w-0", icon: mongodb },
  { type: "Firebase", perc: "group-hover:w-[80%] w-0", icon: firebase },
  { type: "Express.js", perc: "group-hover:w-[85%] w-0", icon: expressjs },
  { type: "GitHub", perc: "group-hover:w-[90%] w-0", icon: github },
  { type: "Bitbucket", perc: "group-hover:w-[60%] w-0", icon: bitbucket },
];

const soft_skills = [
  {
    type: "Communication",
    perc: "group-hover:w-[60%] w-0",
    icon: conversation,
  },
  {
    type: "Problem-solving",
    perc: "group-hover:w-[60%] w-0",
    icon: problemSolving,
  },
  {
    type: "Team Work",
    perc: "group-hover:w-[90%] w-0",
    icon: teamWork,
  },
];

const x = (cssClass) => {
  const match = cssClass.match(/w-\[([\d.]+%)\]/);
  return match ? match[1] : null;
};

const SkillCircle = ({ skill }) => {
  return (
    <div className="flip-card cursor-pointer group">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image
            src={skill.icon}
            alt={`${skill.icon}`}
            width={120}
            height={120}
          />
        </div>

        <div className="flip-card-back overflow-hidden flex flex-col font-arch text-xl font-bold relative">
          <span className="delay-300 duration-300 absolute opacity-0 group-hover:-translate-y-8 group-hover:opacity-[1] text-[#4801FF]">
            {skill.type}
          </span>
          <div className="border border-[#4801FF] w-[90%] h-[30px] rounded-full">
            <div
              className={`bg-[#4801FF] ${skill.perc} h-full rounded-full delay-300 duration-300`}
            />
          </div>
          <p className="delay-300 duration-300 absolute opacity-0 group-hover:translate-y-8 group-hover:opacity-[1] text-[#4801FF] ">
            {x(skill.perc)}
          </p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <PageTransitionEffect />

      <div className="max-w-3xl mt-20 mx-auto">
        <div className="">
          <h1 className="text-white font-josefin text-4xl text-center font-extrabold mb-10 border-b w-fit mx-auto">
            Tecknical Skills
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-10">
            {technical_skills.map((skill, i) => (
              <SkillCircle key={i} skill={skill} />
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <h1 className="text-white font-josefin text-4xl text-center font-extrabold mb-10 border-b w-fit mx-auto">
            Soft Skills
          </h1>
          <ul className="grid grid-cols-1 place-items-center gap-10">
            {soft_skills.map((skill, i) => (
              <SkillCircle key={i} skill={skill} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
