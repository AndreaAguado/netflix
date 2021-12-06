import '../styles/layout/Main.scss';
import Filter from './Filter';
import Loader from './Loader';
import NavBar from './NavBar';

const Main = (props) => {

    return (
        <main className="main">
            <Filter handleSearch={props.handleSearch}></Filter>
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