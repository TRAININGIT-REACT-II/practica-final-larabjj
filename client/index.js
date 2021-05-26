import App from "./src/App";
import ReactDOM from "react-dom";

import "./src/scss/index.scss";

import { UserContext } from './src/contexts/UserContext'

// Montamos la aplicación
ReactDOM.render(<UserContext><App /></UserContext>, document.getElementById("app"));


