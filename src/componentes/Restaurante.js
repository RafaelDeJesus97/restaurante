import React from 'react';
import "../Estilos/Restaurante.css";

function Restaurante(props) {
    return (
        <div className='main-rest'>
            <img src={props.el.imagen} alt='Imagen restaurante'/>
            <h2>{props.el.nombre}</h2>
            <p>{props.el.descripcion}</p>
            <p>{props.el.direccion}</p>
        </div>
    );
}
export default Restaurante;