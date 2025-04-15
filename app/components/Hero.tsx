import Image from "next/image";
import image from "../../public/saaly.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 z-0" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 mt-14">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Muhammed Salih
            </h1>
            <h2 className="text-2xl md:text-3xl text-accent font-medium">
              Videographer & Content Creator
            </h2>
            <p className="text-lg text-white/90 max-w-lg">
              Capturing moments, crafting stories, and creating engaging content
              that resonates with audiences worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn btn-primary"
              >
                View My Work
              </a>
              <a
                href="https://wa.me/+97470062657"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src={image}
                alt="Muhammed Salih"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl -z-10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
