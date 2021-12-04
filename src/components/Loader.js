import '../styles/layout/Loader.scss';
const Loader = (props) => {
    const displayLoader = () => {
        if (props.loading) {
            const className = '';
            return className;
        }
        else {
            const className = 'hidden';
            return className;
        }
    }
    return (
        <div className={`lds-default ${displayLoader()}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}
export default Loader;