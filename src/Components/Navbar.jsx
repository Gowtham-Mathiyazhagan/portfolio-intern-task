import React, { useState } from "react";
import { navdata } from "../Constants/script.js";
const Navbar = () => {
	const [active,setActive] = useState(0)
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navdata.map((val,i) => {
          return (<li key={val} className="navbar-item">
            <button className={active == i ? "navbar-link active" : "navbar-link"}  onClick={()=>setActive(i)}>
              {val}
            </button>
          </li>);
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
