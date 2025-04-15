// import Image from "next/image"

// export default function About() {
//   return (
//     <section id="about" className="py-20 bg-primary text-quaternary">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
//         <div className="md:flex md:items-center">
//           <div className="md:w-1/3 mb-8 md:mb-0">
//             <Image
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1WqtB6s8fBqVGx6bc3gI4nZVp8xkCE.png"
//               alt="Muhammed Salih"
//               width={400}
//               height={400}
//               className="rounded-lg mx-auto object-cover"
//             />
//           </div>
//           <div className="md:w-2/3 md:pl-12">
//             <p className="mb-4">
//               Hi, I'm Muhammed Salih, a passionate photographer, videographer, and social media content creator with
//               over 5 years of experience capturing compelling visual stories.
//             </p>
//             <p className="mb-4">
//               I specialize in creating authentic, engaging content that resonates with audiences across platforms. My
//               work spans from breathtaking landscape photography to dynamic brand campaigns and immersive travel content
//               that transports viewers to new worlds.
//             </p>
//             <p>
//               When I'm not behind the camera, I'm exploring new locations, experimenting with innovative visual
//               techniques, or collaborating with brands and fellow creators to bring unique visions to life. My mission
//               is to tell stories that inspire, connect, and leave a lasting impression.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import Image from "next/image";
 import image from "../../public/saaly.jpg"

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary text-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src={image}
              alt="Muhammed Salih"
              width={400}
              height={400}
              className="rounded-lg mx-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="mb-4">
              Hi, I'm Muhammed Salih, an enthusiastic photographer,
              videographer, and social media content creator with 6 months of
              experience in crafting visually appealing stories.
            </p>
            <p className="mb-4">
              I'm dedicated to producing authentic and creative content that
              connects with viewers. My work includes stunning landscape
              photography, engaging short videos, and fresh social media content
              that brings ideas to life.
            </p>
            <p>
              When I'm not shooting or editing, I'm exploring new places for
              inspiration, learning cutting-edge techniques, or working with
              others to create impactful visuals. My goal is to develop my
              skills further and create content that captivates and inspires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
