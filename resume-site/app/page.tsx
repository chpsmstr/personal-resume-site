"use client";

import Navbar from "./components/navbar";
import Icon from "./components/icon-component";
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


  const tldr = (
    <p id="about-text" className="mt-4 px-4 text-1">
      I'm a {age} year old full-stack developer with a passion for solving
      complex problems and creating efficient systems. I'm a graduate of the
      University of British Columbia with a degree in Computer Science, and I am
      always seeking new challenges and opportunities for growth.
    </p>
  );

  const full = (
    <p id="about-text" className="mt-4 px-4 text-1">
      I am a {age} year old full-stack developer driven by a commitment to solving complex problems and creating efficient systems. My journey began at the University of British Columbia, where I earned a degree in Computer Science and a minor in Mathematics. My hands-on experience in full-stack development has equipped me with a versatile skill set. I'm always looking for opportunities to contribute to meaningful projects and collaborate with passionate people.
      <br />
      <br />
      Outside of work, I enjoy strength training, which helps me stay disciplined and focused both in and out of the gym.
    </p>
  )

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
      <div className="container flex flex-col gap-24 md mx-auto p-8 place-content-center w-full h-screen animate-fade-in-up">
        <div>
          <h1 className="title font-black text-center md:mt-10 mt-4 md:my-8 space-y-2">
            HI! I'M ANKKIT
          </h1>

          <p className="text-center mt-4 px-4 md:px-8 heading-3">
            Welcome to my portfolio! I'm a full-stack developer who loves creating elegant and efficient applications. Take a look around to see what I've been creating.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div
            id="contact-icons"
            className=" flex justify-between {items-center} p-4 w-80 max-w-sm mx-auto"
          >
            <Icon
              link="https://www.linkedin.com/in/ankkitp"
              PropIcon={FaLinkedin}
              size={3}
            />

            <Icon link="mailto:ankkit@ankkitp.com" PropIcon={MdEmail} size={3} />

            <Icon
              link="https://github.com/chpsmstr"
              PropIcon={FaGithub}
              size={3}
            />
          </div>
        </div>
        <Link href={"#projects"}>
          <div className="flex justify-center items-center rounded-full p-4 bg-violet-500 w-80 max-w-sm mx-auto">
            <h2 className="heading-1 text-white">Projects</h2>
          </div>
        </Link>
      </div>

      <div
        id="about"
        className="container mx-auto md:p-8 p-4 w-full h-screen md:h-150 grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-2"
      >
        {/* Split into about and skills */}
        <div className="about-section ">
          <span className="flex justify-between items-center px-4">
            <h2 className="heading-1 font-bold text-center">
              About Me
            </h2>
            <span className="flex space-x-4">
              <h2
                onClick={() => setIsTLDR(true)}
                className={`${
                  isTLDR ? "underline" : ""
                } cursor-pointer heading-1 font-bold text-center`}
              >
                TLDR
              </h2>
              <h2>
                <span className="mx-1 heading-1 font-bold text-center">
                  |
                </span>
              </h2>
              <h2
                onClick={() => setIsTLDR(false)}
                className={`${
                  !isTLDR ? "underline" : ""
                } cursor-pointer heading-1 font-bold text-center`}
              >
                Full
              </h2>
            </span>
          </span>
          {isTLDR ? tldr : full}
        </div>
        <div className="skills-section ">
          <h2 className="heading-1 font-bold text-center">Skills</h2>
          <div className="skill-bubbles flex flex-wrap justify-center items-center mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="skill-bubble bg-violet-500 text-white p-2 rounded-sm m-1"
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
        <h2 className="heading-1 font-bold mb-4">Projects</h2>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
