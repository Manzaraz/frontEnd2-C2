/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario() {
    // 👇 establecemos un objeto vacío para despues rellenarlo
    const objetoInformacion = {
        nombre: "",
        password: "",
        telefono: "",
        hobbies: [],
        nacionalidad: "",
    }

    // Captura todos los nados
    //  fieldset de Datos
    const nom = document.querySelector("#nom")
    const pass = document.querySelector("#pass")
    const tel = document.querySelector("#tel")

    //  fieldset de listado-hobbies
    const hobbies = document.querySelectorAll("[name=hobbies]")

    //  fieldset de listado-hobbies
    const nacionalidad = document.querySelectorAll("[name=nacionalidad]")

    // rellenar el objeto con la info correspondiente
    // Datos 
    objetoInformacion.nombre = nom.value
    objetoInformacion.password = pass.value
    objetoInformacion.telefono = tel.value

    // Recorrer el la lista de checkbox para selecionar los que tengan la propiedad checked en true
    hobbies.forEach(function (hobbie) {
        if (hobbie.checked) {
            // Cada hobbie seleccionado lo sumamos al listado de hobbies
            objetoInformacion.hobbies.push(hobbie.id)
        }
    })

    // Recorrer el la lista de radio button este selecciona siun elemento
    nacionalidad.forEach(function (nacion) {
        if (nacion.checked) {
            // Cada hobbie seleccionado lo sumamos al listado de hobbies
            objetoInformacion.nacionalidad = nacion.id
        }
    })


    return objetoInformacion
}

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: escuchamos el submit del form                 */
/* -------------------------------------------------------------------------- */
const form = document.querySelector("form")

form.addEventListener("submit", function (ev) {
    // Prevenimos el comportamiento por defecto del HTML
    ev.preventDefault()
    // console.log(ev);

    // Utilizamos la función para captura de los datos del formulario
    const datos = capturarDatosFormulario()
    console.log(datos);

    // almacenamos los errores
    const errores = validarInformacion(datos)
    console.log("errores: " + errores);

    // Renderizar un span de errores
    renderizarErrores(errores)

    // Renderizar un span de éxito
    mostrarMensajeExito(errores)


})

// console.log(form);


/* -------------------------------------------------------------------------- */
/*                       [3] FUNCION: renderizar errores                      */
/* -------------------------------------------------------------------------- */
// Desarrollamos esta funcion para llamarla en el submit
function renderizarErrores(listado) {
    const cajaErrores = document.querySelector("#errores")

    // Si ya existe, debemos eliminar la caja del dom
    if (cajaErrores) {
        cajaErrores.remove()
    }

    if (listado.length > 0) {
        const divTemplate = document.createElement("div")
        divTemplate.setAttribute("id", "errores")
        divTemplate.style = "background:rgba(255, 0, 0, 0.2);padding:.5em 1em;color: red;margin: .5em 0;";
        listado.forEach(error => {
            divTemplate.innerHTML += `<p><spam>${error}</spam></p>`
        })

        form.appendChild(divTemplate)
    }
}


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [4] FUNCION: validar datos                         */
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

    // Validar el nombre 
    if (!isNaN(usuario.nombre) || usuario.nombre.length < 3) {
        errores.push("El nombre debe tener al menos 3 caracteres y no ser un número")
    }
    // Validar el password 
    if (usuario.password.trim().length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres y no ser un número")
    }
    // Validar el telefono 
    if (usuario.telefono.trim().length < 10) {
        errores.push("No es un teléfono válido debe tener al menos 6 caracteres y no ser un número")
    }
    // Validar el hobbies
    if (usuario.hobbies.length > 4 || usuario.hobbies.length == 0) {
        errores.push("Sólo es posible seleccionar hasta 4 hobies,(como mínimo un hobbie)")
    }

    // Validado de Nacionalidad

    return errores;
}

/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Recibe el listado de errores, y solo si no hay ninguno debe:
// 2 - mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde
// 3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
// 4 - a su vez se debe deshabilitar el boton del formulario
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario

function mostrarMensajeExito(listado) {
    if (listado == 0) {
        const divTemplate = document.createElement('div');
        divTemplate.setAttribute('id', 'exito');
        divTemplate.style = "background:rgba(0, 255, 0, 0.2);padding:.5em 1em;color: green;margin: .5em 0;";
        divTemplate.innerHTML += `<p>¡Formulario completado con éxito!</p>`

        form.appendChild(divTemplate);

        const boton = document.querySelector('button');
        boton.setAttribute('disabled', '')

        const cajaExito = document.querySelector('#exito');

        setTimeout(() => {
            cajaExito.remove();
            boton.removeAttribute('disabled');
            form.reset();
        }, 4000);
    }
}