"use client";

import { motion } from "framer-motion";
import { Camera, Video, Palette, Film, Scissors, Image, PenTool, Users, Briefcase } from "lucide-react";

// const skills = [
//   { name: "Photography", level: 95 },
//   { name: "Videography", level: 90 },
//   { name: "Video Editing", level: 85 },
//   { name: "Adobe Lightroom", level: 90 },
//   { name: "Adobe Premiere Pro", level: 85 },
//   { name: "Social Media Strategy", level: 80 },
//   { name: "Content Creation", level: 90 },
//   { name: "Drone Photography", level: 75 },
// ]

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-secondary text-quaternary">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {skills.map((skill, index) => (
//             <div key={index} className="mb-4">
//               <div className="flex justify-between mb-1">
//                 <span className="font-semibold">{skill.name}</span>
//                 <span>{skill.level}%</span>
//               </div>
//               <div className="w-full bg-primary rounded-full h-2.5">
//                 <div className="bg-tertiary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

const skills = [
  { 
    name: "Photography", 
    level: 95, 
    icon: Camera,
    description: "Professional photography with expertise in commercial and brand photography"
  },
  { 
    name: "Videography", 
    level: 90, 
    icon: Video,
    description: "High-quality video production for commercial and promotional content"
  },
  { 
    name: "Content Creation", 
    level: 92, 
    icon: Palette,
    description: "Creative content development for social media and marketing"
  },
  { 
    name: "DaVinci Resolve", 
    level: 85, 
    icon: Film,
    description: "Professional video editing and color grading"
  },
  { 
    name: "CapCut", 
    level: 88, 
    icon: Scissors,
    description: "Quick and efficient social media content editing"
  },
  { 
    name: "Lightroom", 
    level: 90, 
    icon: Image,
    description: "Advanced photo editing and color correction"
  },
];

const additionalSkills = [
  { name: "Social Media Strategy", icon: Users },
  { name: "Color Grading", icon: PenTool },
  { name: "Storyboarding", icon: Palette },
  { name: "Client Management", icon: Users },
  { name: "Brand Development", icon: Briefcase },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Crafting compelling visual stories through photography, videography, and creative content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background/50 backdrop-blur-sm border border-accent/10 rounded-xl p-6 hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <skill.icon className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-base sm:text-lg group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-text-secondary text-sm sm:text-base font-medium">
                  {skill.level}%
                </span>
              </div>
              <p className="text-text-secondary text-sm mb-3">
                {skill.description}
              </p>
              <div className="relative h-2 bg-accent/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-full bg-accent rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-2 bg-accent/10 hover:bg-accent/20 px-4 py-2 rounded-full text-sm sm:text-base transition-colors duration-300"
              >
                <skill.icon className="w-4 h-4 text-accent" />
                <span className="text-text-primary group-hover:text-accent transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
