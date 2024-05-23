import React from 'react'

const Gifts = () => {
  return (
    <div>
     <nav>
      <ul className="menu">
      <li className="menu-item">
          <a href="#">Shop By Product  </a>
          <ul className="dropdown">
            <li><a href="#">View All Gifts</a></li>
            <li><a href="#">Bath & Body Gifts</a></li>
            <li><a href="#">Skin Care Gifts</a></li>
            <li><a href="#">Fragnance Gifts</a></li>
            <li><a href="#">Bags & Boxes</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Shop By Price</a>
          <ul className="dropdown">
            <li><a href="#">Gifts Rs 1000 & Under</a></li>
            <li><a href="#">Gifts Rs 1000 to Rs 2000</a></li>
            <li><a href="#">Gifts Rs 2000 & above</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">By Recipient</a>
          <ul className="dropdown">
            <li><a href="#">Gifts For Him</a></li>
            <li><a href="#">Gifts For Her</a></li>
            <li><a href="#">Gifts For Teenagers</a></li>
          </ul>
        </li>
        <li className='menu-item'>
          < a href='#'>By Ocassion</a>
          <ul className='dropdown'>
          <li><a href="#">Birthday Gifts</a></li>
          </ul>
        </li>
        <li className='menu-item'>
          <a href='#'>By Type</a>
          <ul className='dropdown'>
          <li><a href="#">Gift Boxes</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Gifts