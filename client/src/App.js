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
      <Layout title="Homepage for our TrainingNotes App">
        <main className="home">
          <h1>Curso de React de TrainingIT</h1>
          <p>
            Estado del servidor:
            {loading ?  <Loader /> : <Status status={status} />}
          </p>
          <button onClick={openModal}>Mostrar Modal</button>
          <Modal show={showModal} onClose={closeModal}>
            <h3>Esto es un modal</h3>
            <p>Aqui puedes mostrar cualquier tipo de contenido.</p>
          </Modal>
        </main>
      </Layout>
    </Theme.Provider>
  );
};

export default App;
