let obj = {};

/*
Estos son los atajos que devuelven 

new Array(); []
new String(); "" ''
new Number(); 12
new Boolean(); true or false

*/

function Usuario(){
    this.name = 'Chanchito malo'
}

let usuario = new Usuario();
console.log(usuario.constructor)
 