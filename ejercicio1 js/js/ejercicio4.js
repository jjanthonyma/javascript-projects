'use strict'
//hacer un programa que muestre numeros impares que esten entre dos numeros

var num1 = parseInt(prompt("ingrese el numero 1",0));
var num2 = parseInt(prompt("ingrese el numero 2",0));
document.write("los numeros impares que hay de "+num1+" a "+num2+" son");
for(var i = num1; i<=num2;i++){
    var contador = (2*i)+1;
    if(contador<=num2){
        document.write("<br> numero ");
        document.write(contador+"<br>");
    }
    else{
        break;1
    }

}
