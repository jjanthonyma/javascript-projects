'use strict'
//insert 2 number and what its the big or same
var numero1 = parseInt(prompt("ingrese el numero 1", 1));
var numero2 = parseInt(prompt("ingrese el numero 2",2));
while(numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
     numero1 = parseInt(prompt("ingrese el numero 1", 1));
     numero2 = parseInt(prompt("ingrese el numero 2",2));     
}
if(numero1 < numero2){
    console.log("el numero mayot es "+ numero2);
}
else if(numero1>numero2){
    console.log("el numero mayor es " + numero1);
}
else if(numero1 = numero2){
    console.log("los numeros son iguales");
}else{
    console.log("ingrese datos correctos");
}


