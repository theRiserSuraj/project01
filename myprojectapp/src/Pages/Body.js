import React from 'react';
import '../BodyStyles.css';

const App = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="menu-item">
          <a href="#">Shop Body</a>
          <ul className="dropdown">
            <li><a href="#">View All Body</a></li>
            <li><a href="#">Body Butters</a></li>
            <li><a href="#">Body Lotions</a></li>
            <li><a href="#">Accessories and Tools</a></li>
            <li><a href="#">Foot Care</a></li>
            <li><a href="#">Body Yogurts</a></li>
            <li><a href="#">Deodorants</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Shop Bath</a>
          <ul className="dropdown">
            <li><a href="#">Shower Gels</a></li>
            <li><a href="#">Soaps</a></li>
            <li><a href="#">Body Scrubs</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Shop Hands</a>
          <ul className="dropdown">
            <li><a href="#">Hand Moisturisers</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Shop Trending</a>
          <ul className="dropdown">
            <li><a href="#">Vegan Body Care</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default App;
