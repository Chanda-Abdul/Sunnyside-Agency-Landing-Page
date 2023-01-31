import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import menu from '../images/icon-hamburger.svg';
import Navbar from './Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };


  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };
  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  useEffect(() => {
    if (window.innerWidth > 650) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);
  return (
    <>
      <nav>
        {' '}
        <header>
          <div>
            <Logo />
          </div>
          {/* <div className='dropdown'> */}
          {/* {isDesktop && <Navbar />}
          {!isDesktop & !isOpen && ( <img src={menu} alt='menu-button' />*/}
          <button onClick={handleOpen} className='menu-btn'>
            <img src={menu} alt='menu-button' />
            {isOpen ? (
              <ul className='menu'>
                <li className='menu-link'>
                  <a href='/'>About</a>
                </li>
                <li className='menu-link'>
                  <a href='/'>Services</a>
                </li>
                <li className='menu-link'>
                  <a href='/'>Projects</a>
                </li>
                <button className='btn contact-btn'>CONTACT</button>
              </ul>
            ) : (
              <div></div>
            )}
          </button>

          {/* </div>{' '} */}
        </header>{' '}
      </nav>
    </>
  );
};

export default Header;
