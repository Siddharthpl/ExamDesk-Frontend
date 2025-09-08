import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
function Navbar() {
  const [classMenuOn, setclassMenuOn] = useState("nav-list");

  const menuOpen = () => {
    setclassMenuOn("nav-lists-open");
  };
  const menuClose = () => {
    setclassMenuOn("nav-list");
  };
  return (
    <>
      <nav>
        <div className="nav-header">
          <img
            src="https://i.postimg.cc/MT5CqzKN/Exam-Pedia.png"
            alt=""
            srcSet=""
          />
          <div className="nav-brand">
            <h1>Exam Desk</h1>
            <h2>Study Materials For Exam</h2>
          </div>
        </div>

        <div className={classMenuOn} onClick={menuClose}>
          <NavLink className="nav-link-close" onClick={menuClose}>
            <CloseIcon />
          </NavLink>

          <NavLink onClick={menuClose} className="nav-links" to="/">
            Home
          </NavLink>

          <NavLink onClick={menuClose} className="nav-links" to="/about">
            About
          </NavLink>

          <NavLink onClick={menuClose} className="nav-links" to="/upload">
            Upload
          </NavLink>

          <NavLink onClick={menuClose} className="nav-links" to="/pyq">
            PYQ
          </NavLink>

          <NavLink onClick={menuClose} className="nav-links" to="/notes">
            Notes
          </NavLink>

          <NavLink onClick={menuClose} className="nav-links" to="/contact">
            Contact
          </NavLink>
        </div>
        <div className="nav-link-mobile" onClick={menuOpen}>
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
