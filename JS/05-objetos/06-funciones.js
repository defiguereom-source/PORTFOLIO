//Funcion construtora
function Usuario(nombre){
    this.nombre = nombre;

};

// Sus propidades del la funcion contructora 

console.log(Usuario.name);
console.log(Usuario.length);

// Se le puede asignar la funcion construtora a una variable

console.log('----------------------------------');
const U = Usuario;

let user = new U('Daniel');

console.log(user);
console.log('----------------------------------');

// Pasar las funciones como argumentos 
function of(Fn,arg){
    return new Fn(arg);
};

let user1 = of(Usuario, 'Daniel2');
console.log(user1);

console.log('----------------------------------');
//retonar funciones
function returned(){
    return function(){
        console.log('Hola munchachos')
    }
}

let saludo = returned();

saludo();


// Las funciones son objetos de primera clase y hay estan lo basico que se puede hacer 