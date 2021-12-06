const GenresFilters = (props) => {
    const handleMovieGenres = (ev) => {
        props.handleMovieGenresFilter(ev.target.value);
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
