import '../styles/layout/GenresFilters.scss';
const GenresFilters = (props) => {
    return (
        <>
            <ul className="genres_list">
                {props.renderGenres(props.selectedMedia)}
            </ul>
        </>
    )
}
export default GenresFilters;
