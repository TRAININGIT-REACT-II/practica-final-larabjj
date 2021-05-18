import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import Status from "./components/Status";
import { THEMES } from "./constants/themes";
import Theme from "./contexts/theme";
import Layout from "./layouts";


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


  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [theme, setTheme] = useState(THEMES.light);

  useEffect(() => {
    if (document.body.classList.value === '') {
      document.body.classList.add(theme);
    } else {
      document.body.classList.replace(document.body.classList.value, theme);
    }
  }, [theme]);

  return (
    <Theme.Provider value={{ current: theme, update: setTheme }}>
      <Layout>

          <div className="col-12 col-md-9 data-theme">
            <p>
              Status server:
              {loading ? <Loader /> : <Status status={status} />}
            </p>
            <button className="btn btn-primary" onClick={openModal}>Show modal</button>
            <Modal show={showModal} onClose={closeModal}>
              <h3>Title for modal</h3>
              <p>Content for modal.</p>
            </Modal>
            
          </div>

          <div className="col-12 col-md-3 data-theme">
            
          </div>



      </Layout>
    </Theme.Provider>
  );
};

export default App;
