import React, { useState } from "react";
import { techStack } from "../Constants/script.js";
const Portfolio = ({ projects, active }) => {
  const [techData, setTechData] = useState("All");
  const [showlist, setShowlist] = useState(false);
  const [showpara, setShowpara] = useState({ index: null, show: false });

  return (
    <article
      className={active.value == "Portfolio" ? "portfolio active" : "portfolio"}
    >
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {techStack.map((val) => {
            return (
              <li className="filter-item">
                <button
                  className={techData == val ? "active" : ""}
                  onClick={() => setTechData(val)}
                >
                  {val}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="filter-select-box">
          <button
            className={showlist ? "filter-select active" : "filter-select"}
            onClick={() => setShowlist(!showlist)}
          >
            <div className="select-value">{techData}</div>

            <div className="select-icon">
              <i className="bi bi-chevron-down"></i>
            </div>
          </button>

          <ul className="select-list">
            {techStack.map((val) => {
              return (
                <li
                  className="select-item"
                  onClick={() => setShowlist(!showlist)}
                >
                  <button onClick={() => setTechData(val)}>{val}</button>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="project-list">
          {techData == "All"
            ? projects.map((val, i) => {
                return (
                  <li key={val._id} className="project-item active">
                    <div className="wrapper">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <a href={val.liveurl} className="path">
                            <i className="bi bi-eye"></i>
                          </a>
                          <a href={val.githuburl} className="path">
                            <i className="bi bi-github"></i>
                          </a>
                        </div>

                        <img src={val.image.url} alt={val.title} />
                      </figure>

                      <h3 className="project-title">{val.title}</h3>

                      <p className="project-category">
                        {val.techStack.map((data) => {
                          return <p className="tech">{data}</p>;
                        })}
                      </p>
                      <div
                        className={
                          showpara.index == i && showpara.show == true
                            ? "description-wrapper active"
                            : "description-wrapper"
                        }
                      >
                        <p className="project-description">{val.description}</p>
                      </div>
                      <button
                        className="learn-more"
                        onClick={() =>
                          setShowpara({ index: i, show: !showpara.show })
                        }
                      >
                        Learn more
                      </button>
                    </div>
                  </li>
                );
              })
            : projects.map((val,i) => {
                return (
                  <>
                    {val.techStack.map((data) => {
                      return techData === data ? (
                        <li key={val._id} className="project-item active">
                          <div className="wrapper">
                            <figure className="project-img">
                              <div className="project-item-icon-box">
                                <a href={val.liveurl} className="path">
                                  <i className="bi bi-eye"></i>
                                </a>
                                <a href={val.githuburl} className="path">
                                  <i className="bi bi-github"></i>
                                </a>
                              </div>

                              <img src={val.image.url} alt={val.title} />
                            </figure>

                            <h3 className="project-title">{val.title}</h3>

                            <p className="project-category">
                              {val.techStack.map((data) => {
                                return <p className="tech">{data}</p>;
                              })}
                            </p>
                            <div
                              className={
                                showpara.index == i && showpara.show == true
                                  ? "description-wrapper active"
                                  : "description-wrapper"
                              }
                            >
                              <p className="project-description">
                                {val.description}
                              </p>
                            </div>
                            <button
                              className="learn-more"
                              onClick={() =>
                                setShowpara({ index: i, show: !showpara.show })
                              }
                            >
                              Learn more
                            </button>
                          </div>
                        </li>
                      ) : null;
                    })}
                  </>
                );
              })}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
