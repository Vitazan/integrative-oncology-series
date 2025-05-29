"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-1" : "bg-white/80 backdrop-blur-sm py-2"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="https://nfh.ca/" target="_blank" className="flex items-center">
          <motion.img
            src="/NFH x Vitazan.png"
            alt="New Roots Herbal"
            className="h-16"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/#faq" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
            FAQ
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
           <Button
            style={{ backgroundColor: "#90b73e" }}
            className="hover:opacity-90 text-white"
          >
          <Link href="/#webinars" className="text-gray-700 hover:text-white-800 font-medium transition-colors">
                      Webinars
                    </Link>
          </Button>

          </motion.div>
          {/* <Link href="/#webinars" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
            Webinars
          </Link> */}
          
          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
           <Button
  style={{ backgroundColor: "#90b73e" }}
  className="hover:opacity-90 text-white"
>
  Register
</Button>

          </motion.div> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#webinars"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Webinars
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button className="bg-emerald-600 hover:bg-emerald-700 w-full" onClick={() => setIsMobileMenuOpen(false)}>
              Register
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
