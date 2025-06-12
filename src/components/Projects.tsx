"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Scribe",
    description:
      "Scribe is a clean and intuitive note-taking app that lets you write, edit, and save rich-text notes with ease.",
    imageUrl: "/images/live1.png",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Firebase"],
    liveLink: "https://scribe-gold.vercel.app",
    repoLink: "https://github.com/Arsh-31/scribe",
    status: "Running",
  },
  {
    title: "Vesperal",
    description:
      "A minimal, aesthetic productivity platform featuring a Pomodoro timer, to-dos, and daily motivation.",
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
    title: "TypeWriter",
    description:
      "Typewriter is a sleek typing speed test app with real-time WPM, accuracy tracking, and confetti celebration.",
    imageUrl: "/images/working.jpg",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Firebase"],
    liveLink: "",
    repoLink: "",
    status: "Building",
  },
  {
    title: "Pathfinder-Visualizer",
    description:
      "A tool that visually demonstrates various pathfinding algorithms (such as A*, Dijkstra) to find the shortest path in a grid or maze.",
    imageUrl: "/images/live3.png",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    liveLink: "https://pathfinding-visualizer-swart.vercel.app",
    repoLink: "https://github.com/Arsh-31/Pathfinding-visualizer",
    status: "Running",
  },
];

export default function ProjectCard() {
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
    <div className="mx-auto mt-12 max-w-3xl w-[90%]">
      <h1 className="text-2xl font-bold mb-8">Projects</h1>

      <div className="grid gap-8">
        {projects.map((project, index) => (
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
              className="rounded-sm border-0 w-full md:w-1/4 h-48 md:h-auto object-cover cursor-pointer m-3"
              onClick={() => window.open(project.liveLink, "_blank")}
            />

            {/* Right Content */}
            <div className="flex flex-col justify-between p-5 w-full text-[#e4e4e7] relative">
              {/* Top Right Links */}
              <div className="absolute top-4 right-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
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
                <p className="text-sm mb-4">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#27272a] text-xs px-2 py-1 rounded-[3px] hover:bg-[#3f3f46] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
