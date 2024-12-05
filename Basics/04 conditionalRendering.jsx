/* 
conditional rendering - allows you to control what gets rendered
                        in your application based on certain condition
                        (show, hide, or change components)
*/

import PropTypes from "prop-types"

export default function UserGreeting(props){
/* 
    if(props.isLoggedIn){
        return <h2>Welcome {}props.name</h2>
    }
    return <h2>Please lo in to continue</h2>
*/

// With ternary operator
const welcomeMessage = <h2>Welcome {props.username}</h2>
const loginPrompt = <h2>Please log in to continue</h2>

return(props.isLoggedIn ? welcomeMessage : loginPrompt)
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

/* 
In a different file, where the component is called:
<UserGreeting isLoggedIn={true} username="Bro" />
*/