//funcion para calcular area
function area() {
    const PI = Math.PI;
    
    var radio = document.getElementById("radio").value;
    
    var resultado = PI * radio * radio; 

    document.getElementById("resultado").value = resultado;
}

//eval
var a = 10;

var b = 20;

var x = eval("a + b");
var y = eval("3 + 4");
var z = eval("a + 8");

var respuesta = x + y + z;

console.log(respuesta);

//pasefloat
var A = parseFloat("10");
var B = parseFloat("20curso");
var C = parseInt("130curso")
console.log(C)

//date.parse
var dato = "1 january,1970 6:00 AM";

var resultado = Date.parse(dato);

console.log(resultado);