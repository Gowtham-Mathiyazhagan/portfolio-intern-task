import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchdata } from "./Constants/script.js";
import Asidebar from "./Components/Asidebar.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Timeline from "./Components/Timeline.jsx";
import Skill from "./Components/Skill.jsx";

const App = () => {
  const [userData, setUserData] = useState(null);
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
        />
        <div className="main-content">
          <Navbar />
          <About
            about={userData.about}
            testimonials={userData.testimonials}
            services={userData.services}
          />
          <Timeline timeline={userData.timeline} />
          <Skill skills={userData.skills}/>
        </div>
      </main>
    );
  }
};

export default App;
