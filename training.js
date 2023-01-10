'use strict';

function showMessage() {
    console.log('Я учу JavaScript!');
}

showMessage();

let cookieStar = document.getElementById("cookieStar");
let cookieSnowman = document.getElementById("cookieSnowman")

function showNextPicture(){
    cookieStar.style.display = "flex";
    cookieSnowman.style.display = "none";
}

function showPreviousPicture(){
    cookieStar.style.display = "none";
    cookieSnowman.style.display = "flex";
}