var img = document.querySelector("#img");
var name = document.querySelector("#name");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var btn = document.querySelector("button");


var url = "https://randomuser.me/api/";

fetch(url)
    .then(handleErrors)
    .then(function (request) {
        return request.json()
    })
    .then(function (request) {
        console.log(request);
    })


function handleErrors(request) {

    if (!request.ok) {
        throw Error(request.status)
    }
    return request;
}