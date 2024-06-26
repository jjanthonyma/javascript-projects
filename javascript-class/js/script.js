'use strict'


//JSON javascript Object Notation

var pelicula = {
    titulo: 'batman vs superman',
    year: 2017,
    country: 'usa'
};

var peliculas = [
    {titulo: "la verdad duele", year: 2015, country: "francia"},
    pelicula
]
var box = document.querySelector("#peliculas");
for (var index  in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[index].titulo +" - "+ peliculas[index].year  +" - "+ peliculas[index].country);
    box.append(p);
}
console.log(peliculas);