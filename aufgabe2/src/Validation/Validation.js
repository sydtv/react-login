import React from 'react';

const valiadtion = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text too short';
    }

    return (
        <div>
            {validationMessage}
        </div>
    );
};

export default valiadtion;