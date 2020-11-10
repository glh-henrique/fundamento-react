//componente com passagem de paramêtro
import React from 'react';

export default function ComponentTwo(props) {

    return (
      <div>
          <h2>{ props.titulo }</h2>
          <p>{ props.subtitulo }</p>
          <strong>{ props.testeNumber }</strong>
      </div>
    );
}
