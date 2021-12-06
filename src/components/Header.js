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
            <Link onClick={handleAllMedia} to="/">All</Link>
            <Link onClick={handleMovies} to="/movies">Movies</Link>
            <Link onClick={handleTVshows} to="/TVshows">TV Shows</Link>
        </header>
    )
}
export default Header;