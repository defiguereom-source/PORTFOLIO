/*
los objetos son variables tipo referencia, es decir, almacenan una referencia a un espacio de memoria donde se encuentra el valor del objeto.
los objetos pueden contener propiedades y métodos, las propiedades son variables que pertenecen al objeto y los métodos son funciones que pertenecen al objeto.
*/

let persona = {
    nombre: "Daniel",
    edad: 30,
    estatura: 1.70
};
console.log(persona);

//acceder a una propiedad del objeto 
console.log(persona.nombre);
console.log(persona["edad"]);

persona.nombre = "Juan";
persona["edad"] = 25;

console.log(persona.nombre);
console.log(persona["edad"]);

//eliminar
delete persona.estatura;
console.log(persona);