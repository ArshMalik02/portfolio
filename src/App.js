import React from "react";
import ExperienceCard from "./components/ExperienceCard";
import ThemeToggle from "./components/ThemeToggle";
import experience from "./data/experience.json";
import projects from "./data/projects.json";

function App() {
  return (
    <>
      <ThemeToggle />
      <main>
        <header>
          <img
            className="photo"
            src="/headshot.jpg"
            alt="Arsh Malik"
            width="72"
            height="72"
          />
          <h1>Arsh Malik</h1>
          <p className="tag">
            software engineer at siemens eda. distributed systems + resource
            management. <em>building quantum-HPC scheduling in public.</em>
          </p>
          <nav className="links" aria-label="Links">
            <a href="https://github.com/ArshMalik02">github</a>
            <a href="https://www.linkedin.com/in/arsh-malik/">linkedin</a>
            <a href="https://x.com/arshmalik02">x</a>
            <a href="https://substack.com/@arshmalik">substack</a>
            <a href="mailto:arshmalik02@gmail.com">email</a>
          </nav>
        </header>

        <section>
          <h2>now</h2>
          <p>
            building QPU-aware scheduling in public: teaching schedulers like
            slurm to track a QPU's live state (calibration drift, availability)
            instead of treating it as static. first milestone is a simulated
            comparison against static allocation. build logs on{" "}
            <a href="https://x.com/arshmalik02">x</a>, write-ups on{" "}
            <a href="https://substack.com/@arshmalik">substack</a>.
          </p>
        </section>

        <section>
          <h2>work</h2>
          {experience.jobs.map((job) => (
            <ExperienceCard key={job.name} job={job} />
          ))}
          <p className="earlier">
            <b>earlier:</b> {experience.earlier}
          </p>
        </section>

        <section>
          <h2>projects</h2>
          {projects.projects.map((p) => (
            <div className="item" key={p.name}>
              <div className="head">
                <a href={p.url}>{p.name}</a>
                <span className="arrow">↗</span>
              </div>
              <p>{p.description}</p>
            </div>
          ))}
          <p className="earlier">
            <a href={projects.more.url}>{projects.more.text}</a>
            <span className="arrow">↗</span>
          </p>
        </section>

        <section>
          <h2>writing</h2>
          <p>
            <a href="https://substack.com/@arshmalik">substack</a>
            <span className="arrow">↗</span>{" "}
            <span className="meta">· long-form write-ups at each milestone</span>
          </p>
        </section>
      </main>
      <footer>
        <span>plumbing &gt;&gt; porcelain</span>
      </footer>
    </>
  );
}

export default App;
