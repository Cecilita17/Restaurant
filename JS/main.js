/* //Carrito con array y prompt
let entrada = prompt("Ingresar producto. \n Para continuar, escriba CONTINUAR");

const compras = [];
while (entrada != "CONTINUAR"){
    compras.push(entrada);
    entrada = prompt("Ingresar producto \n Para continuar, escriba CONTINUAR")
}

console.log(compras);


function listaCompras(){
    for (const elemento of compras) {
        elemento += elemento.precio
    }
}

 */




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

function nuevProd(producto, nombre, direccion, telefono){
    let productoAgregado = new RealizarPedido(ingProducto, ingNombre, ingDireccion, ingTelefono)
    return nuevProd;
}

const compras = [];
for (let index = 0; index <3 ; index++) {
    nuevProd(ingProducto, ingNombre, ingDireccion, ingTelefono);
    compras.push(nuevProd);
}

function listaCompras(){
    for (const elemento of compras) {
        elemento += elemento.precio
    }
}
