import '../styles/layout/Filter.scss';

const Filter = (props) => {
    const handleChange = (ev) => {
        let myQuery = ev.target.value;
        myQuery = myQuery.replace(/ /g, "+");
        props.handleSearch(myQuery);
    }
    return (
        <form className="form" onSubmit={(ev) => ev.preventDefault()} action="POST">
            <input
                autoFocus
                onKeyUp={handleChange}
                className="text_input"
                type="text"
                placeholder="TV show / movie title" />
        </form>
    )
}
export default Filter;