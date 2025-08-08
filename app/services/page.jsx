"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { BsArrowDownRight } from "react-icons/bs"

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem laborum, excepturi ratione tempore porro vero maiores.",
        href: ""
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem laborum, excepturi ratione tempore porro vero maiores.",
        href: ""
    },
    {
        num: "03",
        title: "Frontend",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem laborum, excepturi ratione tempore porro vero maiores.",
        href: ""
    },
    {
        num: "04",
        title: "Backend",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem laborum, excepturi ratione tempore porro vero maiores.",
        href: ""
    },
    {
        num: "05",
        title: "SEO",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quidem laborum, excepturi ratione tempore porro vero maiores.",
        href: ""
    },
]

const page = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
                >
                    {services.map((service, i) => (
                        <div key={i} className='flex-1 flex flex-col justify-center gap-6 group'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent transition-all duration-500'>{service.num}</div>
                                <Link href={service.href} className='size-[70px] rounded-full bg-white transition-all duration-500 flex justify-center items-center group-hover:bg-accent-default hover:-rotate-45'>
                                    <BsArrowDownRight className='text-primary-default text-3xl' />
                                </Link>
                            </div>

                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500'>{service.title}</h2>

                            <p>{service.description}</p>

                            <div className="border-b border-white/20"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default page