import React from 'react';
import profileImage from '../assets/images/pablolc.png'

const Footer = () => {
  return (
    <>
      <footer className="footer font-lovely data-theme">
          <p className="footer__made">Made with ❤️ by</p>
          <a className="footer__link font-lovely" target="_blank" href="https://twitter.com/PabloLC_">
          <div className="d-flex align-items-center">
            <img src={ profileImage } className="footer__image px-2" alt="profile photo" />
            <p>pablolc</p>
          </div>
          </a>
      </footer>
    </>
  )
}

export default Footer;
