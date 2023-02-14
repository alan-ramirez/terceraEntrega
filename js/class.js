// Clase Cliente (constructor)

class cliente {
    constructor(id, nombre, pesoInicial, pesoFinal){
        this.id = id,
        this.nombre = nombre,
        this.pesoInicial = pesoInicial,
        this.pesoFinal = pesoFinal
    }
}

//Clientes iniciales


const cliente1= new cliente(1,"Esteban",100, 90)

const cliente2 = new cliente(2,"Julian",88, 80)

const cliente3 = new cliente(3,"Martina", 70, 63)

const cliente4= new cliente(4,"Gisela", 60, 54)


let clientes = []
if(localStorage.getItem("clientes")){
    clientes = JSON.parse(localStorage.getItem("clientes"))
}else{
    console.log("Estableciendo historial de clientes")
    clientes.push(cliente1, cliente2, cliente3, cliente4)
    localStorage.setItem("clientes", JSON.stringify(clientes))
}
