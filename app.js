console.log("Welcome to TechStore");

const menu=document.querySelector(".menu");

if(menu){

menu.addEventListener("click",()=>{

document.querySelector("nav ul").classList.toggle("show");

});

}