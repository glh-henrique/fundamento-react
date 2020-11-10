import React from 'react'

//css
import './Card.css';

export default (props) => {
    const { titulo, children } = props;
    return (
        <div className="Card">
            <div className="Title">{ titulo }</div>
            <div className="Content">
                { children }
            </div>
        </div>
    )
}