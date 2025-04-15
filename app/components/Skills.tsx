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
  { name: "Photography", level: 95 },
  { name: "Videography", level: 90 },
  { name: "Content Creation", level: 92 },
  { name: "DaVinci Resolve", level: 85 },
  { name: "CapCut", level: 88 },
  { name: "Lightroom", level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary text-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-primary rounded-full h-2.5">
                <div
                  className="bg-tertiary h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
