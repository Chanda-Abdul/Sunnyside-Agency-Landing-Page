import React from "react";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import footerLogo from "../images/logo-footer.svg";

const Footer = () => {
  return (
    <>
    <footer>
      <div class="footer-menu">
        <img src={footerLogo} alt="sunnyside-logo" />

        <div class="footer-links">
          <ul>
            <li>
              <a href="#" class="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                Services
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                Projects
              </a>
            </li>
            
          </ul>
        </div>

        <div class="footer-socials">
          <ul>
            <li>
              <a href="facebook.com" class="footer-social-icons">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="instagram.com" class="footer-social-icons">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="twitter.com" class="footer-social-icons">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="pinterest.com" class="footer-social-icons">
                <img src={pinterest} alt="pinterest" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://chandacodes.com/">Chanda Abdul</a>.
      </div>
     
      </footer>
      
    </>
  );
};

export default Footer;
