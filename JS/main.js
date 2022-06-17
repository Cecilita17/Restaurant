let ingProducto = prompt("Ingrese producto")
let ingPrecio = prompt("Ingrese el precio")
let ingNombre = prompt("Ingrese su nombre")
let ingDireccion = prompt("Ingrese su direccion")
let ingTelefono = prompt("Ingrese su telefono")

function RealizarPedido (producto, precio, nombre, direccion, telefono){
    this.producto = producto;
    this.precio = precio;
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
}


let compras = [];
for (let index = 0; index <3 ; index++) {
    let ingProducto = prompt("Ingrese producto")
    let ingPrecio = prompt("Ingrese el precio")
    let ingNombre = prompt("Ingrese su nombre")
    let ingDireccion = prompt("Ingrese su direccion")
    let ingTelefono = prompt("Ingrese su telefono")

    let nuevoProducto= new RealizarPedido(ingProducto, ingPrecio, ingNombre, ingDireccion, ingTelefono);
    compras.push(nuevoProducto);
    
}
console.log(compras);


const resultado1 = compras.filter((elemento) => elemento.producto.includes("fideos"))
const resultado2 = compras.find((elemento) => elemento.precio <= 300)

console.log(resultado1);
console.log(resultado2);
