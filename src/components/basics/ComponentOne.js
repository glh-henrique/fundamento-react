import React from 'react';

export default function ReturnString() {
    const msg = 'Olá mundo!!';
    return(
        <div>
            <h2>Primeiro Componente!</h2>
            <p>{ msg }</p>
        </div>
    );
}