import React from 'react';

//componentes
import ComponentOne from './components/basics/ComponentOne';
import ComponentTwo from "./components/basics/ComponentTwo";
import Fragment from "./components/basics/Fragment";

export default () => (
    <di id="app">
        <ComponentOne></ComponentOne>
        <ComponentTwo
            titulo="teste de paramêtro"
            subtitulo="teste de subtitulo"
            testeNumber={9.6}/>
        <Fragment fragmento="teste de fragmento" />
    </di>
);