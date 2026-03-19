
// and (&&) - true se ambos os operandos forem verdadeiros
// console.log(true && true) 
// console.log(true && false) 
// console.log(false && true) 
// console.log(false && false) 

let mayor = true;
let suscrito = true;
let catalogoInfantil = !mayor;

console.log('Operador AND:', mayor && suscrito);

// or (||) - true se pelo menos um dos operandos for verdadeiro
console.log('Operador OR:', mayor || suscrito);

// not (!) - inverte o valor lógico do operando
console.log('Operador NOT:', !mayor);
