import React from 'react'
const Range = () => {
  return (
    <div>
       <nav>
      <ul className="menu">
      <li className="menu-item">
          <a href="#">Popular Range</a>
          <ul className="dropdown">
            <li><a href="#">View All Range</a></li>
            <li><a href="#">British Rose</a></li>
            <li><a href="#">Strawberry</a></li>
            <li><a href="#">Vitamin C</a></li>
            <li><a href="#">Ginger</a></li>
            <li><a href="#">Vitamin E</a></li>
            <li><a href="#">Tea Tree</a></li>
            <li><a href="#">White Musk</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">SkinCare Range</a>
          <ul className="dropdown">
            <li><a href="#">Aloe</a></li>
            <li><a href="#">Camomile</a></li>
            <li><a href="#">Edelweiss</a></li>
            <li><a href="#">Oils Of Life</a></li>
            <li><a href="#">Seaweed</a></li>
            <li><a href="#">Drops of Light</a></li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#">Bodycare Range</a>
          <ul className="dropdown">
            <li><a href="#">Avocado</a></li>
            <li><a href="#">Almond Milk</a></li>
            <li><a href="#">Moringa</a></li>
            <li><a href="#">Shea Butter</a></li>
            <li><a href="#">Satsuma</a></li>
            <li><a href="#">Olive</a></li>
          </ul>
        </li>
        <li className='menu-item'>
          < a href='#'>New Range</a>
          <ul className='dropdown'>
          <li><a href="#">Full Flowers</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    </div>
  )
}
export default Range
