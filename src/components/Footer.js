import '../styles/layout/Footer.scss';
import tmbdLogo from '../images/tmdb_icon.svg';
const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <nav className="footer_nav">
                    <ul className="footer_links_list">
                        <li><a className="footer_link" href="https://twitter.com/andrea114am" target="_blank" rel="noreferrer" title="twitter.com/andrea114am"><i className="fab fa-twitter"></i></a></li>
                        <li><a className="footer_link" href="https://www.linkedin.com/in/andrea-aguado-moleon/" target="_blank" rel="noreferrer" title="linkedin.com/in/andrea-aguado-moleón/"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a className="footer_link" href="https://github.com/AndreaAguado" target="_blank" rel="noreferrer" title="github.com/AndreaAguado"><i className="fab fa-github"></i></a></li>
                    </ul>
                </nav>
                <small className="footer_small">Hecho con <span role="img" aria-label="emoji corazón" title="emoji corazón">&#10084;&#65039;</span> &copy; Andrea Aguado 2021</small>
            </div>
            <div className="footer_credit_container">
                <a className="footer_credit_link" href="https://www.themoviedb.org/" target="_blank" rel="noreferrer" title="https://www.themoviedb.org/">
                    <img className="footer_credit_img" src={tmbdLogo} alt="The Movie Database Logo" />
                </a>
            </div>
        </footer>
    )
}
export default Footer;