import React, { useState } from "react";

// const Asidebar = ({ about, social_handles, email }) => {
//  const [active, setActive] = useState(false)
//   return (
//     <>
//       <aside className={active ? "sidebar active" : "sidebar" }>
//         <div className="sidebar-info">
//           <figure>
//             <img src={about.avatar.url} alt="avatar-img" />
//           </figure>
//           <div className="title-info">
//             <h1>{about.name}</h1>
//             <p>{about.title}</p>
//           </div>
//           <button className="btn-detail" onClick={()=>setActive(!active)}>
//             <i className="bi bi-chevron-down"></i>
//           <span>Show Contact</span>
//           </button>
//         </div>
//         <div className={active ? "sidebar-info-detail active" : "sidebar-info-detail" }>
//           <ul className="personal-detail">
//             <li>
//               <div className="icon-box">
//                 <i className="bi bi-envelope"></i>
//               </div>
//               <div className="contact-info">
//                 <p>EMAIL</p>
//                 <a href={email}>{email}</a>
//               </div>
//             </li>
//             <li>
//               <div className="icon-box">
//                 <i className="bi bi-phone"></i>
//               </div>
//               <div className="contact-info">
//                 <p>PHONE</p>
//                 <a href={about.phoneNumber}>{about.phoneNumber}</a>
//               </div>
//             </li>
//             <li>
//               <div className="icon-box">
//                 <i className="bi bi-calendar3"></i>
//               </div>
//               <div className="contact-info">
//                 <p>BIRTHDAY</p>
//                 <a href="#">June 23, 1982</a>
//               </div>
//             </li>
//             <li>
//               <div className="icon-box">
//                 <i className="bi bi-geo-alt"></i>
//               </div>
//               <div className="contact-info">
//                 <p>LOCATION</p>
//                 <a href="#">{about.address}</a>
//               </div>
//             </li>
//           </ul>
//           <ul className="social-list">
//             {social_handles.map((data) => {
//               return (
//                 <li key={data.platform}  className="social-link">
//                   <i className={`bi bi-${data.platform.toLowerCase()}`}></i>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </aside>
//     </>
//   );
// };

const Asidebar = ({ about, social_handles, email }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <aside className={active ? "sidebar active" : "sidebar"}>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={about.avatar.url} alt="avatar-img" />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              {about.name}
            </h1>

            <p className="title">{about.title}</p>
          </div>
          <button className="info_more-btn" onClick={()=>setActive(!active)}>
            <span>Show Contacts</span>
            <i className="bi bi-chevron-down"></i>
          </button>
        </div>

        <div
          className={active ? "sidebar-info_more active" : "sidebar-info_more"}
        >
          <div className="separator"></div>
          <ul className="personal-detail">
            <li className="contact-item">
              <div className="icon-box">
                <i className="bi bi-envelope"></i>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href={email} className="contact-link">{email} </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <i className="bi bi-phone"></i>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href={about.phoneNumber} className="contact-link">{about.phoneNumber}</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <i className="bi bi-calendar3"></i>
              </div>

              <div className="contact-info">
                <p className="contact-title" >Birthday</p>

                <a className="contact-link">June 23, 1982</a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <i className="bi bi-geo-alt"></i>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address className="contact-link">{about.address}</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            {social_handles.map((data) => {
              return (
                <li key={data.platform} className="social-link">
                  <i className={`bi bi-${data.platform.toLowerCase()}`}></i>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Asidebar;
