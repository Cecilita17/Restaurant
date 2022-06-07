//Seleccione su país

alert("Seleccione un país de la siguiente lista: \n Argentina \n Chile \n México \n Canadá \n Estados Unidos ")

let escribirPais = prompt("Escriba el país seleccionado")

function elijaPais(pais){
    
    switch (pais) {
        case "Argentina":
            return "seleccionó Argentina";
        case "Chile":
            return "seleccionó Chile"
        case "México":
            return "Seleccionó México"
        case "Canadá":
            return "Seleccionó Canadá"
        case "Estados Unidos":
            return "Seleccionó Estados Unidos"
        default:
            return "Error. El país seleccionado no se encuentra en las opciones"
    }
}
let resultado = elijaPais(escribirPais);
alert(resultado)



//Nombre de usuario y contraseña

function usuario(){
    while (nombreUsuario == "" ) {
        alert ("Nombre ingresado no es valido");
        nombreUsuario = prompt("Ingrese nombre de usuario")
    } 
}
 
function contrasenia(){
    while (ingreseContrasenia == "" ) {
        alert ("Contraseña ingresada no es valida");
        ingreseContrasenia = prompt("Ingrese contraseña")
    }
}
 
let nombreUsuario = prompt("Ingrese nombre de usuario")
usuario()
let ingreseContrasenia = prompt("Ingrese contraseña")
contrasenia()
 
 
 
if (nombreUsuario != "" && contrasenia != ""){
    alert ("Datos ingresados correctamente")
} else {
    alert ("Los datos ingresados son invalidos")
}