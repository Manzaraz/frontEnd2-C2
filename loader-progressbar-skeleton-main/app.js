/* --------------------------------- spinner -------------------------------- */
// necesitamos clickear el boton y que desaparezca el texto y se vea el gif unos segundos
const btn = document.querySelector('button');
const btnImg = document.querySelector('button img');
const btnTexto = document.querySelector('button span');

btn.addEventListener('click', ()=>{
    console.log("click");
    // mostramos el spinner
    invertirClases();
    btn.setAttribute('disabled','')
    // despues de de 3 segundos invertimos la situacion
    setTimeout(()=>{
        invertirClases()
        btn.removeAttribute('disabled')
    }, 5000)
})


function invertirClases() {
    btnImg.classList.toggle('oculto')
    btnTexto.classList.toggle('oculto')
}

/* ----------------------------- barra progreso ----------------------------- */
const barra = document.querySelector('#barra');
const relleno = document.querySelector('#relleno');

let porcentaje = 0;

// mostramos la barra en el porcentaje incial 👇
relleno.style.width = `${porcentaje}%`

const intervalo = setInterval(()=>{
    if(porcentaje<101){
        porcentaje++;
        relleno.style.width = `${porcentaje}%`
    }else{
        // frenamos el intervalo
        clearInterval(intervalo)
    }

    console.log(porcentaje);
},100);


/* -------------------------------- skeleton -------------------------------- */

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';
const skeleton = document.querySelector('.skeleton');
const pokemon = document.querySelector('#pokemon')

fetch(apiUrl)
    .then(res => res.json())
    .then(info => {
            console.log(info.name)
            console.log(info.sprites.front_default)
            console.log(info.types[0].type.name)
            // removemos la tarjeta existente
            skeleton.remove()
            // insertamos la tarjeta
            pokemon.innerHTML += componenteTarjeta(info.name, info.sprites.front_default,info.types[0].type.name)

    })

const componenteTarjeta = (nombre, img, tipo) => {

    return `
    <article>
        <h2>${nombre}</h2>
        <img src="${img}" alt="pokemon">
        <h6>Tipo: ${tipo}</h6>
    </article>
    
    `
}