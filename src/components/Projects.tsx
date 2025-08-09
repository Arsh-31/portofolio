"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../data/project-data";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectCard() {
  const [showAll, setShowAll] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(
    new Set()
  );
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

  const toggleTechStack = (index: number) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="mx-auto mt-5 max-w-3xl w-[90%]">
      <h1 className="text-xl font-bold mb-4 underline decoration-wavy decoration-[#f2efea] underline-offset-6">
        Projects
      </h1>

      <div className="grid gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#18181b] border border-gray-600 rounded-md overflow-hidden shadow-md hover:shadow-lg transition w-full relative group"
          >
            {/* Main Content Row */}
            <div className="flex flex-col md:flex-row">
              {/* Clickable Image */}
              <Image
                width={300}
                height={200}
                src={project.imageUrl}
                alt={project.title}
                className="md:p-3 md:rounded-xl border-0 w-full md:w-1/4 h-48 md:h-40 object-cover cursor-pointer"
                onClick={
                  project.liveLink !== ""
                    ? () => window.open(project.liveLink, "_blank")
                    : undefined
                }
              />

              {/* Right Content - Clickable */}
              <div
                className="flex flex-col justify-between p-3 md:py-3 md:pr-3 md:pl-0 w-full text-[#e4e4e7] relative cursor-pointer"
                onClick={() => toggleTechStack(index)}
              >
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
                  <p className="text-md">{project.description}</p>
                </div>
              </div>
            </div>

            {/* Tech Stack - Shown underneath when expanded */}
            {/* {expandedProjects.has(index) && (
              <div className="px-3 pb-3 pt-0">
                <hr className="border-gray-600 mb-2" />
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#27272a] text-xs px-2 py-1 rounded-[3px] hover:bg-[#3f3f46] transition text-[#e4e4e7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )} */}

            <AnimatePresence>
              {expandedProjects.has(index) && (
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    height: {
                      duration: 0.4,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <div className="px-3 pb-3 pt-0">
                    <hr className="border-gray-600 mb-2" />
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#27272a] text-xs px-2 py-1 rounded-[3px] hover:bg-[#3f3f46] transition text-[#e4e4e7]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {projects.length > 2 && (
        <div className="text-center mt-6">
          <button
            onClick={() => {
              setShowAll((prev) => !prev);
              setExpandedProjects(new Set());
            }}
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
