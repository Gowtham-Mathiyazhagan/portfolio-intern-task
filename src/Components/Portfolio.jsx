import React from "react";

const Portfolio = ({ projects }) => {
  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <ul className="project-list">
        {projects.map((val) => {
          return (
            <li key={val._id} className="project-item active">
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <i className="bi bi-eye"></i>
                  </div>

                  <img src={val.image.url} alt={val.title} />
                </figure>

                <h3 className="project-title">{val.title}</h3>

                <p className="project-category">
                  {val.techStack.map((data) => {
					return <p className="tech">{data}</p>
				  })}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Portfolio;
