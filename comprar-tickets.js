const valorTicket = 200;

let desEstudiante = 80;
let desTrainee = 50;
let desJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("correo");
let cantidadTickets = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

function resumen(){
    //Validaciones de los campos
    if(nombre.value === ""){
       alert("Por favor, ingrese su nombre");
       nombre.focus();
       return; 
    }
    if(apellido.value === ""){
        alert("Por favor, ingrese su apellido");
        apellido.focus();
        return; 
    }
    if(email.value === ""){
        alert("Por favor, ingrese su email");
        email.focus();
        return; 
    }
    const validarEmail = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    if(!validarEmail(email.value)){
        alert("Por favor, ingrese un correo electrónico válido");
        email.focus();
        return;
    }
    if((cantTickets.value == 0) || (isNaN (cantTickets.value))){
        alert("Ingrese una cantidad válida de tickets");
        cantTickets.focus();
        return;
    }
    if(categoria.value ==""){
        alert("Por favor, seleccione una categoría");
        categoria.focus();
        return;
    }

    //Multiplico la cantidad de tickets por el valor
    
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    //Calculo el valor según categoría
    if (categoria.value ==0) {
        totalValorTickets = totalValorTickets;
    }
    if (categoria.value ==1) {
        totalValorTickets = totalValorTickets - (desEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value ==2) {
        totalValorTickets = totalValorTickets - (desTrainee / 100 * totalValorTickets);
    }
    if (categoria.value ==3) {
        totalValorTickets = totalValorTickets - (desJunior / 100 * totalValorTickets);
    }
    //Le digo que me lo muestre en el html, como contenido de la etiqueta correspondiente
    totalAPagar.innerHTML = "Total a pagar: $" + totalValorTickets;    
}

//Llamo a la función y le digo que se ejecute cuando el usuario haga click en el botón Resumen
btnResumen.addEventListener('click', resumen);

//botón Borrar
function reset_resumen (){
    totalAPagar.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_resumen);

//El cálculo lo hace bien, pero enseguida da un salto y se resetea sin dar click al botón Borrar
