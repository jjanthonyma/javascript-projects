'use strict'

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();

var textHora = `
    el ano es: ${year}
    el mes es: ${month}
    el dia es: ${day}
`;
console.log(textHora);