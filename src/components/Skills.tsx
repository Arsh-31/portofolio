import {
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
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
} from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", icon: <FaReact color="#f2efea" /> },
    { name: "Next", icon: <SiNextdotjs color="#f2efea" /> },
    { name: "JavaScript", icon: <SiJavascript color="#f2efea" /> },
    { name: "TypeScript", icon: <SiTypescript color="#f2efea" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#f2efea" /> },
    { name: "Zustand", icon: <SiTailwindcss color="#f2efea" /> },
    { name: "NodeJS", icon: <SiNodedotjs color="#f2efea" /> },
    { name: "Git", icon: <FaGit color="#f2efea" /> },
    { name: "GitHub", icon: <FaGithub color="#f2efea" /> },
    { name: "Python", icon: <FaPython color="#f2efea" /> },
    { name: "Java", icon: <FaJava color="#f2efea" /> },
    { name: "C", icon: <FaC color="#f2efea" /> },
    { name: "C++", icon: <SiCplusplus color="#f2efea" /> },
    { name: "SQL", icon: <SiMysql color="#f2efea" /> },
    { name: "PHP", icon: <FaPhp color="#f2efea" /> },
    { name: "Vercel", icon: <SiVercel color="#f2efea" /> },
    { name: "Firebase", icon: <SiFirebase color="#f2efea" /> },
  ];
  return (
    <div className="mx-auto mt-12 max-w-3xl w-[90%]">
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
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
