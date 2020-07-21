import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>This is a little project to test that I know the basic syntax of React!
                And your name is: {props.username}</p>
        </div>
    
    )
}

export default UserOutput