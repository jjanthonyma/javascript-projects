'use strict'

var edad = 70;
var imprime="";
switch(edad){
    case 18:
        imprime = "tiene la mayoria de edad";
        break;
    case 25:
        imprime = "ya eres un adulto";
        break;
    case 70:
        imprime="eres un anciano";
        break;
        default:
            imprime = "tu edad es neutra";
            break;

}
console.log(imprime);