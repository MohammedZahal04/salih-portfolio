"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import image from "../../public/saaly.jpg";

export default function About() {
  return (
    <section id="about" className="section bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get to know the person behind the lens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src={image}
                alt="Muhammed Salih"
                fill
                className="rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl -z-10 blur-xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="text-accent font-semibold">Muhammed Salih</span>, an enthusiastic photographer,
              videographer, and social media content creator with 6 months of
              experience in crafting visually appealing stories.
            </p>
            <p className="text-lg leading-relaxed">
              I'm dedicated to producing authentic and creative content that
              connects with viewers. My work includes stunning landscape
              photography, engaging short videos, and fresh social media content
              that brings ideas to life.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not shooting or editing, I'm exploring new places for
              inspiration, learning cutting-edge techniques, or working with
              others to create impactful visuals. My goal is to develop my
              skills further and create content that captivates and inspires.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                "Photography",
                "Videography",
                "Content Creation",
                "Social Media",
                "Editing",
                "Storytelling",
              ].map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
