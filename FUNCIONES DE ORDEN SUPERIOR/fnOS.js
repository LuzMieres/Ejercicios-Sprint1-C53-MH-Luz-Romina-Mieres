//Ejercicios: Funciones de Orden Superior
//Ejercicio 1
const imprimirMensaje = () => {
    console.log("Hola")
}


//Ejercicio 2
const createMultplication = (number1, number2)=> number1 * number2 
console.log( createMultplication( 2, 5 ) )

//Ejercicio 3
const array = [ 1,2,3,4,5,6,7,8,9 ]
const arrayfn = array.map( (createMultplication) =>{
return createMultplication *2
})
console.log(arrayfn)

//Ejercicio 4
console.log(beers)
const gradoAlcoholico = (cervezas) =>{
    const cervezasOrdenadas=cervezas.toSorted((a,b) => b.abv - a.abv)
    return cervezasOrdenadas.slice(0,10)
}
console.log(gradoAlcoholico(beers))

//Ejercicio 5
const menosAmargura = (cervezas) =>{
    const cervezasOrdenadas=cervezas.toSorted((a,b) => b.ibu - a.ibu )
    return cervezasOrdenadas.splice(0,10)
}
console.log(gradoAlcoholico(beers))

//Ejercicio 6
const nombreCerveza = (array, name)=>{
    const arrayObjeto=array.find (cerveza=>cerveza.name === name)
    return arrayObjeto
}
console.log (nombreCerveza(beers, 'Avery Brown Dredge'))

//Ejercicio 7
function cervezaPorIbu(arrayCervezas, valorIbu) {
    const cervezaEncontrada = arrayCervezas.find (cerveza => cerveza.ibu == valorIbu)
    if (cervezaEncontrada){
        return cervezaEncontrada
    }else{
        return `No hay cerveza con un valor de Ibu de ${valorIbu}`
    }
}
console.log(cervezaPorIbu(beers, 35))

//Ejercicio 8
function posicionCerveza (arrayCervezas, nombreCerveza){
    const cervezaEncontradaPosiion = arrayCervezas.findIndex(cerveza=>cerveza.name == nombreCerveza)
    if (cervezaEncontradaPosiion != -1) {
        return cervezaEncontradaPosiion
    }else{
        return `${nombreCerveza} No existe`
    }
}
console.log(posicionCerveza(beers, 'Avery Brown Dredge'))

//Ejercicio 9
function cervzaNivAlcoholAmargura(arrayCervezas, nombreCerveza, valorIbu, valorAbv) {
    const arrayCervezasOrdenadas = arrayCervezas.find (cerveza => cerveza.name == nombreCerveza && cerveza.ibu ==valorIbu && cerveza.abv == valorAbv )
    if (arrayCervezasOrdenadas){
        return arrayCervezasOrdenadas
    }else{
        return `No hay cerveza con el nombre ${nombreCerveza} con valor Ibu de ${valorIbu} y valor Abv de ${valorAbv}`
    }
}
console.log(cervzaNivAlcoholAmargura(beers,'Avery Brown Dredge', 59, 7.2  ))

//Ejercicio 10
function cervezasOrdenada (arrayCervezas, propiedad, boolean) {
    const ordenadas = arrayCervezas
                        .filter(cerveza => cerveza[propiedad])
                        .toSorted( (a,b)  => {
                            if (a[propiedad] < b[propiedad] ){
                                return -1                                
                            }
                            if (a[propiedad] > b[propiedad]) {
                                return 1                                
                            }
                            return 0
                        })
    if (boolean) {
        return ordenadas.slice(0,10)
    } 
    return ordenadas.reverse().slice(0,10)                   
}
console.log(cervezasOrdenada(beers, 'abv', true))
console.log(cervezasOrdenada(beers, 'abv', false))

//Ejercicio 11
const tabla = document.getElementById('cuerpoTabla')
console.log(tabla)

function crearFilas (beers){
    const tr = document.createElement ('tr')
    const tdName = document.createElement ('td')
    const tdIbu = document.createElement ('td')
    const tdAbv = document.createElement ('td')

    tdName.textContent=beers.name
    tdName.classList.add('miClase')
    tdIbu.textContent=beers.ibu
    tdIbu.classList.add('miClase')
    tdAbv.textContent=beers.abv
    tdAbv.classList.add('miClase')

    tr.append(tdName,tdIbu,tdAbv)
    return tr
}
function completarTabla (cervezas, tabla){
    let fragment = document.createDocumentFragment()
    for (const cerveza of cervezas) {
        const tr = crearFilas(cerveza)
        fragment.appendChild(tr)
        tabla.appendChild(fragment)
        
    }
}
completarTabla(beers, tabla)