import Me from "./Me";
import Course from "./Course";
import { useRouteMatch } from "react-router";
import { Route, NavLink } from "react-router-dom";

const About = () => {
  const match = useRouteMatch();

  return <section aria-labelledby="">



    <h4 id="about-title">Sobre el curso</h4>
    <p>Pulsa para ver más detalle.</p>


    <nav className="">
      <NavLink className="btn btn-outline-secondary" to={`${match.url}/me`}>Sobre mi</NavLink>
      <NavLink className="btn btn-outline-secondary" to={`${match.url}/course`}>Sobre este curso</NavLink>
    </nav>

    <Route path={`${match.url}/me`} component={Me} />
    <Route path={`${match.url}/course`} component={Course} />
    
  </section>
};

export default About;