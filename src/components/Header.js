import '../styles/layout/Header.scss';
import netflixLogo from '../images/Logo-Netflix.png';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const handleAllMedia = () => {
        props.handleAllMediaLink();
    }
    const handleMovies = () => {
        props.handleMoviesLink();
    }
    const handleTVshows = () => {
        props.handleTVshowsLink();
    }

    return (
        <header className="header">
            <Link to="/" className="header_link" title="Go to homepage">
                <img className="header_logo" src={netflixLogo} alt="Logo Netflix" />
            </Link>
            <nav className="header_nav">
                <ul className="header_nav_list">
                    <li className="list_item">
                        <Link className="header_nav_link" onClick={handleAllMedia} to="/">All</Link>
                    </li>
                    <li className="list_item">
                        <Link className="header_nav_link" onClick={handleMovies} to="/movies">Movies</Link>
                    </li>
                    <li className="list_item">
                        <Link className="header_nav_link" onClick={handleTVshows} to="/TVshows">TV Shows</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;