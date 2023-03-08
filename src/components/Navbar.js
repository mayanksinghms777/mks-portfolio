import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        var nav1 = document.getElementById("collapse");
        nav1.classList.toggle("active1");
      };

      const handleCollapse = () => {
        console.log("handleCollapse");
        var nav = document.getElementById("navbarSupportedContent");
        var btn = document.getElementById("navbarBtn");
        nav.classList.remove("show");
        btn.classList.add("collapsed");
     };

      const handleCollapse1 = () => {
        console.log("handleCollapse1");
        var nav = document.getElementById("collapse");
        nav.classList.add("active1");
     };
     
     useEffect(() => {
        handleCollapse1();
    
      }, []);

    return (
        
        <>
<div className="mobile">
<nav id="collapse" className= "navigation navbar-expand-lg navbar-light bg-light">
  <div class="nav_icon">
    <i className="fas fa-bars"  onClick={handleToggle}></i>
  </div>
  <ul class="nav_list">

    <li class="list-item" data-tooltip="Home">
      <NavLink onClick={handleCollapse1} exact to="/mks-portfolio" activeClassName="active" className="list-item1">
        <i class="fas fa-home"></i>
        <span class="text">Home</span>
      </NavLink>
    </li>
    <li class="list-item" data-tooltip="About Me">
      <NavLink onClick={handleCollapse1} to="/aboutus" activeClassName="active" className="list-item1">
        <i class="fas fa-info"></i>
        <span class="text">About Me</span>
      </NavLink>
    </li>
    <li class="list-item" data-tooltip="Expriences">
      <NavLink onClick={handleCollapse1} to="/expriences" activeClassName="active" className="list-item1">
        <i class="fas fa-briefcase"></i>
        <span class="text">Expriences</span>
      </NavLink>
    </li>
    <li class="list-item" data-tooltip="Educations">
      <NavLink onClick={handleCollapse1} to="/education" activeClassName="active" className="list-item1">
        <i class="fas fa-graduation-cap"></i>
        <span class="text">Educations</span>
      </NavLink>
    </li>
    <li class="list-item" data-tooltip="Projects">
      <NavLink onClick={handleCollapse1} to="/projects" activeClassName="active" className="list-item1">
        <i class="fas fa-tasks"></i>
        <span class="text">Projects</span>
      </NavLink>
    </li>
    <li class="list-item" data-tooltip="GitHub">
      <a onClick={handleCollapse1} target="_blank" href="https://github.com/mayanksinghms777" className="list-item1">
        <i class="fab fa-github"></i>
        <span class="text">GitHub</span>
      </a>
    </li>
    <li class="list-item" data-tooltip="Linked In">
      <a onClick={handleCollapse1} target="_blank" href="https://www.linkedin.com/in/mayank-kumar-singh-b80ab01b7/" className="list-item1">
        <i class="fab fa-linkedin-in"></i>
        <span class="text">Linked In</span>
      </a>
    </li>
    <li class="list-item" data-tooltip="Instagram">
      <a onClick={handleCollapse1} target="_blank" href="https://www.instagram.com/mayanksinghms777/" className="list-item1">
        <i class="fab fa-instagram"></i>
        <span class="text">Instagram</span>
      </a>
    </li>
    <li class="list-item" data-tooltip="Twitter">
      <a onClick={handleCollapse1} target="_blank" href="https://twitter.com/mayanksinghms" className="list-item1">
        <i class="fab fa-twitter"></i>
        <span class="text">Twitter</span>
      </a>
    </li>
  </ul>
</nav>
</div>


<div className="phone">
<nav className="navbar navbar-expand-lg navbar-dark bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">@mayanksinghms777</a>
    <button id="navbarBtn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink onClick={handleCollapse}  exact className="nav-link" activeClassName="active-phone" aria-current="page" to="/mks-portfolio">
          <i className="fas fa-home"></i>
          <span className="link-test">Home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleCollapse}  className="nav-link" activeClassName="active-phone" to="/aboutus">
          <i className="fas fa-info"></i>
          <span className="link-test">About Me</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleCollapse}   className="nav-link" activeClassName="active-phone" to="/expriences">
          <i className="fas fa-briefcase"></i>
          <span className="link-test">Expriences</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink  onClick={handleCollapse}  className="nav-link" activeClassName="active-phone" to="/education">
          <i className="fas fa-graduation-cap"></i>
          <span className="link-test">Education</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleCollapse}  className="nav-link" activeClassName="active-phone" to="/projects">
          <i className="fas fa-tasks"></i>
          <span className="link-test">Project</span></NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<div className="phone-links">
        <div className="row d-block d-sm-none">
            <div className="col-12"><a target="_blank" href="https://github.com/mayanksinghms777" className="phone-icons">
            <i class="fab fa-github"></i>
            </a></div>
            <div className="col-12"><a target="_blank" href="https://www.linkedin.com/in/mayank-kumar-singh-b80ab01b7/" className="phone-icons">
            <i class="fab fa-linkedin-in"></i>
            </a></div>
            <div className="col-12"><a target="_blank" href="https://www.instagram.com/mayanksinghms777/" className="phone-icons">
            <i class="fab fa-instagram"></i>
            </a></div>
            <div className="col-12"><a target="_blank" href="https://twitter.com/mayanksinghms" className="phone-icons">
            <i class="fab fa-twitter"></i>
            </a></div>
        </div>
</div>

</div>
        </>
    )
}

export default Navbar
