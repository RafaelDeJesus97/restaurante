import "../Estilos/Buscar.css";
import listaRestaurantes from "./ArrayRest";
import Restaurante from "./Restaurante";

function Buscar() {
    return (
        <div id="buscar-container">
            <form className="main-buscar"
                onSubmit={ev => {
                    ev.preventDefault();
                    const nombreRest = ev.target.buscar.value;
                    localStorage.setItem("nombre", nombreRest);
                }}
            > 
                <h1>Buscar restaurante</h1>
                <input className="buscar" type="text" placeholder="Encuentra tu restaurante" id="ingreso" name="buscar"/>
                <input type="submit" value="Buscar"/>
            </form>
            <div>{buscarRestaurante()}</div>
        </div>
    );

}
const buscarRestaurante = () => {
    let esta = false;
    listaRestaurantes.map(el => {
        if (el.nombre === localStorage.getItem("nombre")) {
            <Restaurante el={el}/>
        }
        else {
            <p>No hay Resultados</p>
        }
    })
}
export default Buscar;