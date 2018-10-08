var img = document.querySelector("img");
var fullNameDisp = document.querySelector("#name");
var usernameDisp = document.querySelector("#username");
var emailDisp = document.querySelector("#email");
var cityDisp = document.querySelector("#city");
var btn = document.querySelector("button");


var url = "https://randomuser.me/api/";

findNewUser();


btn.addEventListener("click", function () {
    findNewUser();
})


function findNewUser() {

    fetch(url)
        .then(handleErrors)
        .then(function (request) {
            return request.json()
        })
        .then(function (request) {
            var data = request.results[0];

            fullNameDisp.textContent = data.name.first + " " + data.name.last;
            usernameDisp.textContent = data.login.username;
            emailDisp.textContent = data.email;
            cityDisp.textContent = data.location.city;
            img.style.backgroundImage = "url(" + data.picture.large +")";

        }).catch(function (error) {
            console.log(error);
        });
}

function handleErrors(request) {

    if (!request.ok) {
        throw Error(request.status)
    }
    return request;
}