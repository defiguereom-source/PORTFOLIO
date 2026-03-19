function suma(a ,b){
    
let sum = a + b;
console.log('la suma es: ', sum);


}
suma(4,6);

//funciones retornables

function dato_trabajador() {
    let salario = 2550;
    return salario;
}

let obrero = dato_trabajador();
console.log(obrero);

//funciones anonimas(flecha)
let resta = (n1,n2) => n1 - n2;
console.log(resta(5,2));

let nombre = () => "Juan";
console.log(nombre())

//funcion anidada
function operacion() {
    
    const PI = Math.PI;
    
    function area(radio) {
        
        var area = PI * radio * radio;

        console.log('el area del circulo es: ', area);
    }

    operacion.area = area;
}

let radio = Math.random;
operacion();
operacion.area(radio());