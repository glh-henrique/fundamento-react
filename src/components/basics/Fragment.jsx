import React from 'react';

export default function Fragment(props) {
    return (
        // <React.Fragment>
        //     <h2>Conceito de Fragment</h2>
        //     <span> { props.fragmento } </span>
        // </React.Fragment>
        //
        // OUUU

        <>
            <h2>Conceito de Fragment</h2>
            <span> { props.fragmento } </span>
        </>

    );
}