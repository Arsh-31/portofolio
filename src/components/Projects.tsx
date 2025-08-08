"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "Scribe",
    description:
      "Scribe is a clean and intuitive note-taking app that helps you capture ideas, draft thoughts, and organize them effortlessly — making writing feel simple and enjoyable.",
    imageUrl: "/images/live1.png",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Firebase"],
    liveLink: "https://scribe-gold.vercel.app",
    repoLink: "https://github.com/Arsh-31/scribe",
    status: "Running",
  },

  {
    title: "Myth & Moss",
    description:
      "A whimsical, parchment-styled digital newspaper chronicling enchanted flora, forgotten constellations, lunar myths, and eerie folklore. Built with a love for mystery, storytelling, and the strange beauty of old paper.",
    imageUrl: "/images/myth.png",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    liveLink: "https://myth-moss.vercel.app",
    repoLink: "https://github.com/Arsh-31/myth-moss",
    status: "Running",
  },
  {
    title: "Pathfinder-Visualizer",
    description:
      "An interactive tool that visually demonstrates pathfinding algorithms like A and Dijkstra, showing how they navigate a grid or maze to find the shortest path.",
    imageUrl: "/images/pathfinder.png",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    liveLink: "https://pathfinding-visualizer-swart.vercel.app",
    repoLink: "https://github.com/Arsh-31/Pathfinding-visualizer",
    status: "Running",
  },
  {
    title: "Next-Auth",
    description:
      "A minimal yet secure authentication system built with Next.js and NextAuth.js, offering multi-provider login, smooth session handling, and effortless integration.",
    imageUrl: "/images/next.png",
    techStack: ["Next.js"],
    liveLink: "",
    repoLink: "https://github.com/Arsh-31/next-auth",
    status: "Running",
  },
  {
    title: "TypeWriter",
    description:
      "Typewriter is a sleek and engaging typing speed test app that tracks WPM and accuracy in real-time, rewarding your progress with confetti when you finish.",
    imageUrl: "/images/type.png",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Firebase"],
    liveLink: "",
    repoLink: "https://github.com/Arsh-31/TypeWriter",
    status: "Building",
  },
  {
    title: "Vesperal",
    description:
      "A minimal and aesthetic productivity platform that combines a Pomodoro timer, simple to-dos, and daily motivation to help you stay focused and inspired.",
    imageUrl: "/images/live2.png",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Zustand",
    ],
    liveLink: "https://vesperal-i7eilwf42-arsh31s-projects.vercel.app",
    repoLink: "https://github.com/Arsh-31/Vesperal",
    status: "Running",
  },
  {
    title: "PitchFlow",
    description:
      "Pitchflow is an AI-powered marketing copy generator that blends smart language models with a sleek interface to create persuasive, high-converting content tailored to your brand and audience.",
    imageUrl: "/images/pitchflow.png",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Cohere API",
    ],
    liveLink: "",
    repoLink: "https://github.com/Arsh-31/pitch-flow",
    status: "Running",
  },
];

export default function ProjectCard() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  function StatusTag({ status }: { status: string }) {
    const base = "text-xs font-medium px-2 py-0.5 rounded-sm";

    if (status === "Running") {
      return (
        <span
          className={`${base} bg-green-700/20 text-green-400 border border-green-600`}
        >
          ● Running
        </span>
      );
    } else if (status === "Building") {
      return (
        <span
          className={`${base} bg-red-700/20 text-red-400 border border-red-600`}
        >
          ● Building
        </span>
      );
    }

    return null;
  }

  return (
    <div className="mx-auto mt-5 max-w-3xl w-[90%]">
      <h1 className="text-xl font-bold mb-4 underline decoration-wavy decoration-[#f2efea] underline-offset-6">
        Projects
      </h1>

      <div className="grid gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-[#18181b] border border-gray-600 rounded-md overflow-hidden shadow-md hover:shadow-lg transition w-full relative group"
          >
            {/* Clickable Image */}
            <Image
              width={300}
              height={200}
              src={project.imageUrl}
              alt={project.title}
              className="md:p-2 md:rounded-xl border-0 w-full md:w-1/4 h-48 md:h-auto object-cover cursor-pointer"
              onClick={
                project.liveLink !== ""
                  ? () => window.open(project.liveLink, "_blank")
                  : undefined
              }
            />

            {/* Right Content */}
            <div className="flex flex-col justify-between p-5 w-full text-[#e4e4e7] relative">
              {/* Top Right Links */}
              <div className="absolute top-4 right-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.liveLink !== "" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live
                  </a>
                )}
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="text-base" />
                  Code
                </a>
              </div>

              {/* Title & Description */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <StatusTag status={project.status} />
                </div>
                <p className="text-md mb-4">{project.description}</p>
              </div>

              {/* Tech Stack */}
              {/* <div className="flex flex-wrap gap-2 pt-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#27272a] text-xs px-2 py-1 rounded-[3px] hover:bg-[#3f3f46] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {projects.length > 2 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-sm text-[#e4e4e7] transition flex w-full p-2 rounded-lg items-center  bg-[#1f1f21] hover:bg-[#27272a] justify-center gap-1 mx-auto"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
