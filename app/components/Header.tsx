// "use client"
// import { useEffect, useState } from "react"

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   useEffect(() => {
//     const smoothScroll = (e: MouseEvent) => {
//       const target = e.target as HTMLAnchorElement
//       if (target.hash) {
//         e.preventDefault()
//         const element = document.querySelector(target.hash)
//         if (element) {
//           element.scrollIntoView({
//             behavior: "smooth",
//           })
//         }
//       }
//     }

//     const links = document.querySelectorAll('a[href^="#"]')
//     links.forEach((link) => link.addEventListener("click", smoothScroll))

//     return () => {
//       links.forEach((link) => link.removeEventListener("click", smoothScroll))
//     }
//   }, [])

//   // Function to handle PDF download
//   const handleDownload = async () => {
//     // Path to the PDF in the public folder
//     const pdfUrl = "/SalihCV.pdf";

//     try {
//       // Check if the file exists by fetching it
//       const response = await fetch(pdfUrl);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch the PDF: ${response.statusText}`);
//       }

//       // Create a temporary link element
//       const link = document.createElement('a');
//       link.href = pdfUrl;
//       link.download = 'SalihCV.pdf'; // The name of the downloaded file
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error("Error downloading the PDF:", error);
//       alert("Failed to download the PDF. Please check if the file exists at the correct path.");
//     }
    
//     // Close mobile menu after download is initiated
//     setIsMenuOpen(false);
//   }

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   // Function to close the mobile menu
//   const closeMenu = () => {
//     setIsMenuOpen(false)
//   }

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-primary bg-opacity-90 text-quaternary">
//       <nav className="container mx-auto px-6 py-4">
//         {/* Desktop Menu */}
//         <ul className="hidden md:flex justify-center space-x-8 items-center">
//           <li>
//             <a href="#hero" className="hover:text-tertiary transition-colors">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#projects" className="hover:text-tertiary transition-colors">
//               Projects
//             </a>
//           </li>
//           <li>
//             <a href="#skills" className="hover:text-tertiary transition-colors">
//               Skills
//             </a>
//           </li>
//           <li>
//             <a href="#about" className="hover:text-tertiary transition-colors">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#testimonials" className="hover:text-tertiary transition-colors">
//               Testimonials
//             </a>
//           </li>
//           <li>
//             <button 
//               onClick={handleDownload}
//               className="bg-tertiary text-primary px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
//             >
//               Download CV
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex justify-between items-center">
//           <a href="#hero" className="text-lg font-bold">Salih</a>
//           <button 
//             onClick={toggleMenu} 
//             className="text-quaternary focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4">
//             <ul className="flex flex-col space-y-4">
//               <li>
//                 <a 
//                   href="#hero" 
//                   className="block hover:text-tertiary transition-colors py-2"
//                   onClick={closeMenu}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   href="#projects" 
//                   className="block hover:text-tertiary transition-colors py-2"
//                   onClick={closeMenu}
//                 >
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   href="#skills" 
//                   className="block hover:text-tertiary transition-colors py-2"
//                   onClick={closeMenu}
//                 >
//                   Skills
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   href="#about" 
//                   className="block hover:text-tertiary transition-colors py-2"
//                   onClick={closeMenu}
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a 
//                   href="#testimonials" 
//                   className="block hover:text-tertiary transition-colors py-2"
//                   onClick={closeMenu}
//                 >
//                   Testimonials
//                 </a>
//               </li>
//               <li className="pt-2">
//                 <button 
//                   onClick={handleDownload}
//                   className="w-full bg-tertiary text-primary px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
//                 >
//                   Download CV
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }


"use client"
import { useEffect, useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
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

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", smoothScroll as EventListener))

    return () => {
      links.forEach((link) => link.removeEventListener("click", smoothScroll as EventListener))
    }
  }, [])

  // Function to handle PDF download
  const handleDownload = async (): Promise<void> => {
    // Path to the PDF in the public folder
    const pdfUrl = "/SalihCV.pdf";

    try {
      // Check if the file exists by fetching it
      const response = await fetch(pdfUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch the PDF: ${response.statusText}`);
      }

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'SalihCV.pdf'; // The name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the PDF:", error);
      alert("Failed to download the PDF. Please check if the file exists at the correct path.");
    }
    
    // Close mobile menu after download is initiated
    setIsMenuOpen(false);
  }

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to close the mobile menu
  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary bg-opacity-90 text-quaternary">
      <nav className="container mx-auto px-6 py-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-8 items-center">
          <li>
            <a href="#hero" className="hover:text-tertiary transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-tertiary transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-tertiary transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-tertiary transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-tertiary transition-colors">
              Testimonials
            </a>
          </li>
          <li>
            <button 
              onClick={handleDownload}
              className="bg-tertiary text-primary px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
            >
              Download CV
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center">
          <a href="#hero" className="text-lg font-bold">Salih</a>
          <button 
            onClick={toggleMenu} 
            className="text-quaternary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="#hero" 
                  className="block hover:text-tertiary transition-colors py-2"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="block hover:text-tertiary transition-colors py-2"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="block hover:text-tertiary transition-colors py-2"
                  onClick={closeMenu}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block hover:text-tertiary transition-colors py-2"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="block hover:text-tertiary transition-colors py-2"
                  onClick={closeMenu}
                >
                  Testimonials
                </a>
              </li>
              <li className="pt-2">
                <button 
                  onClick={handleDownload}
                  className="w-full bg-tertiary text-primary px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                >
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}