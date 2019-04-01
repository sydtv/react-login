import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello {props.username}</p>
            <p>Nice to see u here!</p>
        </div>
    )
};

export default UserOutput;