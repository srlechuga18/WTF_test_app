var myApp = new Framework7();
var $$ = Dom7;
var mainView = myApp.views.create('.view-main');
//var mainView = myApp.addView('.view_main',{ dynamicNavBar: true});
const inputValue = document.querySelector("#username");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".list_of_followers");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "Iv1.6a5cf53f56888199";
const client_secret= "84fe70ceeac6f54e366cdcefd287f3ae62a82b3d";

const fetchUsers = async(user) => {
    const api_call = await fetch("https://api.github.com/users/"+ user +"/followers?client_id=" + client_id + "&client_secret=" + client_secret);
    const data = await api_call.json();
    return { data }
}

const showData = () => {
    if(nameContainer.hasChildNodes){
        while(nameContainer.firstChild){
            nameContainer.removeChild(nameContainer.firstChild);
        }
    }
    fetchUsers(inputValue.value).then((res) => {
        nameContainer.re
        res.data.forEach(element => {
            var li=document.createElement('li');
            li.innerHTML=element.login;
            nameContainer.appendChild(li);
        });
    })
}

searchButton.addEventListener("click", () => {
    showData();    
});