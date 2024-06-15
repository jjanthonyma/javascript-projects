'use strict'

//mostrar la media y la suma de los resultado de los numero que meta el usuario hasta que meta un negativo

var suma = 0;
var contador = 0;

do{
 var numero = parseInt(prompt("introduce numero hasta que metas uno negativo",0));
 if(isNaN(numero)){
    numero=0;
 }
 else if(numero>0){
    suma = suma+numero;
    contador++;
 }

 console.log(suma);
 console.log(contador);
}
while(numero>=0)

    alert("la suma de todos los numeros es "+suma);

    alert("la media de todos los numeros es= "+ (suma/contador))

