// 👇Acá vemos que el document nos dá acceso a todo el DOM, ese arbol que contiene todos los nodos de nuestro sitio
console.log(document);

// Ahora vamos a utilizar 2 métodos propios de document que nos facilitan "pescar" elementos en el sitio:
// - querySelector()
// - querySelectorAll()

// Obtenemos el titulo principal
const titulo = document.querySelector("h1")

// Ahora vayamos a la consola y despleguemos la flecha que nos muestra todas las propiedades del nodo
console.log(titulo);

// nos traemos ahora un listado de nodos 👇
console.log(titulo.textContent);


// hacemos un selector más específico👇
const itemsMenu = document.querySelectorAll("ul li")
console.log(itemsMenu);

const infoExtra = document.querySelector(".info .clima")
console.log(infoExtra);

const datoExtra = document.querySelector("[src = './img/futbol.webp']")
console.log(datoExtra.children);

/* ------------------------------ Practicando ------------------------------ */
// Seleccionamos la lista de noticias y revisamos su informacion interna.
// Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
// 🚩 No es un Array.
const articulos = document.querySelectorAll("article ")
// const articulos = document.querySelectorAll("article h2")
console.log(articulos);

for (let i = 0; i < articulos.length; i++) {
    console.log(articulos[i]);
}

// Ahora hacemos la misma practica pero con ForEach, y accedemos a propiedades de los nodos.
// articulos.forEach(
//     function (articulo) {
//         // const titulo = articulo.querySelector('h2').innerText
//         const titulo = articulo.querySelector(`h2`).innerText
//         console.log(titulo);
//     }
// )

for (noticia of articulos) {
    const titulo = noticia.querySelector("h2").textContent
    console.log(titulo)
}
console.log(articulos);

console.log(typeof (articulos))
console.log(typeof (123))
console.log(typeof ("mundo"))



/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna: https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview


