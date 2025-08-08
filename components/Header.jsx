import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className='py-8 text-white xl:py-12'>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Pasindu <span className="text-accent-default">.</span>
                    </h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button className="border-2 border-accent-default text-accent-default bg-transparent hover:bg-accent-default hover:text-primary-default cursor-pointer">Hire Me</Button>
                    </Link>
                </div>

                <div className='xl:hidden'>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header