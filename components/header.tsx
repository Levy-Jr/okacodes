"use client"

import Image from "next/image"
import Link from "next/link"
import OkacodesLogo from "@/public/okacodes/logo-header.svg"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()
  const [isNavOpen, setIsNavOpen] = useState(false)

  const navLinks = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Projetos",
      href: "/projetos"
    },
    {
      label: "Blog",
      href: "/blog"
    },
  ]

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.maxHeight = '100svh'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.maxHeight = 'unset'
      document.body.style.overflow = 'unset'
    }
  }, [isNavOpen])

  useEffect(() => {
    setIsNavOpen(false)
  }, [pathname])

  return (
    <header className="max-w-300 w-[90%] mx-auto py-3 flex justify-between items-center">
      <div className="flex-1 flex justify-start">
        <Link href="/" className="relative z-51">
          <Image
            src={OkacodesLogo}
            alt="Logo da Okacodes"
          />
        </Link>
      </div>
      <nav className={cn("text-sm hidden md:block", isNavOpen && "font-bold text-[2.5rem] text-black absolute z-50 grid pr-[10%] items-center inset-0 text-end bg-white/50 backdrop-blur-3xl")} aria-label="Navegação principal">
        <ul className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-7.5">
          {navLinks.map((navLink, i) => (
            <li key={i}>
              <Link
                className={cn(pathname === navLink.href && "bg-linear-to-b from-[#FF8D2F] to-[#D55506] text-transparent bg-clip-text inline-block")}
                href={navLink.href}
              >{navLink.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 flex justify-end">
        <button aria-label="Menu" className="flex md:hidden relative z-51 w-6 h-6 items-center justify-center" onClick={() => setIsNavOpen(!isNavOpen)}>
          <div className="relative w-3.5 h-2.5">
            <span
              className={cn(
                "absolute h-0.5 bg-[#666666] rounded-full transition-all duration-300 left-0",
                isNavOpen ? "top-1 w-3.5 rotate-45" : "top-0 w-1.75"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-3.5 bg-[#666666] rounded-full transition-all duration-300 left-0 top-1",
                isNavOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 bg-[#666666] rounded-full transition-all duration-300 right-0",
                isNavOpen ? "top-1 w-3.5 -rotate-45" : "top-2 w-1.75"
              )}
            />
          </div>
        </button>
      </div>
    </header >
  )
}

export default Header