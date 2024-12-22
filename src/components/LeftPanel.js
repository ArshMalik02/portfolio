import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import useActiveSection from "../hooks/useActiveSection";

const LeftPanel = () => {
  const sectionIds = ["about", "experience", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="font-serif w-1/2 bg-white h-screen text-black flex flex-col fixed top-0">
      <div className="text-left ml-32 mt-32">
        <h1 className="font-crimson font-bold sm:text-2xl lg:text-6xl">
          Arsh Malik
        </h1>
        {/* <h5 className="mt-5">Learner Developer Researcher</h5> */}
        <h2 className="mt-3 text-2xl">Learner Developer Researcher</h2>
        <p className="mt-5">I like to identify, improvise, and innovate.</p>
        <nav className="mt-20">
          <ul>
            {sectionIds.map((section) => (
              <li key={section} className="mb-4">
                <a
                  href={`#${section}`}
                  className={`relative pb-1 ${
                    activeSection === section ? "text-blue-500" : "text-black"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex mt-40 space-x-4">
          <a
            href="https://github.com/ArshMalik02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/arsh-malik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/malikarsh02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
