import {LoadHomePage} from './loadHomePage.js';
import {loadMenuPage} from "./menuPage.js";
import {loadContactPage} from "./contactPage.js";

window.addEventListener('DOMContentLoaded' , () =>{
    LoadHomePage();
});

document.getElementById("menu-btn").addEventListener('click', () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    loadMenuPage();
});

document.getElementById("contact-btn").addEventListener("click", ()=>{
    let content = document.getElementById("content");
    content.innerHTML = "";
    loadContactPage();
})

document.getElementById("home-btn").addEventListener("click", ()=>{
    let content = document.getElementById("content");
    content.innerHTML = "";
    LoadHomePage();
})