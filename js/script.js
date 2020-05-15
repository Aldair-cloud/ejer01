'use strict'

var d = parseInt(prompt("Ingrese un Número: "),0);

function factorial(f){
    var total = 1;
    for(var i= 1; i <= f; i++){
        total *= i;
    }
    return total;
}

alert("su numero factorial es: "+factorial(d));

