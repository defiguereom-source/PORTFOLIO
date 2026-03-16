function createUser(name,email){
return {

    id: 1,
    
    email,
    
    name,
    
    activo:true,

    recuperarClave: function() {
        console.log('recuerando clavle...')
    }
}
}
let user1 = createUser('Daniel Enrique Figuereo Mendez','daniel182730@gmail,com');
let user2 = createUser('Daniel Enrique Figuereo Mendez','daniel182730@gmail,com');

console.log(user1,user2);