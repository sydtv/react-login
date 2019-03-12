import React from 'react';

import SmallPlus from './SmallPlus';
import DeleteSmallTask from './DeleteSmallTask';
import '../../../Styles/SmallTask.scss';

const SmallTask = (props) => {
    return (
        <div className='SmallTask'>
            <div className="SmallTask--task">
                <input value={props.smallTaskName} onChange={props.smallChangeHandler}/>
                <DeleteSmallTask deleteSmallTask={props.deleteSmallTask}/>
            </div>
            <SmallPlus smallPlus={props.smallPlus}/>
        </div>
    )
};

export default SmallTask;
