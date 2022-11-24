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

let restaurante1 = document.querySelector(".rest-1");
restaurante1.innerHTML = `<img src='${arregloRestaurante[0].imagen}'>`;
restaurante1.innerHTML += `<h1>${arregloRestaurante[0].nombre}</h1>`
restaurante1.innerHTML += `<p>${arregloRestaurante[0].direccion}</p>`
restaurante1.innerHTML += `<p>${arregloRestaurante[0].descripcion}</p>`

let restaurante2 = document.querySelector(".rest-2");
restaurante2.innerHTML = `<img src='${arregloRestaurante[1].imagen}'>`;
restaurante2.innerHTML += `<h1>${arregloRestaurante[1].nombre}</h1>`
restaurante2.innerHTML += `<p>${arregloRestaurante[1].direccion}</p>`
restaurante2.innerHTML += `<p>${arregloRestaurante[1].descripcion}</p>`

let restaurante3 = document.querySelector(".rest-3");
restaurante3.innerHTML = `<img src='${arregloRestaurante[2].imagen}'>`;
restaurante3.innerHTML += `<h1>${arregloRestaurante[2].nombre}</h1>`
restaurante3.innerHTML += `<p>${arregloRestaurante[2].direccion}</p>`
restaurante3.innerHTML += `<p>${arregloRestaurante[2].descripcion}</p>`

let restaurante4 = document.querySelector(".rest-4");
restaurante4.innerHTML = `<img src='${arregloRestaurante[3].imagen}'>`;
restaurante4.innerHTML += `<h1>${arregloRestaurante[3].nombre}</h1>`
restaurante4.innerHTML += `<p>${arregloRestaurante[3].direccion}</p>`
restaurante4.innerHTML += `<p>${arregloRestaurante[3].descripcion}</p>`
