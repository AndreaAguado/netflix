import '../styles/App.scss';
import netflixLogo from '../images/Logo-Netflix.png';
const App = () => {

  return (
    <div className="page">
      <header className="header">
        <img className="header_logo" src={netflixLogo} alt="Logo Netflix" />
      </header>
      <main>
        Buscar
      </main>
      <footer className="footer">
        <nav className="footer_nav">
          <ul className="footer_links_list">
            <li><a className="footer_link" href="https://twitter.com/andrea114am" target="_blank" rel="noreferrer" title="twitter.com/andrea114am"><i className="fab fa-twitter"></i></a></li>
            <li><a className="footer_link" href="https://www.linkedin.com/in/andrea-aguado-moleon/" target="_blank" rel="noreferrer" title="linkedin.com/in/andrea-aguado-moleón/"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a className="footer_link" href="https://github.com/AndreaAguado" target="_blank" rel="noreferrer" title="github.com/AndreaAguado"><i className="fab fa-github"></i></a></li>
          </ul>
        </nav>
        <small className="footer_small">Hecho con <span role="img" aria-label="emoji corazón" title="emoji corazón">&#10084;&#65039;</span> &copy; Andrea Aguado 2021</small>
      </footer>
    </div>
  );
};

export default App;