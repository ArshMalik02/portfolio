import React from "react";
import Card from "./ExperienceCard";

import experienceData from "../data/experience.json";
import projectsData from "../data/projects.json";

const RightContent = () => {
  return (
    <div className="text-left font-crimson mt-32 overflow-y-auto mr-32">
      <section id="about" className="offset-anchor">
        <p className="">
          Hi, I'm Arsh Malik. I'm a full-stack developer with a passion for
          building beautiful and functional web applications. I have experience
          working with JavaScript, React, Node.js, and more. I'm always looking
          to learn new technologies and improve my skills. Hi, I'm Arsh Malik.
          I'm a full-stack developer with a passion for building beautiful and
          functional web applications. I have experience working with
          JavaScript, React, Node.js, and more. I'm always looking to learn new
          technologies and improve my skills. Hi, I'm Arsh Malik. I'm a
          full-stack developer with a passion for building beautiful and
          functional web applications. I have experience working with
          JavaScript, React, Node.js, and more. I'm always looking to learn new
          technologies and improve my skills. Hi, I'm Arsh Malik. I'm a
          full-stack developer with a passion for building beautiful and
          functional web applications. I have experience working with
          JavaScript, React, Node.js, and more. I'm always looking to learn new
          technologies and improve my skills. Hi, I'm Arsh Malik. I'm a
          full-stack developer with a passion for building beautiful and
          functional web applications. I have experience working with
          JavaScript, React, Node.js, and more. I'm always looking to learn new
          technologies and improve my skills.
        </p>
      </section>
      <section id="experience" className="offset-anchor mt-32">
        <h2 className="text-4xl font-crimson font-bold mb-10">Experience</h2>
        {experienceData.map((experience, index) => (
          <Card
            key={index}
            dateRange={experience.dateRange}
            title={experience.title}
            company={experience.company}
            description={experience.description}
            skills={experience.skills}
            companyUrl={experience.companyUrl}
          />
        ))}
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          purus ut nunc ultricies aliquam. Nullam nec purus ut nunc ultricies
          aliquam. Nullam nec purus ut nunc ultricies aliquam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc
          ultricies aliquam. Nullam nec purus ut nunc ultricies aliquam. Nullam
          nec purus ut nunc ultricies aliquam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam nec purus ut nunc ultricies
          aliquam. Nullam nec purus ut nunc ultricies aliquam. Nullam nec purus
          ut nunc ultricies aliquam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam nec purus ut nunc ultricies aliquam. Nullam
          nec purus ut nunc ultricies aliquam. Nullam nec purus ut nunc
          ultricies aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam nec purus ut nunc ultricies aliquam. Nullam nec purus ut
          nunc ultricies aliquam. Nullam nec purus ut nunc ultricies aliquam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          purus ut nunc ultricies aliquam. Nullam nec purus ut nunc ultricies
          aliquam. Nullam nec purus ut nunc ultricies aliquam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam nec purus ut nunc
          ultricies aliquam. Nullam nec purus ut nunc ultricies aliquam. Nullam
          nec purus ut nunc ultricies aliquam. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam nec purus ut nunc ultricies
          aliquam. Nullam nec purus ut nunc ultricies aliquam. Nullam nec purus
          ut nunc ultricies aliquam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam nec purus ut nunc ultricies aliquam. Nullam
          nec purus ut nunc ultricies aliquam. Nullam nec purus ut nunc
          ultricies aliquam.
        </p>
      </section>
      <section id="projects" className="offset-anchor mt-32">
      <h2 className="text-4xl font-crimson font-bold mb-10">Projects</h2>
        {projectsData.map((project, index) => (
          <Card
            key={index}
            dateRange={project.dateRange}
            title={project.title}
            company={project.company}
            description={project.description}
            skills={project.skills}
            companyUrl={project.companyUrl}
          />
        ))}
      </section>
      <section id="contact" className="offset-anchor mt-32">
        <p className="mt-20">Get in touch with me:</p>
        <p className="mt-5">Email: arshmalik02@gmail.com</p>
      </section>
    </div>
  );
};

export default RightContent;
