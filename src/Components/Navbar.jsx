import React, { useState } from "react";
import { navdata } from "../Constants/script.js";
const Navbar = ({setActive,active}) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navdata.map((val,i) => {
          return (<li key={val} className="navbar-item">
            <button className={active.index == i ? "navbar-link active" : "navbar-link"}  onClick={()=>setActive({index:i,value:val})}>
              {val}
            </button>
          </li>);
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
