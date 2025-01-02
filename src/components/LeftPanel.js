import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import useActiveSection from "../hooks/useActiveSection";
import headshot from "../images/headshot.png";

const LeftPanel = () => {
  const sectionIds = ["about", "experience", "projects"];
  const activeSection = useActiveSection(sectionIds);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="bg-custom-bg flex justify-end md:bg-inherit h-16 w-full fixed top-0 z-50">
        <button
          className={`text-2xl md:ml-12 mt-4 fixed mr-12 md:hidden focus:outline-none ${
            isMobileNavOpen ? "text-custom-green" : "text-white"
          }`}
          onClick={toggleMobileNav}
        >
          <FontAwesomeIcon icon={isMobileNavOpen ? faTimes : faBars} />
        </button>
      </div>

      <nav
        className={`mt-16 md:hidden fixed inset-0 bg-custom-bg bg-opacity-90 flex justify-center items-center font-crimson text-center text-xl z-50 transition-all duration-300 ease-in-out ${
          isMobileNavOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full pointer-events-none"
        } md:space-y-4`}
      >
        <ul>
          {sectionIds.map((section) => (
            <li key={section} className="mb-4">
              <a
                href={`#${section}`}
                className={`relative pb-1 ${
                  activeSection === section ? "text-custom-green" : "text-white"
                }`}
                onClick={toggleMobileNav}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 text-custom-green"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="font-crimson md:w-1/2 md:h-screen flex flex-col md:fixed top-0">
        <div className="text-left ml-12 mr-12 md:ml-32">
          {/* Headshot */}
          <div className="w-40 h-40">
            <img
              src={headshot}
              alt="Arsh Malik"
              className="rounded-full w-full h-full object-cover mt-20 md:mt-32 border-4 border-custom-green shadow-lg"
            />
          </div>
          <h1 className="font-crimson font-bold mt-6 text-5xl md:text-6xl">
            Arsh Malik
          </h1>
          <p className="mt-2 text-lg">
            Trying to push the cutting edge, qubit by qubit
          </p>
          <nav className={`mt-10 md:block hidden md:space-y-4`}>
            <ul>
              {sectionIds.map((section) => (
                <li key={section} className="mb-4">
                  <a
                    href={`#${section}`}
                    className={`relative pb-1 ${
                      activeSection === section
                        ? "text-custom-green"
                        : "text-white"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeSection === section && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 text-custom-green"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex mt-16 space-x-4 hidden md:block">
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
            {/* mailto */}
            <a href="mailto:arshmalik02@gmail.com" className="text-2xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
