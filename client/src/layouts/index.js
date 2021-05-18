import ThemeToggle from '../components/Toggle';
import '../scss/core/_layout.scss';
import Footer from './Footer';
import Header from './header';
import MainContainer from './MainContainer';

/**
 * Engloba el contenido principal en un contendor para 
 * centrar el layout
 */
const Layout = ({ children }) => (
  <div className="container">

    <Header />

    <main className="d-flex">
      {children}
    </main>
  

    <Footer />

  </div>
);

export default Layout;