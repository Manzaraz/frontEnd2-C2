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

    // Pedimos el nombre de usuario hasta que sea válido:

    // Insertamos el nombre en el HTML


}
obtenerUsuario();

/* -------------------------------------------------------------------------- */
/*                [2] FUNCION: renderizar tarjetas del almbumes               */
/* -------------------------------------------------------------------------- */
//forEach, template strings, innerHTML
function renderizarAlbumes(listado) {

    // primero capturamos el nodo que se convertirá en nuestro contenedor de albumes

    // nos aseguramos de vaciar el contenedor antes de insertar nuevos elementos


    /* Método de insersión de Nodos */


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
function mostrarDatosEnPerfil() {
    // desarrollar la función 👇

}
mostrarDatosEnPerfil();