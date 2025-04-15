"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Tea Time Qatar",
    role: "Marketing Manager",
    company: "Tea Time Qatar",
    content: "Working with Muhammed was an absolute pleasure. His attention to detail and creative vision helped us create stunning visual content that significantly boosted our social media engagement.",
  },
  {
    id: "testimonial-2",
    name: "King Tea",
    role: "Brand Manager",
    company: "King Tea",
    content: "Muhammed's photography and videography skills are exceptional. He captured our brand's essence perfectly and delivered content that exceeded our expectations.",
  },
  {
    id: "testimonial-3",
    name: "Ahlanz Fragrance",
    role: "CEO",
    company: "Ahlanz Fragrance",
    content: "The quality of work and professionalism Muhammed brings to every project is outstanding. His ability to tell stories through visuals is truly remarkable.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            What my clients say about working with me and the results we've achieved together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background/50 backdrop-blur-sm border border-accent/10 rounded-xl p-6 hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <p className="text-text-secondary flex-grow mb-6">
                  {testimonial.content}
                </p>
                <div className="mt-auto">
                  <h3 className="font-semibold text-lg">
                    {testimonial.name || "Anonymous"}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
