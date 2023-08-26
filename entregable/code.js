/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre,
    edad,
    ciudad,
    interesPorJs,
    anioActual = new Date().getFullYear()

  nombre = prompt("¿Cuál es su nombre?")
  let anioNacimiento = parseInt(prompt("¿Cuál es su año de nacimiento?"))
  edad = anioActual - anioNacimiento
  ciudad = prompt("¿En cuál ciudad vive ahora?")
  interesPorJs = confirm("¿Está interesado en aprender JS?") ? "¡Sí!" : "¡No!"

  datosPersona = { nombre, edad, ciudad, interesPorJs } // Destructuring
  console.log(datosPersona)
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector("#nombre").textContent = datosPersona.nombre
  document.querySelector("#edad").textContent = datosPersona.edad
  document.querySelector("#ciudad").textContent = datosPersona.ciudad
  document.querySelector("#javascript").textContent = datosPersona.interesPorJs

  profileBtn.removeEventListener("click", renderizarDatosUsuario)
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const fila = document.querySelector("#fila")
  // fila.innerHTML = ""

  listado.forEach(function (materia) {
    fila.innerHTML += `
      <article class="caja">
        <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
        <h3 class="lenguajes"> ${materia.lenguajes}</h3>
        <p class="bimestre"> ${materia.bimestre}</p>
      </article>
    `
    materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas)
  })
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  // const dark = document.querySelector("#sitio")
  // dark.classList.toggle("dark")
  document.querySelector("#sitio").classList.toggle("dark")
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  // if (e.code == "KeyF") {
  if (e.key == "F") {
    document.querySelector("#sobre-mi").classList.remove("oculto")
  }
})