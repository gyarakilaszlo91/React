/* 
Props -         Read-only properties that are shared between components.
                A parent component can send data to a child component.
                   <Component key=value />
*/
/* 
PropTypes -     a mechanism that ensures that the passed value
                is of the correct datatype
                age: PropTypes.number
*/
/* 
defaultProps -  default values for props in case they are not
                passed from the parent component
                name: "Guest"
*/
import PropTypes from "prop-types"

function Student(props){

    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            {props.isStudent ? <p>{props.name} is a student</p> : <p>{props.name} is not a student</p>}
        </div>
    );
}

// Setting the proptypes, if it will be different, a warning will be emitted to the console
// The program will be running still
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
// Setting the default props
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
/* 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# In a different file import the component                #
# import Student from "./03 props.jsx"                    #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
*/
function App(){

    return(
        <>
            <Student name="Spongebob" age={30} isStudent={true} />
            <Student name="Patrick" age={42} isStudent={false} />
        </>
    );
}

export {Student, App}