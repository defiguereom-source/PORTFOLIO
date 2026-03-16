const user = {id: 1, name: 'Daniel', etc: 'mas cosas'}

user.name = 'Daniel'
user.guardar = function(){
    console.log('Guardando', user.name)
}
user.guardar();
console.log(user)

//Es para que el objecto nunca cambie
Object.freeze({});

//Es para que el objecto cambie sus propiedades sin agregar nada mas
Object.seal({});