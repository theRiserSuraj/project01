import React from 'react';
import '../Face.css';
const Face = () => {
  return (
    <div>
      <nav>
      <ul className="menu">
        <li className="menu-item">
          <a href="#">By Product Type</a>
          <ul className="dropdown">
            <li><a href="#">View All Face</a></li>
            <li><a href="#">Moisturisers</a></li>
            <li><a href="#">Cleansers & Toners</a></li>
            <li><a href="#">Face Masks</a></li>
            <li><a href="#">Serums & Essences</a></li>
            <li><a href="#">Skincare & SPF</a></li>
            <li><a href="#">Exfoliators & Peels</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">By Product Type</a>
          <ul className="dropdown">
            <li><a href="#">Night Care</a></li>
            <li><a href="#">Eye Care</a></li>
            <li><a href="#">Men's Grooming</a></li>
            <li><a href="#">Lip Care</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">By Skin Type</a>
          <ul className="dropdown">
            <li><a href="#">Oily and Blemish Prone Skin</a></li>
            <li><a href="#">Combination Skin </a></li>
            <li><a href="#">Dry Skin</a></li>
            <li><a href="#">Sensitive Skin</a></li>
            <li><a href="#">Dull Skin</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Trending</a>
          <ul className="dropdown">
            <li><a href="#">Vegan Skin Care</a></li>
          </ul>
        </li>
      </ul>
    </nav>           
    </div>
  )
}
export default Face;
