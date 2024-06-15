'use strict'

//mostrar todos los numeros divisores de un numero introducido en pantalla

var num = parseInt(prompt("ingrese el numero",0));
for(var i = 1; i<=num;i++){
    if((num%i)==0){
        document.write("divisores "+i+"<br>");

    }   
}