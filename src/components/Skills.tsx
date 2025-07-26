import { Flower } from "lucide-react";
import {
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaGit,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { GiBearFace } from "react-icons/gi";
import {
  SiCplusplus,
  SiFirebase,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiShadcnui,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", icon: <FaReact color="#f2efea" /> },
    { name: "Next", icon: <SiNextdotjs color="#f2efea" /> },
    { name: "JavaScript", icon: <SiJavascript color="#f2efea" /> },
    { name: "TypeScript", icon: <SiTypescript color="#f2efea" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#f2efea" /> },
    { name: "Zustand", icon: <GiBearFace color="#f2efea" /> },
    { name: "shadcn", icon: <SiShadcnui color="#f2efea" /> },
    { name: "GSAP", icon: <Flower color="#f2efea" size={18} /> },
    { name: "NodeJS", icon: <SiNodedotjs color="#f2efea" /> },
    { name: "Express.js", icon: <SiExpress color="#f2efea" /> },
    { name: "MongoDB", icon: <SiMongodb color="#f2efea" /> },
    { name: "Postman", icon: <SiPostman color="#f2efea" /> },
    { name: "Git", icon: <FaGit color="#f2efea" /> },
    { name: "GitHub", icon: <FaGithub color="#f2efea" /> },
    { name: "Python", icon: <FaPython color="#f2efea" /> },
    { name: "Java", icon: <FaJava color="#f2efea" /> },
    { name: "C", icon: <FaC color="#f2efea" /> },
    { name: "C++", icon: <SiCplusplus color="#f2efea" /> },
    { name: "SQL", icon: <SiMysql color="#f2efea" /> },
    { name: "PHP", icon: <FaPhp color="#f2efea" /> },
    { name: "Linux", icon: <FaLinux color="#f2efea" /> },
    { name: "Vercel", icon: <SiVercel color="#f2efea" /> },
    { name: "Firebase", icon: <SiFirebase color="#f2efea" /> },
  ];
  return (
    <div className="mx-auto mt-5 max-w-3xl w-[90%]">
      <h1 className="text-xl font-bold mb-4 underline decoration-wavy decoration-[#f2efea] underline-offset-6">
        Skills
      </h1>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-[#18181b] border border-[#27272a] text-[#e4e4e7] rounded-[5px] px-4 py-2 text-sm shadow hover:shadow-lg transition hover:border-gray-700"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
