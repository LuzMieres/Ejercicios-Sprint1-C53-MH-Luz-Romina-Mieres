//Ejercicio 1
let titulo
console.log(document.getElementById('h1'))

//Ejercicio 2
let tituloPrincipal = 'Frutas'
document.getElementById('h1').innerText=tituloPrincipal


//Ejercicio 3
const color = document.querySelectorAll('.clase-color')
color [0].className += " bg-orange-300"
color [1].className += " bg-orange-300"
console.log(color)


//Ejercicio 4
const foot = document.querySelector('footer p')
foot.textContent += " Luz Romina Mieres - Cohort N°53"

//Ejercicio 5
let $main = document.getElementById('contenedor')
console.log($main)

//Ejercicio 6

function estructuraCard(nombre, foto, descripcion) {
    return `
    <div class="contenedor w-56 h-72 shadow-2xl border-solid border-2 border-black rounded-2xl text-center">
    <h4 class="font-bold pb-1">${nombre}</h4>
    <img class="h-40 w-56 object-cover" src="${foto}" alt="imagen-fruta">
    <p class="p-3 text-xs">${descripcion}</p>
    </div>`
}
console.log (estructuraCard)

//Ejercicio 7
function imprimirCard(listaFrutas) {
   let cards = ""
   for (const fruta of listaFrutas) {
    cards += estructuraCard(fruta.nombre, fruta.foto, fruta.descripcion)
   }
   return cards
}
console.log(imprimirCard(frutas))

//Ejercicio 8
$main.innerHTML=imprimirCard(frutas)

//Ejercicio 9
let $divLista = document.getElementById('lista')
console.log($divLista)


//Ejercicio 10 y 11
function crearLi(item) {
    const $li=document.createElement('li')
    $li.textContent=item
    console.log($li)
    return $li
}
const frutasDulces = frutas.filter((frutas) => frutas.esDulce == true);
let filter = (frutas) => frutas.esDulce == true

function imprimirLista(listaFrutas, elemento) {
    elemento.innerHTML = ""
    const fragment = document.createDocumentFragment()
    for (const fruta of frutasDulces) {
        const listItem= crearLi(fruta.nombre)
        fragment.appendChild( listItem )
    }
    elemento.appendChild(fragment)
}
console.log(imprimirLista(frutas, $divLista))
