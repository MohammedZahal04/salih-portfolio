"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  // Setup intersection observer to play videos only when visible
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
          // Try to play the video when it becomes visible
          video.play().catch((error) => {
            console.warn("Auto-play was prevented:", error);
          });
        } else {
          // Pause video when not visible
          (entry.target as HTMLVideoElement).pause();
        }
      });
    }, options);

    // Observe all video elements
    Object.values(videoRefs.current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      // Clean up by disconnecting the observer when component unmounts
      observer.disconnect();
    };
  }, []);

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
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
          className="object-cover rounded"
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
            isModal ? "h-64" : "h-48 md:h-64"
          } object-cover rounded`}
          onCanPlay={(e) => {
            // Add a failsafe for autoplay
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
    <section id="projects" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => openModal(project)}
            >
              <div className="relative">
                {renderMedia(project.media, false, index)}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-justify text-loose">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              className="bg-white rounded-lg p-6 max-w-lg w-full mx-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="relative h-64 mb-4">
                {renderMedia(selectedProject.media, true)}
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={closeModal}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
