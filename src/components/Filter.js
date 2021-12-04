import '../styles/layout/Filter.scss';

const Filter = (props) => {
    const handleChange = (ev) => {
        props.handleSearch(ev.target.value);

    }
    return (
        <form className="form" onSubmit={(ev) => ev.preventDefault()} action="POST">
            <input
                onKeyUp={handleChange}
                className="text_input"
                type="text"
                placeholder="TV show / movie title" />
        </form>
    )
}
export default Filter;