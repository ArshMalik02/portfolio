export default function ExperienceCard({ job }) {
  return (
    <div className="item">
      <div className="head">
        {job.name}{" "}
        <span className="meta">
          <span className="dot">· </span>
          {job.role} · {job.years}
        </span>
      </div>
      <p>
        {job.description}
        {job.link && (
          <>
            <a href={job.link.url}>{job.link.text}</a>
            <span className="arrow">↗</span>
          </>
        )}
      </p>
    </div>
  );
}
