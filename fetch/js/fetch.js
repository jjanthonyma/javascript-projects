'use strict'

// fetch(ajax) petition services / APIS REST
var user

var divUser = document.querySelector("#users");
var divJanet = document.querySelector("#janet");
var divInfo = document.querySelector("#info");
var user = [];
var info = [];
getUser()
    .then(data => data.json())
    .then(users =>{
     listUser(users.data)  
     
     return getJanet();
    })
    .then(data => data.json())
    .then(janet => {
        showJanet(janet.data);
        return getInfo();
    })
    .then(info=>{
        console.log(info);
        divInfo.innerHTML = info;
        //showInfo(info);
    }).catch(error => {
        console.log(error);
    });
function getUser(){
    return fetch(`https://reqres.in/api/users?page=1s`);
}
function getJanet(){
    return fetch(`https://reqres.in/api/users/2`);

}
function getInfo(){
    var teacher = {
        name: 'jose',
        lastname:'melgar',
        url: 'josemelgar.com'
    };


    return new Promise((resolve, reject)=>{
       var teacherString= JSON.stringify(teacher);
       if(typeof teacherString != 'string')
        {
            return reject('error');
        }

        return resolve(teacherString);
    });


}
function listUser(users){
    users.map((user, i)=>{
        let name = document.createElement('h2');

        name.innerHTML = i+" " + user.first_name+" "+ user.last_name;

        divUser.appendChild(name);
        document.querySelector(".loading").style.display = 'none';
    }); 
}

function showJanet(user){
    let name = document.createElement('h2');
    let avatar = document.createElement('img');
    name.innerHTML =user.first_name+" "+ user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';
    divJanet.appendChild(name);
    divJanet.appendChild(avatar)
    document.querySelector("#loading").style.display = 'none';
}

function showInfo(user){
        let name = document.createElement('h2');
        let url = document.createElement('h2');
        name.innerHTML =user.name+" "+ user.lastname;
        url.innerHTML = user.url;
        divInfo.appendChild(name);
        divInfo.appendChild(url);
        document.querySelector("#loading2").style.display = 'none';
}



