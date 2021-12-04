import '../styles/layout/Main.scss';
import Loader from './Loader';

const Main = (props) => {
    const handleChange = (ev) => {
        props.handleSearch(ev.target.value);

    }
    return (
        <main className="main">
            <form className="form" onSubmit={(ev) => ev.preventDefault()} action="POST">
                <input
                    onKeyUp={handleChange}
                    className="text_input"
                    type="text"
                    placeholder="TV show / movie title" />
            </form>
            <Loader loading={props.loading}></Loader>
            <ul className="media_list">
                {props.renderMedia()}
            </ul>
        </main>
    )
}
export default Main;