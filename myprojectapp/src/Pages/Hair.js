import React from 'react'

const Hair = () => {
  return (
    <div>
      <nav>
      <ul className="menu">
        <li className="menu-item">
          <a href="#">By Product Type</a>
          <ul className="dropdown">
            <li><a href="#">View All Hair</a></li>
            <li><a href="#">Shampoo</a></li>
            <li><a href="#">Conditioner</a></li>
            <li><a href="#">Hair Brushes & Combs</a></li>
            <li><a href="#">Styling</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">By Hair Concern</a>
          <ul className="dropdown">
            <li><a href="#">Frizz Prone Hair</a></li>
            <li><a href="#">Dry Hair and Scalp</a></li>
            <li><a href="#">Dull Hair</a></li>
            <li><a href="#">Damage Prone Hair</a></li>
            <li><a href="#">Oily Prone Hair</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Trending</a>
          <ul className="dropdown">
            <li><a href="#">Vegan Hair Care</a></li>
          </ul>
        </li>
      </ul>
    </nav>  
    </div>
  )
}

export default Hair
