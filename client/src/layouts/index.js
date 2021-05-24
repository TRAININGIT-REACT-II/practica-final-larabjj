import '../scss/core/_layout.scss';
import Footer from './Footer';
import Header from './Header';


const Layout = ({ children }) => (
  <div className="container">

    <Header />

    <main className="d-flex justify-content-center">
      {children}
    </main>

    <Footer />

  </div>
);

export default Layout;