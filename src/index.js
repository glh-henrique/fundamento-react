import ReactDOM from 'react-dom';
import React from 'react';

//css
import './index.css';

//compnentes
import ComponentOne from './components/basics/ComponentOne';
import ComponentTwo from "./components/basics/ComponentTwo";

ReactDOM.render(
    <div>
        <ComponentOne></ComponentOne>
        <ComponentTwo
            titulo="teste de paramêtro"
            subtitulo="teste de subtitulo"
            testeNumber={9.6}/>
    </div>,
    document.getElementById('root')
);