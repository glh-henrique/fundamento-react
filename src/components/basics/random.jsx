import React from 'react';

export default (props) => {
    const {min, max} = props;

    const randomValue = parseInt(
        Math.random() * (max - min) + min
    );

    return (
        <div id="random">
            <div>
                <span>Min: {props.min}</span>
                <span> / </span>
                <span>Max: {props.max}</span>
            </div>
            <h1> Random : { randomValue } </h1>
        </div>
    );
};