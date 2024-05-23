import React from 'react'

const MakeUp = () => {
  return (
    <div>
       <nav>
      <ul className="menu">
      <li className="menu-item">
          <a href="#">Make Up</a>
          <ul className="dropdown">
            <li><a href="#">View All Makeup</a></li>
            <li><a href="#">Lips </a></li>
            <li><a href="#">Mascara</a></li>
            <li><a href="#">Foundations & Concealers</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Make Up</a>
          <ul className="dropdown">
            <li><a href="#">Eye Shadow</a></li>
            <li><a href="#">Makeup Brushes & Tools</a></li>
            <li><a href="#">Eyeliners & Eyebrows</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Trending</a>
          <ul className="dropdown">
            <li><a href="#">Vegan Makeup</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    </div>
  )
}
export default MakeUp
