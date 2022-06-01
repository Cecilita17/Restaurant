//Nombre de usuario y contraseña

let nombreUsuario = prompt("Ingrese nombre de usuario")

while (nombreUsuario == "" ) {
    alert ("Nombre ingresado no es valido");
    nombreUsuario = prompt("Ingrese nombre de usuario")
}

let contrasenia = prompt("Ingrese contraseña")
while (contrasenia == "" ) {
    alert ("Contraseña ingresada no es valida");
    contrasenia = prompt("Ingrese contraseña");
}
if (nombreUsuario != "" && contrasenia != ""){
    alert ("Datos ingresados correctamente")
} else {
    alert ("Los datos ingresados son invalidos")
}


//Seleccione su pais

let entrada =  prompt("Seleccione su pais. \n Argentina \n Chile \n México \n Canadá \n Estados Unidos \n Para salir escriba ESC");
let ingresados = '';
while (entrada != 'ESC') {
    switch (entrada) {
        case "Argentina":
            alert("Seleccionó Argentina");
            break;
        case "Chile":
            alert("Seleccionó Chile");
            break;
        case "México":
            alert("Seleccionó México ");
            break;
        case "Canadá":
            alert("Seleccionó Canadá");
            break;
        case ("Estados Unidos"):
            alert("Seleccionó Estados Unidos");
        default:
            alert("Error. Pais seleccionado no se encuentra en la lista");
            break;
    }
    entrada =  prompt("Seleccione su pais. \n Argentina \n Chile \n México \n Canadá \n Estados Unidos \n Para salir escriba ESC");
}
