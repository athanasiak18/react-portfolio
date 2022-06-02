import React, { useState } from 'react';
import '../../assets/style.css'
function Nav() {
const [tabs] = useState([
  {
    name: 'about', description: 'all about me'},
  { name: 'projects', description: 'what i have been working on' },
  { name: 'resume', description: 'my professional experience' },
  { name: 'contact', description: 'contact me' },
]);
const [currentTab, setCurrentTab] = useState(tabs[0]);


  return (

  <nav className='nav-bar'>
  
      <li className="about-me">
        <a href="About">About Me</a>
      </li>
      <li>
        <a href="Projects">Projects</a>
        </li>
        <li>
          <a href="Resume">Resume</a>
        </li>
  
  </nav>

  );
}

export default Nav;