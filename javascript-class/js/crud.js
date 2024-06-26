'use strict'

var form = document.querySelector("#formMovies");

form.addEventListener('submit', function(){
var title = document.querySelector("#addMovie").value;

if(title.length <=0)
    {
        alert("Please put the movie name")
    }
    else{
        localStorage.setItem(title,title);

    }

});

var ul = document.querySelector("#listMovie");
    for (var i in localStorage) {
       console.log(localStorage[i]);
       if(typeof localStorage[i] == "string"){
       var li = document.createElement("li");
       li.append(localStorage[i]);
       ul.append(li);
       }
    }


    var formDelete = document.querySelector("#formDeleteMovies");

    formDelete.addEventListener('submit', function(){
var title = document.querySelector("#deleteMovie").value;

if(title.length <=0)
    {
        alert("Please put the movie name")
    }
    else{
        localStorage.removeItem(title,title);

    }

});