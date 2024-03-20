import React, { useEffect, useState } from "react";
import "./App.css";
import fetchdata from "./Constants/script.js";

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
  return <></>;
};

export default App;
