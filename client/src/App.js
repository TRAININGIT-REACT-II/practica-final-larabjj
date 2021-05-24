import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch, Link } from "react-router-dom";
import Loader from "./components/Loader";
import Status from "./components/Status";
import { TodoApp } from "./components/TodoApp";
import { THEMES } from "./constants/themes";
import Theme from "./contexts/theme";
import Layout from "./layouts";
import About from "./views/About";
import Home from "./views/Home";



import RegisterPage from "./views/Register";

import Login from "./views/Login";

import { UserContextProvider } from "./contexts/UserContext";
import useUser from "./hooks/useUser";

import PrivateRoute from "./components/PrivateRoute";
// import NotFound from "./views/NotFound";


// Componente principal de la aplicación.
const App = () => {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cargamos el estado del servidor
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setStatus(data.status === "ok"))
      .finally(() => setLoading(false));
  }, []);

  const [theme, setTheme] = useState(THEMES.light);

  useEffect(() => {
    if (document.body.classList.value === '') {
      document.body.classList.add(theme);
    } else {
      document.body.classList.replace(document.body.classList.value, theme);
    }
  }, [theme]);


  const { isLogged, logout } = useUser(false);

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  console.log(isLogged);

  return (
    <UserContextProvider>
      <Theme.Provider value={{ current: theme, update: setTheme }}>
        <Router>
          <Layout>
            {/* <Switch> */}
            <div className="main-container col-12 col-md-8 data-theme">
              <Route path="/" exact>
                <Home />
              </Route>

              <PrivateRoute path="/app">
                <TodoApp />
              </PrivateRoute>


              <Route component={Login} path="/login" />
              <Route component={RegisterPage} path="/register" />

              <Route path="/about" exact>
                {/* <About temp='Pablo' /> */}
                {/* <About temp={<TodoApp />} /> */}
                <About temp='Holiiiiii' />
              </Route>


            </div>


            <div className="sidebar-container col-12 col-md-3 data-theme">

              <nav className="header__nav">
                <NavLink className="btn btn-outline-primary" activeClassName="active" to="/">
                  Inicio
                  </NavLink>
                {/* {!isLogged && (
                  <NavLink className="btn btn-outline-primary" activeClassName="active" to="/login">
                    Iniciar sesión
                  </NavLink>
                )} */}
                {isLogged && (
                  <NavLink className="btn btn-outline-primary" activeClassName="active" to="/app">
                    App
                  </NavLink>
                )}
                {isLogged && (
                  <NavLink className="btn btn-outline-primary" activeClassName="active" to="/about">
                    About
                  </NavLink>
                )}
                
                {
                  isLogged
                    ? <NavLink className="btn btn-outline-primary" to='#' onClick={handleClick}>
                      Logout
                  </NavLink>
                    : <>
                      <NavLink className="btn btn-outline-primary" to='/login'>
                        Login
                      </NavLink>

                      <NavLink className="btn btn-outline-primary" to='/register'>
                        Register
                      </NavLink>
                    </>
                }

              </nav>
              <div className="d-flex justify-content-center">
                <p>
                  Status server:
                    {loading ? <Loader /> : <Status status={status} />}
                </p>
              </div>
            </div>
            {/* <Route path="*">
                <NotFound />
              </Route> */}
            {/* </Switch> */}
          </Layout>
        </Router>
      </Theme.Provider>
    </UserContextProvider>
  );
};

export default App;
