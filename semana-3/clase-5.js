/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [{
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true
},
{
    id: "y456",
    nombre: "Thriller",
    imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: true
},
{
    id: "z789",
    nombre: "Random Access Memories",
    imagen: "https://imagescdn.juno.co.uk/300/CS489364-01A-MED.jpg",
    like: false
},
{
    id: "a987",
    nombre: "Abbey Road",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: true
},
{
    id: "b654",
    nombre: "Origin of Symmetry",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false
},
{
    id: "c321",
    nombre: "Back in Black",
    imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false
}
];



/* -------------------------------------------------------------------------- */
/*                  [1] FUNCION: captar el nombre de usuario                  */
/* -------------------------------------------------------------------------- */
//do while, prompt, innerText
function obtenerUsuario() {
    const nombreUsuario = document.querySelector("#nombreUsuario")
    // console.log(nombreUsuario);
    let usuario = ""

    // Pedimos el nombre de usuario hasta que sea válido:
    do {
        usuario = prompt("Ingrese su nombre de Usuario: ").toLowerCase()
    } while (usuario === null || usuario === "" || usuario.length < 3);

    // Insertamos el nombre en el HTML
    let nombres = usuario.split(" ")
    // console.log(nombres);
    // console.log(nombres.map((nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1)));

    usuario = nombres.map((nombre) => nombre.charAt(0).toUpperCase() + nombre.slice(1)).join(" ")
    nombreUsuario.textContent = usuario



}
obtenerUsuario();

/* -------------------------------------------------------------------------- */
/*                [2] FUNCION: renderizar tarjetas del almbumes               */
/* -------------------------------------------------------------------------- */
//forEach, template strings, innerHTML
function renderizarAlbumes(listado) {
    // Capturamos el selector del ul con la clase covers
    // primero capturamos el nodo que se convertirá en nuestro contenedor de albumes
    const covers = document.querySelector(".covers")
    // nos aseguramos de vaciar el contenedor antes de insertar nuevos elementos
    // console.log(covers);
    covers.innerHTML = ""
    // console.log(covers.children);

    /* Método de insersión de Nodos */
    // albumesFamosos.forEach( album => {
    albumesFamosos.forEach(function (album) {
        // Primero creamos estos elementos 
        const li = document.createElement("li")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const i = document.createElement("i")

        // Agregamos los atributos a cada nodo creado
        li.setAttribute("data-id", album.id)
        img.setAttribute("src", album.imagen)
        p.textContent = album.nombre
        // i.setAttribute("class", "fa fa-heart favorito")
        // quiero agregar la clase favorito con un operador ternario
        // notacion condición ? expr1 : expr2
        i.setAttribute("id", album.id)
        i.setAttribute("class", `fa fa-heart ${album.like ? "favorito" : ""}`)
        // i.setAttribute("class", `fa fa-heart`)
        // i.setAttribute("class", album.like ? "favorito" : "")
        // i.classList.add(album.like ? "favorito" : "")

        // Cargamos los nuevos nodos al selector covers
        li.appendChild(img)
        li.appendChild(p)
        li.appendChild(i)

        // Ahora nos quedad agregar este contenedor (li) a nuestro DOM en el selector covers
        covers.appendChild(li)

    })


    const CERATI = {
        id: "ar77",
        nombre: "Fuerza Natural",
        imagen: "http://cerati.com/fuerza_natural/tapa.jpg",
        like: true
    }

    // metodo de template Literals 
    covers.innerHTML += `
        <li data-id="${CERATI.id}">
            <img src="${CERATI.imagen}" alt="${CERATI.nombre}">
            <p>${CERATI.nombre}</p>
            <i id="y456" class="fa fa-heart ${CERATI.like ? "favorito" : ""}  "></i>
        </li>
    `


    // ☝ importante repasar el operador ternario, en este caso si el album tiene su
    // propiedad like en true, se le agrega la clase "favorito" al elemento


};

renderizarAlbumes(albumesFamosos);



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
// Paso 1) comentar las líneas del forEach(), y trata de renderizar los álbumes, pero esta ves usando la insersión template literals
// Paso 2) Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )
/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
// Paso 1) comentar las líneas del forEach(), y trata de renderizar los álbumes, pero esta ves usando la insersión template literals
// Paso 2) Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )

function mostrarDatosEnPerfil(albumesFamosos) {
    // Obtener elementos necesarios para el perfil

    const cantAlbums = document.getElementById('cant-albums'),
        cantFavoritos = document.getElementById("cant-favoritos")
    let contadorAlbum = 0
    let contadorFavoritos = 0

    albumesFamosos.forEach(album => {
        contadorAlbum++
        if (album.like) {
            contadorFavoritos++
        }
    })
    console.log(contadorAlbum)
    console.log(contadorFavoritos)

    if (contadorAlbum == 1) {
        cantAlbums.innerText = contadorAlbum + " album"
    } else {
        cantAlbums.innerText = contadorAlbum + " albumes"
    }
    if (contadorFavoritos == 1) {
        cantFavoritos.innerText = contadorFavoritos + " favorito"
    } else {
        cantFavoritos.innerText = contadorFavoritos + " favoritos"
    }
}
mostrarDatosEnPerfil(albumesFamosos)