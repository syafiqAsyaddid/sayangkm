"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`w-full z-50 ${transparent ? "absolute top-0 text-white" : "bg-white"}`}>
      <div className="container max-w-7xl mx-auto px-8 py-4">
        {/* Desktop navbar */}
        <div className="hidden md:flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo-kesmah.png" alt="Sayang KM Logo" width={40} height={40} className="w-10 h-10" />
            <span className="font-bold text-lg">Sayang KM</span>
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="hover:opacity-80">
              Beranda
            </Link>
            <Link href="/tentang-kesmah" className="hover:opacity-80">
              Tentang Kesmah
            </Link>
          </div>
        </div>

        {/* Mobile navbar */}
        <div className="flex md:hidden items-center justify-between relative">
          {/* Hamburger menu button */}
          <button onClick={toggleMenu} className="p-2 focus:outline-none" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Centered logo and text */}
          <Link href="/" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            <Image src="/images/logo-kesmah.png" alt="Sayang KM Logo" width={32} height={32} className="w-8 h-8" />
            <span className="font-bold text-lg">Sayang KM</span>
          </Link>

          {/* Empty div to balance the layout */}
          <div className="w-8"></div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:opacity-80 py-2" onClick={() => setIsMenuOpen(false)}>
                Beranda
              </Link>
              <Link href="/tentang-kesmah" className="hover:opacity-80 py-2" onClick={() => setIsMenuOpen(false)}>
                Tentang Kesmah
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
