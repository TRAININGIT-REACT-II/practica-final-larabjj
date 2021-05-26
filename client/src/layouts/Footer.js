import React from 'react';
// import profileImage from '../assets/images/pablolc.png'


const Footer = () => {
  return (
    <>
      <footer className="footer data-theme">
          <p className="footer__made">Made with ❤️ by</p>
          <div className="d-flex align-items-center px-2">
            {/* <img src={ profileImage } className="" /> */}
          </div>
          <a className="footer__link px-2" target="_blank" href="https://twitter.com/PabloLC_">pablolc</a>
      </footer>
    </>
  )
}

export default Footer;
