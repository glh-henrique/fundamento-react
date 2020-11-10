import React from 'react';

//css
import './App.css';

//componentes
import ComponentOne from './components/basics/ComponentOne';
import ComponentTwo from "./components/basics/ComponentTwo";
import Fragment from "./components/basics/Fragment";
import Card from "./components/layout/Card";
import Random from "./components/basics/random";

export default () => (
    <div className="App">

        <div className="Cards">
            <Card titulo="Desafio Random">
                <Random
                    min={0}
                    max={8}
                />
            </Card>

            <Card titulo="Fragmento">
                <Fragment fragmento="teste de fragmento" />
            </Card>

            <Card titulo="Componente com parametro">
                <ComponentTwo
                    titulo="teste de paramêtro"
                    subtitulo="teste de subtitulo"
                    testeNumber={9.6}/>
            </Card>

            <Card titulo="Componente simples">
                <ComponentOne></ComponentOne>
            </Card>
        </div>
    </div>
);