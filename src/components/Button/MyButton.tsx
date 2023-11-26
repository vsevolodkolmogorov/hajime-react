import React from 'react';
import './Button.css'


const MyButton = (props: any) => {
    return (
        <button
            className={'button'}
            {...props}
        >
        </button>
    );
};

export default MyButton;