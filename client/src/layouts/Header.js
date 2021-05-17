import React from 'react';
import ThemeToggle from '../components/Toggle';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from '../views/Home';
import About from '../views/About';


const Header = ({ title = "TrainingNotes App - PLC" }) => {
  return (
    <>
      <Router>
      
        <header className="layout_header">
          <h3>{title}</h3>
          <div className="layout_opts">
            <div className="layout_theme">
              <ThemeToggle />
            </div>
            <nav className="layout_nav">
              <NavLink className="btn btn-outline-primary" to="/" exact>Homepage</NavLink>
              <NavLink className="btn btn-outline-primary" to="/about">About</NavLink>
            </nav>
          </div>
          
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
