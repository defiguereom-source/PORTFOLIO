
function precioCompleto(precio,impuesto){
    return precio + precio * impuesto;
}

let resultado = precioCompleto(2,0.18);
console.log(resultado)