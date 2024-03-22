import React, { useState } from "react";
import icon from "../assets/icon-quote.svg";
const About = ({ about, services, testimonials }) => {
  console.log(testimonials);
  return (
    <article className="about  active">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>&quot;{about.quote}&quot;</p>
        <p>{about.subTitle}</p>
        <p>{about.description}</p>
      </section>
      <Services services={services} />
      <Testimonials testimonials={testimonials} />
    </article>
  );
};

const Services = ({ services }) => {
  return (
    <section className="service">
      <h3 className="h3 service-title">Services</h3>

      <ul className="service-list">
        {services.map((val) => {
          return (
            <li key={val.name} className="service-item">
              <div className="service-icon-box">
                <img src={val.image.url} alt={val.name} width="100" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{val.name}</h4>
                <h5 className="h5 service-charge">{val.charge}</h5>
                <p className="service-item-text">{val.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Testimonials = ({ testimonials }) => {
  // To determine the which detail to show
  const [detail, setDetail] = useState(null);
  return (
    <>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((val) => {
            return (
              <li
                key={val.name}
                className="testimonials-item"
                onClick={() => setDetail(val)}
              >
                <div className="content-card">
                  <figure className="testimonials-avatar-box">
                    <img src={val.image.url} alt={val.name} width="60" />
                  </figure>

                  <h4 className="h4 testimonials-item-title">{val.name}</h4>
                  <h5 className="h5 position">{val.position}</h5>
                  <div className="testimonials-text">
                    <p>{val.review.slice(0, 100)}...</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <TestimonialBox detail={detail} setDetail={setDetail} />
    </>
  );
};

const TestimonialBox = ({ detail, setDetail }) => {
  if(detail){
  return (
    <div className={detail ? "modal-container active" : "modal-container"}>
      <div className={detail ? "overlay active" : "overlay"}></div>

      <section className="testimonials-modal">
        <button className="modal-close-btn">
          <i className="bi bi-x" onClick={()=>setDetail(null)}></i>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={detail.image.url} alt={detail.name} />
          </figure>

          <img src={icon} alt="quote icon" />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title">{detail.name}</h4>

          <h5 className="h5 position">{detail.position}</h5>

          <div>
            <p>
             {detail.review}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
};

export default About;
