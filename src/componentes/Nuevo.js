import "../Estilos/Nuevo.css";

function Nuevo() {
    return (
        <form className="form-nuevo">
            <div> 
                <h1>Nombre</h1>
                <input type="text" placeholder="Ingresa el nombre"/>
            </div>
            <div> 
                <h1>Descripcion</h1>
                <input type="text" placeholder="Ingresa la descripcion"/>
            </div>
            <div> 
                <h1>Direccion</h1>
                <input type="text" placeholder="Ingresa la direccion"/>
            </div>
            <div> 
                <h1>Imagen URL</h1>
                <input type="text" placeholder="Inserta la imagen"/>
            </div>
            <input className="boton" type="submit" value="Enviar"/>
        </form>
    );
}
export default Nuevo;