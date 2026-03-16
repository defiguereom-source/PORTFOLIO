let array = [1,2,3,4,5,-1,-2,-3,-4,-5,-6];

function getNumeros(arr){
let cantidadP = 0;
let cantidadN = 0;

    for(numeros of arr){
        
        if (numeros > 0){
            cantidadP ++;
        }else{
            cantidadN++;
        }
    }

    console.log('Esta es la cantidad de positivos: ', cantidadP);
    console.log('Este es la cantidad de negativos: ', cantidadN);


}

let numero =getNumeros(array);
console.log(numero)