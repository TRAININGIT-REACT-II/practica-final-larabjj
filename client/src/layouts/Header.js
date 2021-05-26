import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/Toggle';
import useUser from '../hooks/useUser';


const Header = ({ title = "TrainingNotes" }) => {

  return (
    <>

      <header className="header data-theme">
        <div className="header__branding d-flex">
          <h2>{title}</h2>
          <div className="header__toggle-theme"><ThemeToggle /></div>
        </div>
      </header>

    </>
  )
}

export default Header;
