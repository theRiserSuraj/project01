import React from 'react'
const Fragnance = () => {
  return (
    <div>
     <nav>
      <ul className="menu">
      <li className="menu-item">
          <a href="#">Fragnance </a>
          <ul className="dropdown">
            <li><a href="#">View All Fragnance</a></li>
            <li><a href="#">Body Mists</a></li>
            <li><a href="#">Eau De Toilette</a></li>
            <li><a href="#">Eau De Parfume</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">By Recipient</a>
          <ul className="dropdown">
            <li><a href="#">Fragnance For Her</a></li>
            <li><a href="#">Fragnance For Him</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Trending</a>
          <ul className="dropdown">
            <li><a href="#">Full Flowers</a></li>
            <li><a href="#">Fragnance Gifts</a></li>
          </ul>
        </li>
        <li className='menu-item'>
          < a href='#'>Fragnance Range</a>
          <ul className='dropdown'>
          <li><a href="#">Glowing Cherry Blosssom</a></li>
            <li><a href="#">Blissfull Strawberry</a></li>
            <li><a href="#">Wild Jasmine</a></li>
            <li><a href="#">Vibrant Bermagot</a></li>
            <li><a href="#">Rebel Rosebud</a></li>
            <li><a href="#">Black Musk</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    </div>
  )
}
export default Fragnance