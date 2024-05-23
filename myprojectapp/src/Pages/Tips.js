import React from 'react'

const Tips = () => {
  return (
    <div>
       <nav>
      <ul className="menu">
      <li className="menu-item">
          <a href="#">Makeup Tips  </a>
          <ul className="dropdown">
            <li><a href="#">How to find the right foundation</a></li>
            <li><a href="#">Wedding Day Glow-Up: Spotlight on Bridal Makeup Essentials</a></li>
            <li><a href="#">How to shape eyebrows</a></li>
            <li><a href="#">How to apply foundation</a></li>
            <li><a href="#">Lipstick shade finder</a></li>
            <li><a href="#">How to get natural makeup look</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Bodycare</a>
          <ul className="dropdown">
            <li><a href="#">Hydrating & nourishing bodu mosturisers</a></li>
            <li><a href="#">Spritz some joy with mood-uplifting fragnances</a></li>
            <li><a href="#">Benefits of Hand Cream</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Skincare</a>
          <ul className="dropdown">
            <li><a href="#">Explore Skincare Tips</a></li>
            
          </ul>
        </li>
        <li className='menu-item'>
          < a href='#'>Haircare</a>
          <ul className='dropdown'>
          <li><a href="#">Nurishing Your Hair: A Comprehensive Guide</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Tips
