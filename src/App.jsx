import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchdata } from "./Constants/script.js";
import Asidebar from "./Components/Asidebar.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Timeline from "./Components/Timeline.jsx";
import Skill from "./Components/Skill.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Contact from "./Components/Contact.jsx";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [active, setActive] = useState({ index: 0, value: "About" });

  // let userData = null;
  useEffect(() => {
    async function promise() {
      let val = await fetchdata();
      setUserData(val);
      // userData = val;
    }
    promise();
  }, []);
  console.log(userData);
  if (userData) {
    return (
      <main>
        <Asidebar
          about={userData.about}
          social_handles={userData.social_handles}
          email={userData.email}
          active={active}
        />
        <div className="main-content">
          <Navbar setActive={setActive} active={active} />
          <About
            about={userData.about}
            testimonials={userData.testimonials}
            services={userData.services}
            active={active}
          />
          <Timeline timeline={userData.timeline} active={active} />
          <Skill skills={userData.skills} active={active} />
          <Portfolio projects={userData.projects} active={active} />
          <Contact active={active} />
        </div>
      </main>
    );
  }
};

export default App;
