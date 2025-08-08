"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import React from 'react'
import { BsWindowFullscreen } from 'react-icons/bs'

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+94 76 619 7751"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "my.email@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "No 73, Niripola, Hanwella"
    },
]

const page = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className='py-6'>
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-[30px] xl:items-center'>
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                            <h3 className='text-4xl text-accent-default'>Let's work together</h3>
                            <p className='text-white/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur laudantium eaque, a ab dolore?</p>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input type="firstname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email Address" />
                                <Input type="phone" placeholder="Phone Number" />
                            </div>

                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="webdev">Web Development</SelectItem>
                                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                                        <SelectItem value="logo">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className="h-[200px]" placeholder="Type your message here." />

                            <Button size="md" className="max-w-40 bg-accent-default py-4 text-primary-default hover:bg-accent-hover-default">Send message</Button>
                        </form>
                    </div>

                    <div className="order-1 xl:order-none">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="xl:w-1/4 flex justify-start xl:justify-center">
                                        <div className="size-[55px] bg-[#27272c] text-accent-default rounded-md p-3 text-[20px] flex justify-center items-center">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <div className="xl:w-3/4 leading-6">
                                        <p className="font-semibold">{item.title}</p>
                                        <h3 className="text-gray-400">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default page