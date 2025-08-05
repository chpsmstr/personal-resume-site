"use client";

import Navbar from "./components/navbar";
import Icon from "./components/icon";
import Carousel from "./components/carousel";
// import { Github, Linkedin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import React from "react";

export default function Home() {
  const now = new Date();
  const bday = new Date("2003-04-02");

  var age = now.getFullYear() - bday.getFullYear();
  const monthDiff = now.getMonth() - bday.getMonth();
  const dayDiff = now.getDate() - bday.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  var [isTLDR, setIsTLDR] = React.useState(true); // State to toggle between full and TLDR

  const full = `I am a ${age} year old full stack developer with a passion for problem solving and a love for technology. I am a graduate from the University of British Columbia with a major in Computer Science and a minor in Mathematics. I have experience in full stack development. I am always looking for new challenges and opportunities to learn and grow as a developer.`;

  const tldr = `I'm a ${age} year old full stack developer with a passion for problem solving and a love for technology.`;

  const skills = [
    "JavaScript",
    "Golang",
    "Python",
    "Golang",
    "Java",
    "C++",
    "Linux",
    "Docker",
    "Git",

    "MySQL",

    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",

    "REST APIs",
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-8 items-center w-full h-screen ">
        <h1 className="md:text-5xl text-3xl font-bold text-center md:mt-10 mt-4  flex-col md:my-8 space-y-2">
          HI! I'M ANKKIT
        </h1>

        <p className="text-center mt-4 px-4 text-lg md:text-2xl">
          Welcome to my portfolio site! I'm a passionate developer with a knack
          for creating innovative solutions.
        </p>

        <div className="flex flex-col items-center mt-8 space-y-4">
          <div
            id="contact-icons"
            className=" flex justify-between items-center  p-4 w-80 max-w-sm mx-auto"
          >
            <Icon
              link="https://www.linkedin.com/in/ankkitp"
              PropIcon={FaLinkedin}
              size={3}
            
            />

            <Icon
              link="mailto:"
              PropIcon={MdEmail}
              size={3}
            />

            <Icon
              link="https://github.com/chpsmstr"
              PropIcon={FaGithub}
              size={3}
            />


            {/* <span className="bg-neutral-500 rounded-full p-3">
              <Link
                href="https://www.linkedin.com/in/ankkitp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="md:h-12 md:w-12 h-10 w-10 text-white transition-colors " />
              </Link>
            </span>

            <Link href="mailto:" target="_blank" rel="noopener noreferrer">
              <Mail className="md:h-12 md:w-12 h-10 w-10 text-white transition-colors" />
            </Link>

            <Link
              href="https://github.com/chpsmstr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="md:h-12 md:w-12 h-10 w-10 text-white transition-colors" />
            </Link> */}
          </div>

          <div className="flex justify-center items-center rounded-full p-4 bg-red-500 w-80 max-w-sm mx-auto">
            <h2 className="text-3xl text-white">Projects</h2>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="container mx-auto md:p-8 p-4 w-full h-screen grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-2"
      >
        {/* Split into about and skills */}
        <div className="about-section ">
          <span className="flex justify-between items-center lg:mx-8">
            <h2 className="md:text-3xl text-2xl font-bold text-center">
              About Me
            </h2>
            <span className="flex space-x-4">
              <h2
                onClick={() => setIsTLDR(true)}
                className={`${
                  isTLDR ? "underline" : ""
                } cursor-pointer md:text-3xl text-2xl font-bold text-center`}
              >
                TLDR
              </h2>
              <h2>
                <span className="mx-1 md:text-3xl text-2xl font-bold text-center">
                  |
                </span>
              </h2>
              <h2
                onClick={() => setIsTLDR(false)}
                className={`${
                  !isTLDR ? "underline" : ""
                } cursor-pointer md:text-3xl text-2xl font-bold text-center`}
              >
                Full
              </h2>
            </span>
          </span>
          <p id="about-text" className="text-center mt-4 px-4 text-lg">
            {isTLDR ? tldr : full}
          </p>
        </div>
        <div className="skills-section ">
          <h2 className="md:text-3xl text-2xl font-bold text-center">Skills</h2>
          <div className="skill-bubbles flex flex-wrap  justify-center items-center mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="skill-bubble bg-purple-800 text-white p-2 rounded-sm m-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="container mx-auto p-8 items-center w-full h-screen"
      >
        <h2 className="text-5xl font-bold mb-4">Projects</h2>
        <Carousel />
      </div>
    </div>
  );
}
