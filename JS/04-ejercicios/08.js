
let array =[
{
    id: 1,
    nombre: 'Daniel'
},
{
    id: 2,
    nombre: 'Jokabeth'
},
{
    id: 3,
    nombre: 'Juan'
}
];

function toPairs(arr){
    let pairs = []
    
    for(idx in arr){

        let elemento = arr[idx];
        
        pairs[idx] = [elemento.id,elemento];

    }

    return pairs;


}

let resultado = toPairs(array);
console.log(resultado);
