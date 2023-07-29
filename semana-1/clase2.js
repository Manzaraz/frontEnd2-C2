/* -------------------------------------------------------------------------- */
/*                                  FUNCION 2                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve 1, 2 o 3 según la elección del usuario.
// Hasta que el usuario ingrese un dato válido le seguimos pidiendo que elija.

function pedirJugada() {
    // empezamos con la variable eleccion en 0
    let eleccion = 0

    do {
        // pedimos que elija una opcion válida  
        // convertimos el texto que nos llega en un número
        // y reemplazamos en valor guardado en la variable
        eleccion = parseInt(prompt("Ingrese para jugar: 1(piedra), 2(papel) o 3(tijera)"))

    } while (isNaN(eleccion) || eleccion < 1 || eleccion > 3)

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("La eleccion del jugador es:")
    console.log(eleccion);
    console.log("----------------------------");

    // Finalmente devolevemos el valor de eleccion
    return eleccion
}

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                                 */
/* -------------------------------------------------------------------------- */
function jugadaRandom() {
    // let numero = (Math.random()*(max - min) + min)
    // let numero = parseInt(Math.random() * n) + 1; // Según stack overflow
    let numero = parseInt(Math.random() * 3) + 1; // Según stack overflow
    // let numero = parseInt(Math.random() * (3 - 1) + 1)
    // let numero = Math.floor(Math.random() * (3 - 1) + 1)
    // let numero = Math.round(Math.random() * (3 - 1) + 1)
    // console.log(numero);

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("La  del Navegador es:")
    console.log(numero);
    console.log("----------------------------");

    // finalmente devolvemos el valor de la eleccion
    return numero
}



/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */
// 👇 Esta funcion nos devuelve el resultado de la partida según las elecciones.
// Comparamos la eleccion de cada uno para saber quien pierde y quien gana.

function compararJugadas() {
    const RESULTADOS_POSIBLES = ['¡Genial, ganaste!', 'Esto fue un empate.', 'Una lástima, perdiste.'];
    const OPCIONES = ['piedra', 'papel.', 'tijera'];

    const eleccionJugador = pedirJugada()
    const eleccionComputadora = jugadaRandom()

    // El valor por defecto de la jugada gana
    let resultadoRonda = RESULTADOS_POSIBLES[0]

    if (eleccionJugador == eleccionComputadora) {
        resultadoRonda = RESULTADOS_POSIBLES[1]
    } else if (
        (eleccionJugador == 1 && eleccionComputadora == 2) ||
        (eleccionJugador == 2 && eleccionComputadora == 3) ||
        (eleccionJugador == 3 && eleccionComputadora == 1)
    ) {
        resultadoRonda = RESULTADOS_POSIBLES[2]
    }

    // Devolvemos la frase con el resultado de la partida
    return `La computadora eligió: ${OPCIONES[eleccionComputadora - 1]} \n eleccion Jugador: ${OPCIONES[eleccionJugador - 1]} \n ${resultadoRonda}`

}

// const resultadoDePartida = compararJugadas()
// console.log(resultadoDePartida);
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.



