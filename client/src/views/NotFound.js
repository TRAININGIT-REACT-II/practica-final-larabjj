import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <h3 id="notfound-title">Woops! There is nothing to show here! </h3>
    <Link to="/">Go to homepage</Link>
  </>
);

export default NotFound;
