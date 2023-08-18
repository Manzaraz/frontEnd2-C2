/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario() {
    // establecemos un objeto vacío para después rellenarlo
    const objetoInformacion = {
        nombre: "",
        password: "",
        telefono: "",
        hobies: [],
        nacionalidad: "",
    }

    // capturamos todos los nodos
    // Fieldset Datos
    const nom = document.querySelector("#nom")
    const pass = document.querySelector("#pass")
    const tel = document.querySelector("#tel")

    //fieldset listado-hobbies
    const hobbies = document.querySelectorAll("[name=hobbies]")

    //fieldset pais de nacimiento
    const nacionalidad = document.querySelectorAll("[name=nacionalidad]")
    console.log(nacionalidad);

    // rellenamos el objeto con la info correspondiente \
    objetoInformacion.nacionalidad = nom.value
    objetoInformacion.password = pass.value
    objetoInformacion.telefono = tel.value


    // recorremos los checkbox para ver cual es el elemento checkeado en la lista de nodos de hobbies
    hobbies.forEach(function (hobbie) {
        // nacionalidad seleccionada es la que se guarda en el objeto
        if (hobbie.checked) {
            console.log(hobbie.checked);
            // de este modo guardamos en el array de la propiedad objetoInformacion.hobies
            objetoInformacion.hobies.push(hobbie.id)
        }
    })
    // recorremos los radius para ver cual es el elemento checkeado
    nacionalidad.forEach(function (nacion) {
        // nacionalidad seleccionada es la que se guarda en el objeto
        if (nacion.checked) {
            console.log(nacion.checked);
            // de este modo guardamos en el array de la propiedad objetoInformacion.hobies
            objetoInformacion.nacionalidad = nacion.id
        }
    })

    return objetoInformacion

}

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: escuchamos el submit del form                 */
/* -------------------------------------------------------------------------- */





/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de obejetoInformacion
// Entonces dentro de esta función vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
// 4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
// 5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
// 5- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."
function validarInformacion(usuario) {
    let errores = [];
    // 👇 desarrollar aqui la funcion

    return errores;
}
