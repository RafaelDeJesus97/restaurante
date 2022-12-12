import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Buscar from "./Buscar";
import Nuevo from "./Nuevo";
import "../Estilos/Ruta.css";

function Ruta() {
    return(
        <div id="ruta">
            <Router>
                <Routes>
                    <Route path="/inicio" element={<Inicio/>}/>
                    <Route path="/buscar" element={<Buscar/>}/>
                    <Route path="/nuevo" element={<Nuevo/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default Ruta;