// Seleccionar elementos
const elemento1 = document.getElementById("id")
console.log(elemento1)

const elemento2 = document.querySelector(".clase")
console.log(elemento2)

const elementos3 = document.querySelectorAll("p")
console.log(elementos3)

const elementos4 = document.getElementsByClassName("clase")
console.log(elementos4)

const elementos5 = document.getElementsByTagName("div")
console.log(elementos5)


// Crear elementos
const elemento6 = document.createElement("div")
console.log(elemento6)


// Modificar contenido
const elemento7 = document.querySelector("#id")
elemento.textContent = "Nuevo texto"
console.log(elemento7)

const elemento8 = document.querySelector("#id")
elemento.innerHTML = "<b>Texto en HTML</b>"
console.log(elemento8)


// Modificar atributos
const elemento9 = document.querySelector("img")
elemento.setAttribute("src", "imagen.jpg")
console.log(elemento9)

const elemento10 = document.querySelector("img")
elemento.getAttribute("src")
console.log(elemento10)


// Agregar y quitar clases
const elemento11 = document.querySelector("#id")
elemento.classList.add("activo")
console.log(elemento11)

const elemento12 = document.querySelector("#id")
elemento.classList.remove("activo")
console.log(elemento12)

const elemento13 = document.querySelector("#id")
elemento.classList.toggle("activo")
console.log(elemento13)


// Insertar elementos en el DOM
const elemento14 = document.querySelector("#contenedor")
const nuevo14 = document.createElement("p")
nuevo14.textContent = "Hola"
elemento.appendChild(nuevo14)
console.log(elemento14)

const elemento15 = document.querySelector("#contenedor")
const nuevo15 = document.createElement("p")
elemento15.append(nuevo15)
console.log(elemento15)

const elemento16 = document.querySelector("#contenedor")
const nuevo16 = document.createElement("p")
elemento16.prepend(nuevo16)
console.log(elemento16)


// Eliminar elementos
const elemento17 = document.querySelector("#id")
elemento17.remove()
console.log(elemento17)


// Eventos
const elemento18 = document.querySelector("#boton")
elemento18.addEventListener("click", () => {
    console.log("Click")
})
console.log(elemento18)


// Navegación en el DOM
const elemento19 = document.querySelector("#id")
console.log(elemento19.parentElement)

const elemento20 = document.querySelector("#id")
console.log(elemento20.children)

const elemento21 = document.querySelector("#id")
console.log(elemento21.firstElementChild)

const elemento22 = document.querySelector("#id")
console.log(elemento22.lastElementChild)

const elemento23 = document.querySelector("#id")
console.log(elemento23.nextElementSibling)

const elemento24 = document.querySelector("#id")
console.log(elemento24.previousElementSibling)