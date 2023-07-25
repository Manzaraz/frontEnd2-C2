/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {
    // Saludamos al vistante
    alert("Bienvenido al juego de Piedra, Pael o Tijera de Frontend 2.!");
    // Guardar el nombre en una variable
    const nombre = prompt("Su nombre");

    // alert("Hola " + nombre + ".")
    alert(`¡Hola estimado: ${nombre}, Mucha suerte!`)

    // Mostramos los datos en consola
    console.log("---------------------------");
    console.log("El nombre del jugador es: ");
    console.log(nombre);
    console.log("---------------------------");

    return nombre
}

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
let nombreJugador = iniciarJuego();
console.log(nombreJugador);

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.


