'use client'

import { motion } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
      <Header />
      <main className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Hero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 sm:px-6 lg:px-8"
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 sm:px-6 lg:px-8"
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 sm:px-6 lg:px-8"
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 sm:px-6 lg:px-8"
        >
          <Testimonials />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
