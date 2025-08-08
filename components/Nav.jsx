"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" }
]

const Nav = () => {
    const pathname = usePathname();

    return (
        <div className='flex gap-8'>
            {links.map((link, i) => {
                return (
                    <Link href={link.path} key={i} className={`${pathname === link.path && "text-accent-default border-b-2 border-accent"} capitalize font-medium hover:text-accent-default transition-all`}>
                        {link.name}
                    </Link>
                )
            })}
        </div>
    )
}

export default Nav