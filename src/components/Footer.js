import React from 'react';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';
import footerLogo from '../images/logo-footer.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-menu'>
          <img src={footerLogo} alt='sunnyside-logo' />

          <div className='footer-links'>
            <ul>
              <li>
                <a href='#' className='footer-link'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='footer-link'>
                  Services
                </a>
              </li>
              <li>
                <a href='#' className='footer-link'>
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-socials'>
            <ul>
              <li>
                <a href='facebook.com' className='footer-social-icons'>
                  <img src={facebook} alt='facebook' />
                </a>
              </li>
              <li>
                <a href='instagram.com' className='footer-social-icons'>
                  <img src={instagram} alt='instagram' />
                </a>
              </li>
              <li>
                <a href='twitter.com' className='footer-social-icons'>
                  <img src={twitter} alt='twitter' />
                </a>
              </li>
              <li>
                <a href='pinterest.com' className='footer-social-icons'>
                  <img src={pinterest} alt='pinterest' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='attribution'>
          Challenge by
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor .
          </a>
          Coded by <a href='https://chandacodes.com/'>Chanda Abdul</a>.
        </div>
      </footer>
    </>
  );
};

export default Footer;
