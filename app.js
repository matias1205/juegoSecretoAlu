
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego de número secreto";


let parrafo = document.querySelector('p');
parrafo.innerHTML = "Seleccione un número del 1 al 10.";
*/




let intentos = 1;

let numeroMaximo = 10;

//Guardar Números sorteados
let numeroSorteados = [];


//variable global
let numeroSecreto;


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    //Si el número generado esta invliuda en la lista generamos otro

    if (numeroSorteados.length == numeroMaximo) {
        asignarTextoAEtiqueta('p', '¡Ya has encontrado todos los números!');
        return 0;
    }
    else {
        console.log(numeroSorteados);
        if (numeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        else {
            numeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);

    /*
    console.log(typeof(numeroDeUsuario));
    */
    console.log("numero secreto: " + numeroSecreto);
    console.log("Valor ingresado: " + numeroDeUsuario);
    console.log("Intento número:  " + intentos);
    /*
    console.log("¿Los numero Coinciden?");
    console.log(numeroSecreto === numeroDeUsuario);
    */
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoAEtiqueta('p', `¡Acertaste el número en ${intentos}
             ${(intentos === 1) ? "intento" : "intentos"}!`);


        document.getElementById('reiniciar').removeAttribute('disabled');



    }
    else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoAEtiqueta('p', 'El número secreto es menor: ');
        }
        else {
            asignarTextoAEtiqueta('p', 'El número secreto es mayor: ');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function reiniciarJuego() {
    //limpias input
    limpiarCaja();
    //Cambias los mensajes base y reinicias valores
    condicionesIniciales();
    //Desabilitas el boton HTML
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function asignarTextoAEtiqueta(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja() {
    document.querySelector("#numeroUsuario").value = '';
}

function condicionesIniciales() {
    asignarTextoAEtiqueta('h1', "Juego de número secreto");
    asignarTextoAEtiqueta('p', "Seleccione un número del 1 al " + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Llamado inicial de la función
condicionesIniciales();

