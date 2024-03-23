import React from "react";

const Skill = ({ skills, active}) => {
  return (
    <>
	<article className={active.value == "Skills" ? "resume active" :"resume"}>
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
         {
			skills.map(val=>{
				return(
					<li key={val.name} className="skills-item">
					<div className="title-wrapper">
						<img src={val.image.url} alt={val.name} />
					  <h5 className="h5">{val.name}</h5>
					  <data value={val.percentage}>{val.percentage}%</data>
					</div>
		
					<div className="skill-progress-bg">
					  <div className="skill-progress-fill" style={{width: `${val.percentage}%`}}></div>
					</div>
				  </li>
				)
			})
		 }
        </ul>
      </section>
	</article>
    </>
  );
};

export default Skill;
