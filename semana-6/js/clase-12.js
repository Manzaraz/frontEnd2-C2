// 🚩 Primero que nada vamos a enlazar el HTML con este nuevo script y a su vez
// vamos a comentar la linea que lo vincula con el script de la clase 16.
// La idea es desarrollar en este script las nuevas y mejoradas funcionalidades.

/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: Consulta a la API                       */
/* -------------------------------------------------------------------------- */
// En este caso vamos a consultar a un servidor del cual nos vamos a traer la data.
// Esta API tiene su documentación en: https://jsonplaceholder.typicode.com/
// Vamos a implementar el endpoint que nos devuelve comentarios para mostrarlos en pantalla.

function consultaApi(endpoint) {

    fetch(endpoint)
        .then((respuesta) => {  // este then lo necesito para parasear la información, ya que hasta este punto estoy recibiendo un JSON
            // console.log(respuesta.json());
            return respuesta.json()
        })
        .then(respuestaJS => { // este then lo necesito para poder utilizar  y renderizar los comentairos ya que es aquí un objeto literal de js
            // console.log(respuestaJS);
            renderizarElementos(respuestaJS)
        })
        .catch(err => {
            console.error(err)
        })// MANEJAR EN CASO DE ERROR


}

/* -------------------------------------------------------------------------- */
/*                      [5] FUNCION: Escuchamos el click                      */
/* -------------------------------------------------------------------------- */
// Vamos a reimplementar la escucha del click lanzar las nuevas funciones.

const boton = document.querySelector('button');
const endpoint = 'https://jsonplaceholder.typicode.com/comments';

boton.addEventListener('click', function () {
    console.log("Click para ver comentarios");

    consultaApi(endpoint)

    console.log("Fin de comentarios");
})

/* -------------------------------------------------------------------------- */
/*                      [6] FUNCION: renderizar elementos                     */
/* -------------------------------------------------------------------------- */
// Acá vamos a reutilizar la función de renderizar renderizarElementos, implementando
// el .map() y .join() para obtener el resultado esperado.

function renderizarElementos(listado) {
    console.log(listado);
    const comentarios = document.querySelector(".comentarios")

    /*
    // Utilizando forEach para renderizar 
    comentarios.innerHTML = ""
    listado.forEach(comentario => {
        comentarios.innerHTML += `
        <div data-id="${comentario.postId}" class="comentario">
             <h4>${comentario.email}</h4>
             <p>${comentario.name}</p>
         </div>`
    });
    */


    // /*
    // Utilizando map para renderizar 
    comentarios.innerHTML = listado.map(comentario => {
        return `
         <div data-id="${comentario.id}" class="comentario">
             <h4>${comentario.email}</h4>
             <p>${comentario.body}</p>
         </div>`
    }).join("")
    // */

}

/* ----------------------------- Mesa de trabajo ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                              Mejoras de código                             */
/* -------------------------------------------------------------------------- */
// En este caso no debemos desarrollar una nueva funcionalidad necesariamente. Aunque
// siempre que lo creas necesario va a estar bien modularizar en funciones el código.
// Queda a criterio del grupo generar o no nuevas funciones.
// En este caso deberan cumplir con nuevos requerimientos que necesita la aplicación.
// 1- En el caso de la consulta a la API, si la misma no es satisfactoria, deberá arrojar
// un error que se le muestre al usuario.
// 2- Para lograr ver el error podemos forzarlo modificando el endpoint incorrectamente,
// para detectar y arrojar el error deben implementar el bloque try().catch()
// 3- Si los comentarios llegan y se cargan correctamente, el botón de "Ver comentarios"
// debe desaparecer de la interfaz. Así evitamos que se vuelva a llamar a la API.
// 4- Solo deben cargarse los primeros 10 comentarios que nos llegan.