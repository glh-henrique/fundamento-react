import ReactDOM from 'react-dom';
import React from 'react';

//css
import './index.css';

//compnentes
import ComponentOne from './components/basics/ComponentOne';
import ComponentTwo from "./components/basics/ComponentTwo";
import Fragment from "./components/basics/Fragment";

ReactDOM.render(
    <div>
        <ComponentOne></ComponentOne>
        <ComponentTwo
            titulo="teste de paramêtro"
            subtitulo="teste de subtitulo"
            testeNumber={9.6}/>
            <Fragment fragmento="teste de fragmento" />
    </div>,
    document.getElementById('root')
);