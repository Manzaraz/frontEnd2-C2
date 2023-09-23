window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0]
    const email = document.querySelector("#inputEmail")
    const password = document.getElementById("inputPassword")
    const url = "https://todo-api.ctd.academy/v1"
    // console.log(form);

    // Agrego los selectores del la img del boton y del span para animarlos
    const btn = document.querySelector('button');
    const btnImg = document.querySelector('button img');
    const btnTexto = document.querySelector('button span');

    // Aqui en este punto yo me encargo de mandar un a llamar la las funcion normalizar Texto y las validaciones

    const errors = {
        email: false,
        password: false
    }

    // estes para cuando yo salgo del imput en vivo valido si es un mail o contraseña
    email.addEventListener("input", e => validarEmail(e))
    // email.addEventListener("input", validarEmail)
    password.addEventListener("input", validarContrasenia)

    // Valido que los campos tengan los requierimientos necesarios en tiempo real
    email.addEventListener("blur", e => isEmpty(`⚠️ Se requiere que ingrese su ${email.name}`, e))
    password.addEventListener("blur", e => isEmpty(`⚠️ Se requiere que ingrese su ${password.name}`, e))

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault()

        // mostramos el spinner
        invertirClases()
        btn.removeAttribute("disabled")

        //Creamos el cuerpo de la request (petición al servidor)
        const payload = {
            email: email.value,
            password: password.value
        }
        // vemos el objeto que recibimos del formulario
        console.log(payload);

        //configuramos la request del Fetch
        const settings = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        // Lanzamos la consulta del login a la API
        realizarLogin(settings)

        // Limpiamos el formulario
        form.reset()

    });


    // Creo una función para invertir las calses relacionadas con las modificaciones del botón submit del formualrio
    function invertirClases() {
        btnImg.classList.toggle("oculto")
        btnTexto.classList.toggle("oculto")
    }


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
        // console.log(settings);
        console.log("Lanzar la consulta a la API...");


        fetch(`${url}/users/login`, settings)
            .then(response => {
                console.log(response);

                // al hacer el fetch y empezar a trabajar la respuesta invertimos la situacion
                invertirClases()
                btn.removeAttribute("disabled")

                // manejar el error de la request.
                if (response.ok) return response.json()

                // si llego acá es por que la request no es la correcta y fuerzo el rechazo de la promesa del fetch
                // return Promise.reject(response)

            })
            .then(data => {
                console.log("Promesa cumplida💍");
                console.log(data);

                if (data.jwt) {
                    // Guardamos el dato jwt en el local storage (este token de autenticación)
                    localStorage.setItem("jwt", JSON.stringify(data.jwt))

                    // redireccionamos a nuestro dashboard de todo
                    location.replace("./mis-tareas.html")
                }

            })
            .catch(err => {
                console.warn("Promesa rechazada ");
                console.log(err);
                if (err.status == 400) {
                    console.warn("Contraseña incorrecta")
                    alert("Contraseña incorrecta")
                } else if (err.status == 404) {
                    console.warn("El usuario no existe")
                    alert("El usuario no existe")
                } else {
                    console.error("Error del servidor | url no existe")
                    alert("Error del servidor | url no existe")
                }
            })
    };

});