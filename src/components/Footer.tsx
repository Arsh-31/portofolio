"use client";
import React from "react";
import {
  SiLeetcode, // LeetCode
  SiX, // X (Twitter)
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";

const footerLinks = [
  {
    name: "Github",
    icon: <FaGithub />,
    href: "https://github.com/Arsh-31",
  },
  {
    name: "Twitter",
    icon: <SiX />,
    href: "https://x.com/it_is_ii",
  },
  {
    name: "Leetcode",
    icon: <SiLeetcode />,
    href: "https://leetcode.com/u/Arsh31/",
  },
];

const Footer = () => {
  return (
    <footer className="mx-auto mt-12 max-w-3xl w-[90%]">
      <div className="border-2 rounded-xl border-b-7 border-r-7 p-8">
        <h1 className="text-2xl font-bold mb-4">Reach out to me</h1>
        <p className="mb-6">
          I&apos;m always open to connecting with fellow developers, discussing
          new opportunities, or collaborating on exciting projects. Feel free to
          drop me a message or reach out through any of the platforms below!
        </p>
        <a
          href="mailto:kaurarshpreet746@gmail.com"
          className="text-[#343330] hover:text-[#b6dad6] transition-colors duration-300 inline-block"
          aria-label="Send Email"
        >
          <div className="flex items-center gap-2 bg-transparent border-1 border-[#343330] text-[#343330] rounded-[5px] px-4 py-2 text-sm shadow hover:shadow-lg transition hover:border-gray-700 hover:bg-[#b6dad6] mb-1">
            <Mail size={25} />
            <span>Gmail</span>
          </div>
        </a>
      </div>

      <hr className="h-px mt-8 border-0 dark:bg-gray-700 text-[#343330]" />
      <div className="flex justify-center items-center my-6 text-[#343330]">
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex items-center gap-2 text-sm transition-all duration-300 hover:bg-[#b6dad6] border-1 px-2 py-1 rounded-sm"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
