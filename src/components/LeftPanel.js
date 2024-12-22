import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


const LeftPanel = () => {
    return (
        <div className="w-2/4 bg-white h-screen text-black flex flex-col items-center fixed left-0 top-0">
            <div className="text-left">
                <h1 className="mt-20 font-bold sm:text-2xl lg:text-5xl">Arsh Malik</h1>
                {/* <h5 className="mt-5">Learner Developer Researcher</h5> */}
                <h2 className="mt-3 text-xl">Learner Developer Researcher</h2>
                <p className="mt-5">I like to identify, improvise, and innovate.</p>
                <nav className="mt-20">
                    <ul>
                        <li className="mb-4"><a href="#about">About</a></li>
                        <li className="mt-4"><a href="#projects">Projects</a></li>
                        <li className="mt-4"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex mt-40 space-x-4">
                    <a href="https://github.com/ArshMalik02" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/arsh-malik/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                    </a>
                    <a href="https://www.instagram.com/malikarsh02" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel;