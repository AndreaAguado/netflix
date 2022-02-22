import GenresFilters from './GenresFilters';
import Main from './Main';
const Media = (props) => {
    return (
        <>
            <GenresFilters renderGenres={props.renderGenres} selectedMedia={props.selectedMedia} />
            <Main renderMedia={props.renderMedia} handleSearch={props.handleSearch} loading={props.loading} pageNum={props.pageNum} totalPages={props.totalPages} handlePrevPage={props.handlePrevPage} handleNextPage={props.handleNextPage} handlePageInput={props.handlePageInput} handleGenresFilter={props.handleGenresFilter} />
        </>
    )
}
export default Media;