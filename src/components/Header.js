import '../styles/layout/Header.scss';
import netflixLogo from '../images/Logo-Netflix.png';
const Header = () => {
    return (
        <header className="header">
            <img className="header_logo" src={netflixLogo} alt="Logo Netflix" />
        </header>
    )
}
export default Header;