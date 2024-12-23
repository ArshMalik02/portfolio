import React from "react";
import Card from "./ExperienceCard";

import experienceData from "../data/experience.json";
import projectsData from "../data/projects.json";

const RightContent = () => {
  return (
    <div className="text-left font-crimson mt-32 overflow-y-auto mr-32">
      <section id="about" className="offset-anchor">
        <p>
          Hey there! I'm Arsh, a senior at UCLA studying computer science with a
          passion for quantum computing and software engineering. I'm currently
          diving deep into quantum research at Dr. Jens Palsberg's Lab, where I
          work on formally verifying quantum theorems. When I'm not in the lab,
          you can find me building full-stack applications and working with data
          to empower the open-source community at UCLA.
        </p>
        <br />
        <p>
          My journey in tech has been particularly exciting because it spans
          such diverse industries. From optimizing flavor development at
          Givaudan using machine learning, to empowering World Bank policymakers
          with NLP-driven insights from economics and political science
          journals, to building robust software solutions at Syncari – each role
          has shown me the universal power of computer science. Working across
          the flavors and fragrances, economic policy, and tech sectors has
          taught me that while industries may differ, the fundamentals of
          problem-solving through computer science remain constant. It's this
          versatility that excites me – the ability to craft innovative
          solutions for any challenge, regardless of the domain.
        </p>
        <br />
        <p>
          I'm also deeply involved in the UCLA tech community, having served as
          Dev Team Director for ACM chapter and Engineering Manager at DevX.
          To fulfill my desire to give back to this amazing community, I'm mentoring incoming
          engineering students through MentorSEAS, UCLA Engineering's mentorship
          program.
        </p>
        <br />
        <p>
          When I'm not coding or diving into quantum computing research, I enjoy
          tennis, cricket, and following Formula One. I'm also a fan of live
          plays and performances – because life isn't just about writing code,
          right? Let's connect and chat about quantum computing, software
          development, or maybe even share thoughts on why Ferrari is the best F1 constuctor!
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
