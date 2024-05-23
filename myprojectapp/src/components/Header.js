import React from 'react';
import '../Header.css';
function Header() {
  return (
    <header className="custom-header">
      <div className="custom-col">
        <p>STORES</p>
        <img
          src='https://www.thebodyshop.in/images/location.svg'
          alt='header-logo'
          className="custom-img"
        />
      </div>
      <div className="custom-col">
        <img
          src='https://www.thebodyshop.in/images/logo.svg'
          alt='header-logo-2'
          className="custom-img"
        />
      </div>
      <div className='custom-col'>
        <img
          src='https://www.thebodyshop.in/images/Vector.svg'
          alt='header-logo-3'
          className="custom-img"
        />
      </div>
      <div className='custom-col'>
        <img
          src='https://www.thebodyshop.in/images/heartFilled.svg'
          alt='header-logo-4'
          className="custom-img"
        />
      </div>
      <div className='custom-col'>
        <img
          src='https://www.thebodyshop.in/images/profile.svg'
          alt='header-logo-5'
          className="custom-img"
        />
      </div>
      <div className='custom-col'>
        <img
          src='https://www.thebodyshop.in/images/cart.svg'
          alt='header-logo-6'
          className="custom-img"
        />
      </div>
    </header>
  );
}
export default Header;
