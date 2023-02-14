//Defino altura a partir del imput

let altura = document.getElementById("calculador1")

// Funciones generales

function dividir(divi1, divi2){
    return divi1 / divi2
}

function ordenarMenormayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b)=> a.pesoInicial - b.pesoInicial)
    verHistorial(menorMayor)
}

function ordenarMayormenor(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((a,b)=> b.pesoInicial - a.pesoInicial)
    verHistorial(mayorMenor)
}

// Ver y ocultar el catologo

let historialClientes = document.getElementById("historial-btn") 
let VERhistorialClientes = document.getElementById("btn-historial") 


VERhistorialClientes.onclick = () =>{
    VerOcultarElhistorial()
}

historialClientes.onclick = () =>{
    verHistorial(clientes)
}

function VerOcultarElhistorial(array){
    if (clientes) {
        VERhistorialClientes.addEventListener("click", function (){
           verHistorial(clientes)
       })
   }
    if (clientes) {
        VERhistorialClientes.addEventListener("dblclick", function (){     
            historialClientes.innerHTML = ""
        })
    }
}


function verHistorial(array){
    historialClientes.innerHTML = ""
    for (let cliente of array){
        let nuevoCliente = document.createElement("ul")
        nuevoCliente.classList.add("my-2")
        nuevoCliente.innerHTML = `
        <ul class="list-group list-group-horizontal" id="${cliente.id}">
        <li class="list-group-item node-bg">${cliente.id}</li>
        <li class="list-group-item node-bg">${cliente.nombre}</li>
        <li class="list-group-item node-bg">Peso Inicial (Kg) ${cliente.pesoInicial}</li>
        <li class="list-group-item node-bg">Peso Final (Kg) ${cliente.pesoFinal}</li>
      </ul>
        `
        historialClientes.appendChild(nuevoCliente)
    }
}

// agregar Clientes

let botonAgregarPesoFinal = document.getElementById("btn-agregarPesoFinal")
botonAgregarPesoFinal.addEventListener("click", () => {cargarCliente(clientes)})


let inputNombre = document.getElementById("nombreCliente")
let inputPesoInicial = document.getElementById("nombrePesoInicial")

function cargarCliente(array) {
    let inputNombre = document.getElementById("nombreCliente")
    let inputPesoInicial = document.getElementById("nombrePesoInicial")
    let pesoFin = inputPesoInicial.value * 0.9;
    const ClienteNuevo = new cliente(array.length+1, inputNombre.value, inputPesoInicial.value, pesoFin)
    array.push(ClienteNuevo) 
    // verHistorial(array)
    inputNombre.value = ""
    inputPesoInicial.value = ""
    localStorage.setItem("clientes", JSON.stringify(array))
}

let checkboxH = document.getElementById("flexCheckH")
let checkboxM = document.getElementById("flexCheckM")

let btnIMC = document.getElementById("IMC0")
let inputCalculo = document.getElementById("calculador")

inputCalculo.addEventListener("input",function(){
    
    dividir(inputCalculo.value, altura.value)
    let IMC = dividir(inputCalculo.value, altura.value**2)*10000;

    checkboxH.addEventListener("change", function(){
        if (checkboxH.checked) {
            let IMCH = IMC
            btnIMC.innerHTML = `${IMCH}`
        } else {
            btnIMC.innerHTML = `${0}`
        }
    })
    checkboxM.addEventListener("change", function(){
        if (checkboxM.checked) {
            let IMCM = IMC
            btnIMC.innerHTML = `${IMCM}`
        } else {
            btnIMC.innerHTML = `${0}`
        }
    })
})

// ordenar historial

let mayorMenor = document.getElementById("mayorMenor")
let menorMayor = document.getElementById("menorMayor")

mayorMenor.onclick = function(){
    ordenarMayormenor(clientes)
}
menorMayor.onclick = function(){
    ordenarMenormayor(clientes)
}

let search = document.getElementById("search")
search.addEventListener("input", ()=>{
    buscarInfo(search.value, clientes)
})


function buscarInfo (buscado, array){
    let busquedaArray = array.filter(
        (cliente) => cliente.nombre.toLowerCase().includes(buscado.toLowerCase()) 
    )
    verHistorial(busquedaArray)
}