import '../styles/layout/Main.scss';
import Filter from './Filter';
import Loader from './Loader';

const Main = (props) => {

    return (
        <main className="main">
            <Filter handleSearch={props.handleSearch}></Filter>
            <Loader loading={props.loading}></Loader>
            <ul className="media_list">
                {props.renderMedia()}
            </ul>
        </main>
    )
}
export default Main;