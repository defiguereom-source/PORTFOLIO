
let array = [1,2,3,4,5,6,7,8,9,10];

function getMayorMenor(arr){
let mayor = arr[0];
let menor = arr[0];

    for(numero of arr){
        
        menor = menor < numero ? menor : numero;

        mayor = mayor > numero ? mayor : numero;
    }
    return [menor,mayor]
}

let numeros = getMayorMenor(array);
console.log(numeros);


