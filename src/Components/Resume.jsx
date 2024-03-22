import React from "react";

const Resume = ({ timeline, skills }) => {
  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <Education timeline={timeline} />
    </article>
  );
};

const Education = ({ timeline }) => {
  let education = timeline.filter((val) => val.forEducation);
  education.sort((a, b) => a.startDate.localeCompare(b.startDate));

  return (
    <>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <i className="bi bi-book"></i>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((val) => {
            return (
              <li key={val.company_name} className="timeline-item">
                <h4 className="h4 timeline-item-title">{val.company_name}</h4>

                <span>
                  {val.startDate.split("T")[0]} — {val.endDate.split("T")[0]}
                </span>
                <p className="h5">{val.jobLocation}</p>
                <p className="timeline-text">
                  {val.summary} {val.bulletPoints[0]}
                </p>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};

// const 
export default Resume;
