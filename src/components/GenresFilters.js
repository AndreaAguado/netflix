const GenresFilters = (props) => {
    const handleMovieGenres = (ev) => {
        props.handleMovieGenresFilter();
    }
    return (
        <>
            <ul className="genres_list">
                {props.renderGenres(props.selectedMedia)}
            </ul>
        </>
    )
}
export default GenresFilters;
