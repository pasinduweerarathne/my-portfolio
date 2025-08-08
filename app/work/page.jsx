"use client"

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Image from 'next/image'

const projects = [
    {
        num: "01", category: "frontend", title: "project 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, velit.",
        stack: [
            { name: "Html 5" },
            { name: "Css 3" },
            { name: "Javascript" }
        ],
        image: "/assets/work/thumb1.png", live: "", github: ""
    },
    {
        num: "02", category: "fullstack", title: "project 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, velit.",
        stack: [
            { name: "Next.js" },
            { name: "Tailwind.css" },
            { name: "Node.js" }
        ],
        image: "/assets/work/thumb2.png", live: "", github: ""
    },
    {
        num: "03", category: "fullstack", title: "project 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, velit.",
        stack: [
            { name: "Next.js" },
            { name: "Tailwind.css" },
            { name: "Node.js" }
        ],
        image: "/assets/work/thumb3.png", live: "", github: ""
    }
]

const page = () => {
    const [project, setProject] = useState(projects[0]);
    const swiper = useSwiper();
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px]'>
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500 capitalize'>{project.category} project</h2>
                            <p className='text-white/60'>{project.description}</p>
                            <ul className='flex gap-4'>
                                {project.stack.map((item, i) => (
                                    <li key={i} className='text-xl text-accent-default'>
                                        {item.name}
                                        {i !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className='border border-white/20'></div>
                            <div className='flex items-center gap-4'>
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent-default' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className='text-white text-3xl group-hover:text-accent-default' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                            onSwiper={setSwiperInstance}
                        >
                            {projects.map((project, i) => (
                                <SwiperSlide key={i} className='w-full'>
                                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>

                                        <div className='relative w-full h-full'>
                                            <Image
                                                src={project.image}
                                                fill
                                                className="object-cover"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            <div className='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'>
                                <button
                                    className='bg-accent-default hover:bg-accent-hover-default text-primary-default text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                                    onClick={() => swiperInstance?.slidePrev()}>
                                    <PiCaretLeftBold className='' />
                                </button>
                                <button
                                    className='bg-accent-default hover:bg-accent-hover-default text-primary-default text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                                    onClick={() => swiperInstance?.slideNext()}>
                                    <PiCaretRightBold className='' />
                                </button>
                            </div>
                        </Swiper>

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default page