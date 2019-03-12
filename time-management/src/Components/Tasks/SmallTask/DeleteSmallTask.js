import React from 'react';

const DeleteSmallTask = (props) => {
    return (
        <div className='DeleteSmallTask'>
            <div className="DeleteSmallTask--button" onClick={props.deleteSmallTask}>

            </div>
        </div>
    )
};

export default DeleteSmallTask;