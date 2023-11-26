import React from 'react';


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