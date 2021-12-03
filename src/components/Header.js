import '../styles/layout/Header.scss';
import netflixLogo from '../images/Logo-Netflix.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header_link" title="Go to homepage">
                <img className="header_logo" src={netflixLogo} alt="Logo Netflix" />
            </Link>
        </header>
    )
}
export default Header;