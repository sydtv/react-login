import React from 'react';

const SmallPlus = (props) => {
    return (
        <div className='SmallPlus'>
            <div className="SmallPlus--button">
                <svg className='SmallPlus--button_img' onClick={props.smallPlus} alt="Plus" title="Plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
            </div>
        </div>
    )
};

export default SmallPlus;