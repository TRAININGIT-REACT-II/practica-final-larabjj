import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/Toggle';
import useUser from '../hooks/useUser';


const Header = ({ title = "TrainingNotes" }) => {

  const { isLogged, logout } = useUser();

  const handleClick = e => {
    e.preventDefault()
    logout()
  }
  console.log(isLogged);
  return (
    <>

      <header className="header data-theme">
        <div className="header__branding d-flex">
          <h3>{title}</h3>
          <div className="header__toggle-theme"><ThemeToggle /></div>
        </div>

        {
          isLogged
            ? <Link to='#' onClick={handleClick}>
              Logout
          </Link>
            : <>
              <Link to='/login'>
                Login
              </Link>

              <Link to='/register'>
                Register
              </Link>
            </>
        }

      </header>

    </>
  )
}

export default Header;
