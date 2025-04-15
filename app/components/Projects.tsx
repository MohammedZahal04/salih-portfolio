"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface MediaType {
  type: "image" | "video";
  src: string;
}

interface ProjectType {
  title: string;
  description: string;
  media: MediaType;
  tags: string[];
}

const projects: ProjectType[] = [
  {
    title: "Smart Cities with SAP",
    description:
      "A dynamic promotional video showcasing the integration of SAP solutions in modern urban infrastructure. Highlighting real-time data insights, streamlined operations, and digital transformation, this visual narrative emphasizes how SAP drives efficiency and innovation in smart cities.",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dwjhrhcjv/video/upload/v1744657561/d_p0trp1.mp4",
    },
    tags: ["SAP", "Promotional", "Urban Tech"],
  },
  {
    title: "Luxury Perfume Brand Collaborations",
    description:
      "I've partnered with luxury perfume brands to craft elegant visuals and impactful brand stories. From packaging design to digital campaigns, my work captures the essence of each fragrance while maintaining brand identity. Each collaboration reflects my passion for creativity, detail, and the art of scent storytelling.",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dwjhrhcjv/video/upload/v1743611687/copy_CBCF4AC3-E232-4DC5-AE58-A1FD946AB377_jsmegx.mov",
    },
    tags: ["Videography", "Commercial", "Lifestyle"],
  },
  {
    title: "Eternal Vows: Wedding Highlights",
    description:
      "A cinematic wedding promotional video capturing the elegance, emotion, and unforgettable moments of a couple's special day. From heartfelt vows to joyous celebrations, this film-style visual storytelling beautifully showcases the timeless essence of love and commitment.",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dwjhrhcjv/video/upload/v1744658059/693a78bb-eccb-4c32-b703-3b45c56ecf59_xf51mk.mp4",
    },
    tags: ["Wedding", "Cinematography", "Event Promo"],
  },
  {
    title: "Whispers of Forever: Wedding Memories",
    description:
      "An artistic wedding video capturing the romance, joy, and intimate details of a beautiful union. With soft cinematic tones and storytelling visuals, this piece highlights the emotional depth, family bonds, and elegant celebration of a once-in-a-lifetime day.",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dwjhrhcjv/video/upload/v1744657511/d153f4e3-43b1-4071-97cf-07227b8364b8_esbcx9.mp4",
    },
    tags: ["Wedding", "Cinematic", "Love Story"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target as HTMLVideoElement;
          video.play().catch((error) => {
            console.warn("Auto-play was prevented:", error);
          });
        } else {
          (entry.target as HTMLVideoElement).pause();
        }
      });
    }, options);

    Object.values(videoRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const renderMedia = (
    media: MediaType,
    isModal = false,
    index: number | null = null
  ) => {
    if (media.type === "image") {
      return (
        <Image
          src={media.src || "/placeholder.svg"}
          alt=""
          fill
          className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      );
    } else if (media.type === "video") {
      return (
        <video
          ref={(el) => {
            if (index !== null) {
              videoRefs.current[index] = el;
            }
          }}
          autoPlay
          muted
          loop
          playsInline
          controls={isModal}
          preload="metadata"
          className={`w-full ${
            isModal ? "h-[60vh]" : "h-64"
          } object-cover rounded-lg transition-transform duration-300 group-hover:scale-105`}
          onCanPlay={(e) => {
            if (!isModal) {
              (e.target as HTMLVideoElement)
                .play()
                .catch((err) => console.warn("Autoplay prevented:", err));
            }
          }}
        >
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return null;
  };

  return (
    <section id="projects" className="section bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore my latest projects and creative endeavors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card-background shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openModal(project)}
            >
              <div className="relative aspect-video">
                {renderMedia(project.media, false, index)}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card-background rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-text-secondary hover:text-accent transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="relative aspect-video mb-6">
                  {renderMedia(selectedProject.media, true)}
                </div>
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-text-secondary mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
