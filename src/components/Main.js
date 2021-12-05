import '../styles/layout/Main.scss';
import Filter from './Filter';
import Loader from './Loader';
import NavBar from './NavBar';

const Main = (props) => {
    const handleMovieGenres = (ev) => {
        props.handleMovieGenresFilter();
    }
    return (
        <main className="main">
            <Filter handleSearch={props.handleSearch}></Filter>
            {/* <div className="genres_container">
                <ul className="genres_list">
                    <li onClick={handleGenres} className="genre_list_item">Action</li>
                    <li onClick={handleGenres} className="genre_list_item">Comedy</li>
                    <li onClick={handleGenres} className="genre_list_item">Drama</li>
                    <li onClick={handleGenres} className="genre_list_item">Animation</li>
                    <li onClick={handleGenres} className="genre_list_item">Crime</li>
                </ul>
            </div> */}
            <ul>
                <li>
                    <label for="genre_id_1">
                        <input
                            id="genre_id_1"
                            type="radio"
                            value="genre_id_1"
                            name="genre_ids"
                        />
                        Genre 1 name
                    </label>
                </li>
                <li>
                    <label for="genre_id_2">
                        <input
                            id="genre_id_2"
                            type="radio"
                            value="genre_id_2"
                            name="genre_ids"
                        />
                        Genre 2 name
                    </label>
                </li>
                <li>
                    <label for="genre_id_3">
                        <input
                            id="genre_id_3"
                            type="radio"
                            value="genre_id_3"
                            name="genre_ids"
                        />
                        Genre 3 name
                    </label>
                </li>
            </ul>

            <NavBar pageNum={props.pageNum} totalPages={props.totalPages} handlePrevPage={props.handlePrevPage} handleNextPage={props.handleNextPage} handlePageInput={props.handlePageInput}></NavBar>
            <Loader loading={props.loading}></Loader>
            <ul className="media_list">
                {props.renderMedia()}
            </ul>
            <NavBar pageNum={props.pageNum} totalPages={props.totalPages} handlePrevPage={props.handlePrevPage} handleNextPage={props.handleNextPage} handlePageInput={props.handlePageInput}></NavBar>
        </main>
    )
}
export default Main;