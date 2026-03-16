//Salto de linea
let color = 'rojo\nverde';
console.log(color);

console.log("--------------------------");
//Contar caracteres  
console.log(color.length);

console.log("--------------------------");
//escribir string con mayusculas
console.log(color.toUpperCase());

console.log("--------------------------");
//escribir string con minusculas
console.log(color.toLowerCase());

console.log("--------------------------");
//esto es para buscar en que posicion esta la letra (cuenta el 0)
console.log(color.indexOf('r'));

console.log("--------------------------");
//tener un limite de imprecion
console.log(color.slice(2,5));

console.log("--------------------------");
//para remplazar algun string
console.log(color.replace('rojo','php'))

//esto lo separa por comillas
console.log(color.split(''));

//convertir
var numero_1 = '2'
var numero_2 = '3'

console.log(Number(numero_1)+ Number(numero_2));
