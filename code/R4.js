//Variables constantes.
const d = document,
  w = window,
  xhttp = new XMLHttpRequest(),
  $datos = d.querySelector("#datos");
//Variables de ciudades a consultar
let ciudades = [
  "Buenos Aires",
  "París",
  "Caracas",
  "Lima",
  "Santiago",
  "Madrid",
  "New York",
  "Dublin",
  "Bogota",
  "Amsterdam",
];
//Función para traer los datos y establecerlos en la tabla.
const traerDatos = async () => {
  for (item of ciudades) {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=30af9e0a67464767eba643d382bfbd9f&query=${item}`
    );
    const myJson = await response.json(); //Extraer JSON del http request
    //Filtro errores
    //Como está establecida la lista, no coloco filtros por error de transcripción o 404.
    if (
      myJson.error.code === 104 ||
      myJson.error.code === 101 ||
      myJson.error.code === 615 ||
      myJson.error.code === 408 ||
      myJson.error.code === 503 ||
      myJson.error.code === 504
    ) {
      return alert(
        "Ha ocurrido un error en la petición. Por favor intente más tarde."
      );
    }
    //Introduzco los datos de la API al html en la tabla responsive.
    $datos.innerHTML += `<tr>
         <th>${myJson.location.country}</th>
         <td>${myJson.location.name}</td>
         <td>${myJson.location.localtime}</td>
         <td>${myJson.current.temperature}</td>
         <td>${myJson.current.precip}</td>
         <td>${myJson.current.humidity}</td>
         </tr>`;
  }
};
//Gestor de eventos para cuando inicie el DOM.

d.addEventListener("DOMContentLoaded", (e) => {
  // traerDatos();
});
