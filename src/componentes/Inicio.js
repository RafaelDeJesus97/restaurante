import React from 'react';
import listaRestaurantes from './ArrayRest';
import Restaurante from './Restaurante';
import "../Estilos/Principal.css";

function Inicio(props) {
    return (
        <div>
            {listaRestaurantes.map(el => 
                <Restaurante el={el}/>
            )}
        </div>
    );
}
export default Inicio;