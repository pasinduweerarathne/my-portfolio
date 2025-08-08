"use client"

import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"

const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas est nihil amet ad illum quidem incidunt corrupti!",
    info: [
        { fieldName: "Name", fieldValue: "Pasindu Pramod Weerarathne" },
        { fieldName: "Phone", fieldValue: "(+94) 76 619 7751" },
        { fieldName: "Email", fieldValue: "pasindu.pramod98@gmail.com" },
        { fieldName: "Skype", fieldValue: "pasinduw" },
        { fieldName: "Languages", fieldValue: "English, Sinhala" },
        { fieldName: "Experience", fieldValue: "5+ Years" },

    ]
}

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    descripton: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, veritatis tempora? Cum vel quae nulla eveniet eaque.",
    items: [
        {
            company: "Lanka Solutions",
            posistion: "Associate Frontend Developer",
            duration: "2022 - 2023"
        },
        {
            company: "Surreytech",
            posistion: "Fullstack Developer",
            duration: "2024 - present"
        },
        {
            company: "Lanka Solutions",
            posistion: "Associate Frontend Developer",
            duration: "2022 - 2023"
        },
        {
            company: "Surreytech",
            posistion: "Fullstack Developer",
            duration: "2024 - present"
        },
        {
            company: "Lanka Solutions",
            posistion: "Associate Frontend Developer",
            duration: "2022 - 2023"
        },
        {
            company: "Surreytech",
            posistion: "Fullstack Developer",
            duration: "2024 - present"
        }
    ]
}

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, veritatis tempora? Cum vel quae nulla eveniet eaque.",
    items: [
        {
            institution: "SLIIT | Sri Lanka Institute of Information Technology",
            course: "BSc (Hons) in Information Technology",
            duration: "2022-2026"
        },
        {
            institution: "Udemy",
            course: "The Complete JavaScript Course 2025: From Zero to Expert!",
            duration: "2022"
        },
        {
            institution: "Udemy",
            course: "Java Masterclass 2025: 130+ Hours of Expert Lessons",
            duration: "2022"
        },
        {
            institution: "Udemy",
            course: "React Redux Ecommerce - Master MERN Stack Web Development",
            duration: "2023"
        },
    ]
}

const skills = {
    title: "My Skills",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, veritatis tempora? Cum vel quae nulla eveniet eaque.",
    skillList: [
        { icon: <FaHtml5 />, name: "html 5" },
        { icon: <FaCss3 />, name: "css 3" },
        { icon: <FaJs />, name: "javascript" },
        { icon: <FaReact />, name: "react.js" },
        { icon: <SiNextdotjs />, name: "next.js" },
        { icon: <SiTailwindcss />, name: "tailwind.css" },
        { icon: <FaNodeJs />, name: "node.js" },
        { icon: <FaFigma />, name: "figma" },

    ]
}

const page = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.descripton}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, i) => (
                                            <li key={i} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent-default'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.posistion}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='size-[6px] rounded-full bg-accent-default'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, i) => (
                                            <li key={i} className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent-default'>{item.duration}</span>
                                                <h3 className='text-xl w-full text-center lg:text-left'>{item.course}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='size-[6px] rounded-full bg-accent-default'></span>
                                                    <p className='text-white/60'>{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className='text-6xl group-hover:text-accent-default transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>
                                                            {skill.name}
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0'>
                                    {about.info.map((item, i) => (
                                        <li key={i} className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{item.fieldName}</span>
                                            <span className='text-xl'>{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default page