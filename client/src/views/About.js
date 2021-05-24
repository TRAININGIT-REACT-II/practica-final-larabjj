// import { useRouteMatch } from "react-router";
// import { Route, NavLink } from "react-router-dom";
// import Modal from "../components/Modal";

const About = (props) => {
  // const match = useRouteMatch();

  const { temp } = props;


  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => setShowModal(true);
  // const closeModal = () => setShowModal(false);

  return <>


    {/* <button className="btn btn-primary" onClick={openModal}>Show modal</button> */}

    {/* <p>{temp}</p> */}

    {/* <Modal show={showModal} onClose={closeModal}>
      <h3>Title for modal</h3>
      <p>Content for modal.</p>
    </Modal> */}

    {/* 
    <nav className="">
      <NavLink className="btn btn-outline-secondary" to={`${match.url}/me`}>Sobre mi</NavLink>
      <NavLink className="btn btn-outline-secondary" to={`${match.url}/course`}>Sobre este curso</NavLink>
    </nav>

    <Route path={`${match.url}/me`} component={Me} />
    <Route path={`${match.url}/course`} component={Course} /> */}

  </>
};

export default About;