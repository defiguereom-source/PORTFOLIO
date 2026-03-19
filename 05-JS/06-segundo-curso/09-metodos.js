//foreach buscar elemento por elemento para que te devuelva un booleano true si lo encontro y false si no
let persona = ['Roberto',12,'Dominicano','feo'];
let numeros = [1,2,3,4,5,6,7,8,9,10];

persona.forEach((value) => {
    console.log(value == 12);
});

console.log("-----------------------------------");

persona.forEach((i) => {
    console.log(i);
});

console.log("-----------------------------------");

//for para ver todos los elementos de los array
for(let i = 0; i < persona.length; i++){
    console.log(persona[i])
};

console.log("-----------------------------------");

//some te devolvera un booleano y te dira si hay algo 
console.log(persona.some((i) =>{
    return(i % 2 == 0);
}));

console.log("-----------------------------------");
//every te devolvera un booleano y te dira si hay todos 
console.log(persona.every((i) => {
    return (i == 12);
}));

//MAP
let duplicar = numeros.map((i) =>{
    return i * 2;
});

console.log("-----------------------------------");
console.log(duplicar);

//filter
let numeros_grandes = numeros.filter((i) =>{
    return (i > 2);
});
console.log(numeros_grandes);

console.log("-----------------------------------");
//reduce
let respuesta = numeros.reduce((sumar,dato_actual) => 
    sumar + dato_actual, 0);

console.log(respuesta);