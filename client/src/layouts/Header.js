import React from 'react';
import ThemeToggle from '../components/Toggle';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from '../views/Home';
import About from '../views/About';


const Header = ({ title = "TrainingNotes" }) => {
  return (
    <>
      <Router>

        <header className="header data-theme">
          <div className="header__branding d-flex">
            <h3>{title}</h3>
            <div className="header__toggle-theme"><ThemeToggle /></div>
          </div>
          
          <nav className="header__nav">
            <NavLink className="btn btn-outline-primary" to="/" exact>Homepage</NavLink>
            <NavLink className="btn btn-outline-primary" to="/about">About</NavLink>
          </nav>
          
        </header>


        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

      </Router>
    </>
  )
}

export default Header;
