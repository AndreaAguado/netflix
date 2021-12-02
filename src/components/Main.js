import '../styles/layout/Main.scss';

const Main = (props) => {
    return (
        <main className="main">
            Buscar
            <ul className="media_list">
                {props.renderMedia()}
            </ul>
        </main>
    )
}
export default Main;