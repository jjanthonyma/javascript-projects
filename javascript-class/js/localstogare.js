'use strict'

//localstorage

//compatibility
if(typeof(Storage) !== 'undefined')
    {
        console.log("localstorage Available");
    }
    else{
        console.log("localstorage unavalilable");
    }

    //how to put datas in localStorage

localStorage.setItem("title","curse of symfony");


    //How recovery element

console.log(localStorage.getItem("title"));


    //save objet in localstorage

    var user = {
        name : "jose melgar",
        email : "jjanhtonyma@gmail.com",
        web : "josemelgar.com"
    };

//document.querySelector("#peliculas").innerHTML = (localStorage.getItem("user", JSON.stringify(user)));

var users = JSON.parse(localStorage.getItem("user"));
console.log(users.name);

document.querySelector("#datas").append("nombre: "+users.name +" Email: "+ users.email+" Website: "+users.web)

