

let h1 = document.querySelector('h1')

h1.style.color = 'Blue'

let h2 = document.querySelector('h2')
h2.textContent = 'Bienvenidos a mi pagina web'

let p = document.querySelector('p')
p.textContent = 'lala'

p.innerHTML = 'lalalalalal'



function init() {
 for (let i = 0 ; i < 3; i++){
    let p = document.createElement("p");
    let pTexto = document.createTextNode("Ejemplo" + (i + 1));
    p.appendChild(pTexto);
 
    document.body.appendChild(p);
 }
}
 
window.onload = init


