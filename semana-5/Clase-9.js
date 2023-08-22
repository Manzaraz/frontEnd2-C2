/* -------------------------- estado por defecto ------------------------- */
const estadoUsuario = {
    email: "",
    password: "",
    rol: "",
    terminos: false
};

// ponemos en true solo cuando estén correctos
const estadoErroresOK = {
    email: false,
    password: false,
    rol: false,
    terminos: false
};

/* ---------------------------------- nodos --------------------------------- */

// capturamos todos los elementos que necesitamos
const formulario = document.forms[0];

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputRol = document.querySelector('#rol');
const inputTerminos = document.querySelector('#terminos');

const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const rolError = document.querySelector('#rolError');
const terminosError = document.querySelector('#terminosError');


/* -------------------------------------------------------------------------- */
/*                   [1] FUNCION: mostrar errores al usuario                  */
/* -------------------------------------------------------------------------- */
function mostrarErrores() {
    // por cada small mostramos u ocultamos el error
    estadoErroresOK.email ? emailError.classList.remove("visible") : emailError.classList.add("visible")
    estadoErroresOK.password ? passwordError.classList.remove("visible") : passwordError.classList.add("visible")
    estadoErroresOK.rol ? rolError.classList.remove("visible") : rolError.classList.add("visible")
    estadoErroresOK.terminos ? terminosError.classList.remove("visible") : terminosError.classList.add("visible")

}

/* -------------------------------------------------------------------------- */
/*               [2] FUNCION: actulizamos los estados de la app               */
/* -------------------------------------------------------------------------- */

// 👇 por cada cambio en el formulario actualizamos
formulario.addEventListener('change', function () {

    // 👇 actualizo el estado de la pantalla con los datos
    estadoUsuario.email = inputEmail.value
    estadoUsuario.password = inputPassword.value
    estadoUsuario.rol = inputRol.value
    estadoUsuario.terminos = inputTerminos.value
    // console.log("hola");

    // 👇 actualizo el estado del error segun el estado del usuario
    estadoErroresOK.email = validarEmail(estadoUsuario.email)
    estadoErroresOK.password = validarPassword(estadoUsuario.password);
    estadoErroresOK.rol = validarRol(estadoUsuario.rol);
    estadoErroresOK.terminos = validarTerminos(estadoUsuario.terminos);


    // finalmente muestro los errores presentes
    mostrarErrores()
});


/* -------------------------------------------------------------------------- */
/*                        [3] FUNCIONES: validar campos                       */
/* -------------------------------------------------------------------------- */
function validarEmail(email) {
    let resultado = false;

    // Validacion de email a la vieja escuela JS
    // if (
    //     email.includes("@") &&
    //     email.includes(".") &&
    //     !email.includes(" ") &&
    //     email.length > 5
    // ) {
    //     resultado = true
    // }

    // mail@algo.com
    // EJEMPLO CON EXPRESION REGULAR 👇
    let regExp = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")
    if (regExp.test(email)) {
        resultado = true
        console.log("cumple");
    }


    return resultado
}

function validarPassword(password) {
    let resultado = false;

    // si pasa las pruebas lo damos por válido 👇
    if (password.length > 5 && !password.includes(" ")) {
        resultado = true;
    }
    return resultado;
}

function validarRol(rol) {
    let resultado = false;

    // si pasa las pruebas los damos por válido
    if (rol == "frontend" || rol == "backend") {
        resultado = true;
    }
    return resultado;

}

function validarTerminos(verificacion) {
    let resultado = false;

    // si pasa las pruebas los damos por válido
    if (verificacion) {
        resultado = true;
    }
    return resultado;
}


/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: escuchamos el submit                     */
/* -------------------------------------------------------------------------- */

// en el evento submit nos remitimos a chequear nuestro estado de errores
formulario.addEventListener('submit', function (evento) {
    // prevenimos el default para manejar nososotro el comportamiento
    evento.preventDefault()

    if (
        estadoErroresOK.email &&
        estadoErroresOK.password &&
        estadoErroresOK.rol &&
        estadoErroresOK.terminos
    ) {
        alert("Pasó todas las pruebas")
        navegarPaginaExito()
    }
});




/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Deshabilitar el boton del formulario.
// 2 - Esperar 3 segundos para redireccionar a la página de usuario.html
// 3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
// 4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el botón de "Atrás"(la flechita del navegador) el usuario vuelva a index.
// evento location.
// location.replace()

function navegarPaginaExito() {
    //   desarrollar la funcion aqui

}
