import React from 'react';

import SmallTask from '../SmallTask/SmallTask';
import DeleteBigTask from './DeleteBigTask';
import BigPlus from './BigPlus';
import '../../../Styles/BigTask.scss';

const BigTask = (props) => {
    return (
        <div className='BigTask'>
            <div className="BigTask--task">
                <input value={props.bigTaskName} onChange={props.bigChangeHandler}/>
                <DeleteBigTask deleteBigTask={props.deleteBigTask}/>
            </div>
            <div className="BigTask--undertask">
                <SmallTask
                    smallTaskName={props.smallTaskName}
                    deleteSmallTask={props.deleteSmallTask}
                    smallPlus={props.smallPlus}
                    smallChangeHandler={props.smallChangeHandler}
                />
            </div>
            <BigPlus bigPlus={props.bigPlus}/>
        </div>
    )
};

export default BigTask;