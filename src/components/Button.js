import React from 'react';

export default (props) => {
    return(
        <button onClick={props.click}>{props.text}</button>
    )
}