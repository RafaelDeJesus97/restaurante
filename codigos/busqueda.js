const restaurantePacificoMar ={
    nombre: "Pacifico mar",
    direccion: "Av. 85 Nro. 45-85 Barranquilla",
    descripcion: "Deliciosa Comida De Mar",
    imagen: "../imagenes/comidasparavendernapraia.jpg"
};

const restauranteItaliano65 ={
    nombre: "Italiano 65",
    direccion: "Av. 45 Nro. 1-85 Medellín",
    descripcion: "Deliciosa Comida Italiana",
    imagen: "../imagenes/platos-tradicionales-de-la-comida-italiana-cocina-103469417.jpg"
};

const restauranteFritosYMas ={
    nombre: "Fritos Y Más",
    direccion: "Calle 45 Medellín",
    descripcion: "Deliciosa Comida Rápida",
    imagen: "../imagenes/FRITOS CARTAGENEROS (5).jpeg"
};

const restaurantePolloFrito ={
    nombre: "Pollo Frito",
    direccion: "Cr 32 # 56 - 89",
    descripcion: "Lo Mejor Del Pollo Frito",
    imagen: "../imagenes/pollo-frito-crujiente-3021.jpg"
};

const arregloRestaurante = [restaurantePacificoMar, restauranteItaliano65, restauranteFritosYMas, restaurantePolloFrito];

function buscarRestaurante() {
    let nombre = document.getElementById("nombre").value;
    const restaurante = document.querySelector(".resultado");

    let verificar = false;

    for (let i = 0; i < arregloRestaurante.length; i++) {
        if (nombre === arregloRestaurante[i].nombre.toLowerCase()) {
            restaurante.innerHTML = `<img src='${arregloRestaurante[i].imagen}'>` + `<h1>${arregloRestaurante[i].nombre}</h1>` + `<p>${arregloRestaurante[i].direccion}</p>` + `<p>${arregloRestaurante[i].descripcion}</p>`;
            verificar = true;
        }
    }
    if (!verificar) {
        restaurante.innerHTML = "<p style='font-size: 18px; margin: 80px;'>No se encontraron resultados</p>"
    }
}