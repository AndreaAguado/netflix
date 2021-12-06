const GenresFilters = (props) => {
    const handleMovieGenres = (ev) => {
        props.handleMovieGenresFilter();
    }
    return (
        <>
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
                    <label htmlFor="genre_id_1">
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
                    <label htmlFor="genre_id_2">
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
                    <label htmlFor="genre_id_3">
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
        </>
    )
}
export default GenresFilters;
