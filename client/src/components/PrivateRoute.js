import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import useUser from "../hooks/useUser";

// Obtenemos el componente a renderizar y cualquier otro parámetro
const PrivateRoute = ({ children, ...others }) => {

  const { isLogged } = useUser();

  return (
    <Route
      {...others}
      render={() =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { msg: "Por favor, haz login primero" },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
