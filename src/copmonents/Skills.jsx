import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiNextdotjs, SiTypescript, SiDaisyui, SiFirebase } from "react-icons/si";

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  const skills = [
    {
      id: 1,
      icon: <FaHtml5 className="text-orange-600 text-5xl mb-4" />,
      title: "HTML",
      desc: "Experienced in writing clean, semantic, and accessible HTML to create well-structured web pages."
    },
    {
      id: 2,
      icon: <FaCss3Alt className="text-blue-600 text-5xl mb-4" />,
      title: "CSS",
      desc: "Skilled in crafting responsive layouts, modern animations, and pixel-perfect designs using CSS3."
    },
    {
      id: 3,
      icon: <SiTailwindcss className="text-sky-500 text-5xl mb-4" />,
      title: "TailwindCSS",
      desc: "Builds fast, customizable, and mobile-first user interfaces with utility-first CSS classes."
    },
    {
      id: 4,
      icon: <FaBootstrap className="text-purple-600 text-5xl mb-4" />,
      title: "Bootstrap",
      desc: "Proficient in using Bootstrap’s responsive grid and components for quick UI development."
    },
    {
      id: 5,
      icon: <SiDaisyui className="text-pink-500 text-5xl mb-4" />,
      title: "DaisyUI",
      desc: "Leverages DaisyUI components to build elegant, consistent, and theme-ready designs on top of Tailwind."
    },
    {
      id: 6,
      icon: <FaJsSquare className="text-yellow-500 text-5xl mb-4" />,
      title: "JavaScript",
      desc: "Strong knowledge of ES6+ features to add interactivity, dynamic logic, and optimized functionality."
    },
    {
      id: 7,
      icon: <FaReact className="text-blue-500 text-5xl mb-4" />,
      title: "React",
      desc: "Builds reusable components, handles state management, and creates dynamic SPAs with React."
    },
    {
      id: 8,
      icon: <SiRedux className="text-purple-500 text-5xl mb-4" />,
      title: "Redux",
      desc: "Implements predictable state management to scale complex React applications effectively."
    },
    {
      id: 9,
      icon: <SiNextdotjs className="text-black text-5xl mb-4" />,
      title: "Next.js",
      desc: "Creates optimized web apps with SSR, SSG, and API routes using the Next.js React framework."
    },
    {
      id: 11,
      icon: <SiTypescript className="text-blue-600 text-5xl mb-4" />,
      title: "TypeScript",
      desc: "Develops robust applications with static typing, reducing bugs and improving maintainability."
    },
    {
      id: 12,
      icon: <SiFirebase className="text-yellow-600 text-5xl mb-4" />,
      title: "Firebase",
      desc: "Experienced in Firebase Authentication, Firestore, and Hosting to build secure and scalable apps."
    },
  ];

  
  const visibleSkills = showAll ? skills : skills.slice(0, 8);

  return (
    <div className="bg-white pb-14 md:pb-25">
      <div className="max-w-[1140px] mx-auto px-4 text-center">
        
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl text-secondary1 font-bold mb-4">Skills</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-12">
          I specialize in crafting modern, responsive, and scalable applications. 
          These are the core technologies I use to bring ideas to life.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleSkills.map(skill => (
            <div 
              key={skill.id} 
              className="bg-[#FFF8F3] p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 text-left"
            >
              {skill.icon}
              <h3 className="font-semibold text-secondary1 text-lg mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <button 
            onClick={() => setShowAll(true)} 
            className="mt-8 px-6 py-2 bg-primary1 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}
