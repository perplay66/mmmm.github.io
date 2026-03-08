document.addEventListener("DOMContentLoaded", () => {

const numero = document.getElementById("numeroCafe")
const botao = document.getElementById("maisCafe")

const VALOR_INICIAL = 447
const STORAGE_KEY = "cafesTomados"

let cafes = parseInt(localStorage.getItem(STORAGE_KEY))

if(isNaN(cafes)){
cafes = VALOR_INICIAL
localStorage.setItem(STORAGE_KEY, cafes)
}

numero.textContent = cafes

botao.addEventListener("click", () => {

cafes++

numero.textContent = cafes

localStorage.setItem(STORAGE_KEY, cafes)

numero.animate([
{transform:"scale(1.3)"},
{transform:"scale(1)"}
],{duration:250})

if(cafes === 500){
alert("☕ 500 cafés de amizade conquistados!")
}

})


}) 
window.addEventListener("load", () => {
    const musica = document.getElementById("musica");
    musica.volume = 0.5;
    
    document.addEventListener("click", () => {
        musica.play();
    }, { once: true });
});
