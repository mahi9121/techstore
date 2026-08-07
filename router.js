const page=window.location.pathname;

console.log(page);

const links=document.querySelectorAll("nav a");

links.forEach(link=>{

if(link.href===window.location.href){

link.style.color="yellow";

}

});