// //document
let elemento = document;
elemento = document.head;
elemento = document.title;
elemento = document.body;
console.log(elemento);

// //window
let ventana = window;
console.log(ventana)

// //document.query

let query = document.querySelector('h2')
console.log(query) 

// //document.links
let links = document.links;
console.log(links);

// trabajando con id

const elemento_id = document.getElementById('subtitulo');
console.log(elemento_id);

//trabajando con class
const elemento_class = document.getElementsByClassName("list");
console.log(elemento_class);

const padre = document.querySelector('ul');
console.log(padre.childElementCount);
console.log(padre.children[1]);
console.log(padre.firstElementChild);
console.log(padre.lastElementChild);