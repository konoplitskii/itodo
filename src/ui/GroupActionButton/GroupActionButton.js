import React from 'react';
import './GroupActionButton.scss';
const GroupActionButton = ({children}) => {
    return (
        <div className="GroupActionButton">
            {children}
        </div>
    );
};

export default GroupActionButton;