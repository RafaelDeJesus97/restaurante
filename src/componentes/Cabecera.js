import React from 'react';
import "../Estilos/Cabecera.css";

function Cebecera() {
    return (
        <header>
            <div>
                <img src="../imagen/06.png" alt="Logo restaurante" />
            </div>
            <div>
                <h1>App restaurant</h1>
            </div>
            <nav>
                <ul> 
                    <li>
                        <a href="/inicio">Inicio</a>
                    </li>
                    <li>
                        <a href="/buscar">Buscar</a>
                    </li>
                    <li>
                        <a href="/nuevo">Nuevo Restaurante</a>  
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Cebecera;