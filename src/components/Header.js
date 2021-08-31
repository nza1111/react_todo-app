import PropTypes from 'prop-types';
import Task from "./Task";

const Header = ({title, onAdd, showAdd}) =>{
    return(
        <header>
            <h1>{title}</h1>

            <button onClick={onAdd}>Add</button>
        </header>
    )
}
Header.defaultProps ={
    title: "Task Tracker", // default properties
}
Header.propTypes = {
    title: PropTypes.string.isRequired, // if here is string you can not pass numbers
}
export default Header;
