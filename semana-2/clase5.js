const listadoNoticias = [{
    titulo: "La emoción de Lisandro Martínez",
    epigrafe: "La increíble ovación de los hinchas de Manchester United al defensor argentino: 'Quise llorar'.",
    foto: "./img/futbol.webp"
},
{
    titulo: "La renuncia de Liz Truss",
    epigrafe: "Boris Johnson interrumpió sus vacaciones y vuelve a sonar fuerte entre los posibles sucesores.",
    foto: "./img/boris.webp"
},
{
    titulo: "Los motivos",
    epigrafe: "Una escuela argentina fue elegida entre las diez mejores del mundo.",
    foto: "./img/escuela.webp"
}
]

// Vamos a trabajar con nodos de manera dinámica, sobre todo crearlos desde JS en vez de que estén estáticos en el HTML
// Para eso vamos a valernos de array listadoNoticias que tenemos más arriba
// ¿Cual es la idea? utilizar la información que nos llega del listado para presentarla en pantalla.

// Primero, mantengamos el HTML vinculado solo con clase5 y clase6 👌

/* -------------------------- PRACTICANDO ATRIBUTOS ------------------------- */
// Completemos correctamente el 'alt' de cada imagen con la frase "miniatura de noticia"


// rellenamos el atributo👇


// Hagamoslo más dinámico y recorramos todas las imagenes👇


/* ---------------------- PRACTICANDO CREACION DE NODOS --------------------- */
// 1- Ahora vamos a ir al HTML y eliminar los 3 Article que se encuentran en el main.
// 2- Comentamos la parte de este código de "Practicando atributos"
// 3- Vamos a crear de a uno e insertarlos en el HTML usando un bucle👇




/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Antes de comenzar vamos a comentar la parte de PRACTICANDO ATRIBUTOS y PRACTICANDO CREACION DE NODOS.
// Una vez que solo tenemos el código comentado podemos empezar la practica.
// 1- Debemos reutilizar el "listadoNoticias" para lograr el mismo resultado de crear los nodos dinamicamente.
// 2- La diferencia ahora radica en utilizar un bucle y dentro del mismo utilizar la notación de Plantillas Literales (con comillas invertidas -> ``)
// 3- El resultado debe ser el mismo que en el caso anterior pero vamos a implementar el método innerHTML para insertar la plantilla creada.
// Ejemplo: si quiero insertar un titulo en el body, haría los siguiente:
// document.querySelector('body').innerHTML += `<h1>Nuevo Título</h1>`;

function renderizandoElementos() {
    // desarrollar la consigna aquí


}
renderizandoElementos();