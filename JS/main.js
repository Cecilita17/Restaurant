//Carrito con array y prompt
let entrada = prompt("Ingresar producto. \n Para continuar, escriba CONTINUAR");
const compras = [];
while (entrada != "CONTINUAR"){
    compras.push(entrada);
    entrada = prompt("Ingresar producto \n Para continuar, escriba CONTINUAR")
}

console.log(compras);

// Carrito con objeto - funcion constructora
let ingProducto = prompt("Ingrese producto")
let ingNombre = prompt("Ingrese su nombre")
let ingDireccion = prompt("Ingrese su direccion")
let ingTelefono = prompt("Ingrese su telefono")

function RealizarPedido (producto, nombre, direccion, telefono){
    this.producto = producto;
    this.nombre = nombre,
    this.direccion = direccion,
    this.telefono = telefono;
}

const uno = new RealizarPedido(ingProducto, ingNombre, ingDireccion, ingTelefono)

console.log(uno);