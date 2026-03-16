//Falso
//Falsy: 0, "", null, undefined, NaN, false

let nombre ='';
let userName = nombre || 'Anonimo';

console.log(userName);

function fn1(){
    console.log('Hola');
    return true;
};

function fn2(){
    console.log('Adios');
    return true;
}

let x = fn1() && fn2();