"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", smoothScroll as EventListener))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      links.forEach((link) => link.removeEventListener("click", smoothScroll as EventListener))
    }
  }, [])

  const handleDownload = async (): Promise<void> => {
    const pdfUrl = "/SalihCV.pdf"
    try {
      const response = await fetch(pdfUrl)
      if (!response.ok) throw new Error(`Failed to fetch the PDF: ${response.statusText}`)
      
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = 'SalihCV.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error downloading the PDF:", error)
      alert("Failed to download the PDF. Please check if the file exists at the correct path.")
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen)
  const closeMenu = (): void => setIsMenuOpen(false)

  return (
    <header 
      className={`relative top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-lg' : 'bg-primary border-b border-accent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="#hero" 
            className="text-xl sm:text-2xl font-bold text-accent hover:scale-105 transition-transform"
          >
            MS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link 
              href="#projects" 
              className="text-sm lg:text-base text-white hover:text-accent transition-all hover:scale-105"
            >
              Projects
            </Link>
            <Link 
              href="#skills" 
              className="text-sm lg:text-base text-white hover:text-accent transition-all hover:scale-105"
            >
              Skills
            </Link>
            <Link 
              href="#about" 
              className="text-sm lg:text-base text-white hover:text-accent transition-all hover:scale-105"
            >
              About
            </Link>
            <Link 
              href="#testimonials" 
              className="text-sm lg:text-base text-white hover:text-accent transition-all hover:scale-105"
            >
              Testimonials
            </Link>
            <button 
              onClick={handleDownload}
              className="btn btn-primary text-sm lg:text-base hover:scale-105 transition-all"
            >
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-background/98 backdrop-blur-xl transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="container h-full flex flex-col justify-center items-center space-y-6 sm:space-y-8">
            <button 
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {['Projects', 'Skills', 'About', 'Testimonials'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-xl sm:text-2xl text-white hover:text-accent transition-all hover:scale-105 py-2"
              >
                {item}
              </Link>
            ))}
            
            <button 
              onClick={handleDownload}
              className="btn btn-primary text-lg sm:text-xl mt-6 hover:scale-105 transition-all"
            >
              Download CV
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}