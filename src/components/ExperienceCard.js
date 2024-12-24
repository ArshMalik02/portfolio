import React from "react";

const ExperienceCard = ({
  dateRange,
  title,
  company,
  description,
  skills = [],
  companyUrl,
  projectImage,
}) => {
  console.log(projectImage);
  const isProject = projectImage ? true : false;
  return (
    <div className="grid grid-cols-4 gap-6 mb-6 p-4 rounded-lg">
      {/* Date Range Column */}
      <div
        className={`${
          isProject
            ? "relative rounded-lg overflow-hidden"
            : "text-gray-400 text-sm"
        }`}
      >
        {isProject ? (
          <img
            src={projectImage}
            alt={`${title} preview`}
            className="w-full object-cover rounded-lg"
          />
        ) : (
          dateRange
        )}
      </div>

      {/* Content Column */}
      <div className="col-span-3">
        {/* Title & Company Section */}
        <div className="mb-4">
          <h3 className="text-xl">
            {title}
            {company && (
              <>
                <span className="mx-2 text-gray-400">·</span>
                <span className="text-custom-green hover:text-teal-300">
                  {companyUrl ? (
                    <a
                      href={companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      {company}
                      {/* <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg> */}
                    </a>
                  ) : (
                    company
                  )}
                </span>
              </>
            )}
          </h3>
        </div>

        {/* Description */}
        <div className="mb-4 text-gray-400">{description}</div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs rounded-full bg-gray-800 text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
