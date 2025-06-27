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
  SiShadcnui,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", icon: <FaReact color="#343330" /> },
    { name: "Next", icon: <SiNextdotjs color="#343330" /> },
    { name: "JavaScript", icon: <SiJavascript color="#343330" /> },
    { name: "TypeScript", icon: <SiTypescript color="#343330" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#343330" /> },
    // { name: "Zustand", icon: <SiZustand color="#f2efea" /> },
    { name: "shadcn", icon: <SiShadcnui color="#343330" /> },
    { name: "NodeJS", icon: <SiNodedotjs color="#343330" /> },
    { name: "Express.js", icon: <SiExpress color="#343330" /> },
    { name: "MongoDB", icon: <SiMongodb color="#343330" /> },
    { name: "Git", icon: <FaGit color="#343330" /> },
    { name: "GitHub", icon: <FaGithub color="#343330" /> },
    { name: "Python", icon: <FaPython color="#343330" /> },
    { name: "Java", icon: <FaJava color="#343330" /> },
    { name: "C", icon: <FaC color="#343330" /> },
    { name: "C++", icon: <SiCplusplus color="#343330" /> },
    { name: "SQL", icon: <SiMysql color="#343330" /> },
    { name: "PHP", icon: <FaPhp color="#343330" /> },
    { name: "Vercel", icon: <SiVercel color="#343330" /> },
    { name: "Firebase", icon: <SiFirebase color="#343330" /> },
  ];
  return (
    <div className="mx-auto mt-12 max-w-3xl w-[90%]">
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex font-normal items-center gap-2 bg-transparent border-1 border-[#343330] text-[#343330] rounded-[5px] px-4 py-2 text-sm shadow hover:shadow-lg hover:bg-[#b6dad6] transition hover:border-gray-700"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
