import { FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="bg-[#eee4cd] relative border-2 rounded-xl mx-auto mt-12 max-w-3xl w-[90%] shadow-lg hover:shadow-xl transition-shadow duration-300 border-b-7 border-r-7">
      <div className="flex border-b-2 relative space-x-2 pl-3">
        <div className="border-3 bg-[#f2d3d1] rounded-full w-5 h-5 my-2"></div>
        <div className="border-3 bg-[#b6dad6] rounded-full w-5 h-5 my-2"></div>
      </div>
      {/* GitHub Icon for large screens */}
      {/* <hr className="" /> */}
      <div className="p-8">
        <div className="">
          <div className="hidden md:flex absolute top-17 right-5 gap-4">
            <a
              href="https://github.com/Arsh-31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile"
              className="text-[#343330] border border-[#343330] rounded-sm px-2.5 py-2 hover:bg-[#b6dad6] transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="mailto:kaurarshpreet746@gmail.com"
              className="text-[#343330] border border-gray-600 rounded-sm px-2.5 py-2 hover:bg-[#b6dad6] transition-colors duration-300"
              aria-label="Send Email"
            >
              <Mail size={23} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/img2.jpg"
              alt="Arsh's GitHub Profile"
              width={96}
              height={96}
              className="rounded-sm border-2 border-[#343330] w-26 h-26 object-cover mx-auto md:mx-0 shadow-md hover:shadow-lg transition-shadow select-none duration-300"
            />
          </div>

          {/* Name and details */}
          <div className="flex flex-col w-full md:ml-8 mt-6 md:mt-0 md:h-full md:justify-center">
            <div className="text-center align-middle md:text-left">
              <h1 className="font-extrabold text-3xl md:text-5xl text-[#343330]">
                Arsh
              </h1>
              <h6 className="text-[#343330] text-xl font-semibold mt-2">
                Software Engineer
              </h6>
            </div>

            {/* GitHub Icon for small screens */}
            <div className="md:hidden mt-4 text-center flex justify-center gap-6">
              <a
                href="https://github.com/Arsh-31"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#343330] hover:text-[#34322b] transition-colors duration-300 inline-block"
                aria-label="Visit GitHub Profile"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="mailto:kaurarshpreet746@gmail.com"
                className="text-[#343330] hover:text-[#34322b] transition-colors duration-300 inline-block"
                aria-label="Send Email"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-8">
          <p className="text-[#343330] font-medium">
            I enjoy building projects and learning about new technologies.
            Always looking to improve and take on new challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
