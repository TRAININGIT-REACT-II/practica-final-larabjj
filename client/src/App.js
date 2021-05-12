import { useEffect, useState } from "react";
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


  const [theme, setTheme] = useState(THEMES.light);

  useEffect(() => {
    if (document.body.classList.value === '') {
      document.body.classList.add(theme);
    } else {
      document.body.classList.replace(document.body.classList.value, theme);
    }
  }, [theme]);

  // Mostramos la aplicación
  return (
    <Theme.Provider value={{ current: theme, update: setTheme }}>
      <Layout title="Homepage for our TrainingNotes App">
        <main className="home">
          <h1>Curso de React de TrainingIT</h1>
          <p>
            Estado del servidor:
            {loading ? " Cargando..." : <Status status={status} />}
          </p>
        </main>
      </Layout>
    </Theme.Provider>
  );
};

export default App;
