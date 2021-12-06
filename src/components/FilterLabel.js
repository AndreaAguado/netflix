import '../styles/layout/FilterLabel.scss';

const FilterLabel = (props) => {
    const handleMovieGenres = (ev) => {
        console.log(ev.target.value);
        props.handleGenresFilter(ev.target.value, props.selectedMedia);
    }
    return (
        <>
            <label className="filter_label" htmlFor={props.genre.id}>
                <input
                    onChange={handleMovieGenres}
                    id={props.genre.id}
                    type="radio"
                    value={props.genre.id}
                    name="genre_ids"
                />
                {props.genre.name}
            </label>
        </>
    )
}
export default FilterLabel;