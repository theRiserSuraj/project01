import React from 'react';
function AboutUs() {
  return (
    <div>
       <nav>
      <ul className="menu">
      <li className="menu-item">
          <a href="#">Activism </a>
          <ul className="dropdown">
            <li><a href="#">Our Youth Collective</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Charter For Change</a>
          <ul className="dropdown">
            <li><a href="#">ChangeMaking Beauty</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">About Us</a>
          <ul className="dropdown">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Our Purpose</a></li>
            <li><a href="#">Discover our Ingredients</a></li>
          </ul>
        </li>
        <li className='menu-item'>
          < a href='#'>Our Values</a>
          <ul className='dropdown'>
          <li><a href="#">Vegan Beuty</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    </div>
  );
}
export default AboutUs;
