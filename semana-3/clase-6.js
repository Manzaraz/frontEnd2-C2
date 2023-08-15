/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - buscar el album por id en el array 
// - cambiar el estado del like
// - volver a renderizar
function marcarFavorito() {
    // selecciona todos los botones del like
    const botonesLike = document.querySelectorAll(".fa-heart")
    console.log(botonesLike);

    botonesLike.forEach(function (boton) {
        boton.addEventListener("click", function (evento) {
            console.log(evento)
            console.log(evento.target)
            console.log(evento.target.id)
            let albumId = evento.target.id

            albumesFamosos.forEach(album => {
                if (albumId == album.id) {
                    // console.log("coincide" + album.id);
                    console.log(album.like);
                    album.like = !album.like
                    console.log(album.like);
                }
            })

            // Para renderizar nuevamente las tarjetas para que se pinte de nuevo el album famos
            renderizarAlbumes()
            mostrarDatosEnPerfil(albumesFamosos)

            // agregar un listener para seguir escuchando si aprieta otro boton
            marcarFavorito()
        })
    })

}
marcarFavorito()



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

function eliminarAlbum() {
    // desarrollar la función 👇
    window.addEventListener("keydown", function (ev) {
        console.log(ev);
        console.log(ev.key);
        if (ev.key == "f") {
            const albumAEliminar = prompt("¿Qué album desea eliminar?").toLowerCase()

            const posicionBuscada = albumesFamosos.findIndex(el => el.nombre.toLowerCase() === albumAEliminar)
            console.log(posicionBuscada);
            if (posicionBuscada == -1) {
                alert("El album no está en la lista de reproduccion")
            } else {
                albumesFamosos.splice(posicionBuscada, 1)
            }


        }
        renderizarAlbumes()
        marcarFavorito()
        mostrarDatosEnPerfil(albumesFamosos)
    })
}
eliminarAlbum();