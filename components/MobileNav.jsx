"use client"

import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import Link from "next/link"

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" }
]

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent-default" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="m-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">Pasindu<span className="text-accent-default">.</span></h1>
                    </Link>
                </div>

                <nav className="flex flex-col  items-center gap-8 h-full">
                    {links.map((link, i) => (
                        <Link href={link.path} key={link.path} className={`text-xl cursor-pointer capitalize hover:text-accent-default transition-all ${pathname === link.path && "text-accent-default border-b-2 border-accent"}`}>{link.name}</Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav