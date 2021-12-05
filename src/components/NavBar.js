import '../styles/layout/NavBar.scss';
import PropTypes from 'prop-types';
const NavBar = (props) => {
    const handleChange = (ev) => {
        if (ev.target.value > props.numberOfPages) {
            props.handlePageInput(props.numberOfPages);
        }
        else {
            props.handlePageInput(parseInt(ev.target.value));
        }

    }
    return (
        <nav className="pages_nav_bar">
            <button className={props.pageNum === 1 ? 'hidden' : 'pages_nav_bar_button'} onClick={props.handlePrevPage}><i className="fas fa-angle-left"></i> Previous</button>
            <p className="pages_nav_bar_index">Page
                <input onChange={handleChange} className="input_page_number" type="number" max={props.totalPages} min="1" name="inputPage" id="inputPage" placeholder="Ej. 2" value={props.pageNum} />
                of {props.totalPages}</p>

            <button className={props.pageNum === props.numberOfPages ? 'hidden' : 'pages_nav_bar_button'} onClick={props.handleNextPage}>Next <i className="fas fa-angle-right"></i></button>
        </nav>
    )
}
NavBar.propTypes = {
    pageNum: PropTypes.number,
};

NavBar.defaultProps = {
    pageNum: 1,
};

export default NavBar;