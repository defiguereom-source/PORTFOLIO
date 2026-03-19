//construtor
//{id: 1, recuperarClave: function(){}}

function Usuario(){
    this.id = 1;

    this.recuperarClave = function(){ // Esto es un metodo
        
        console.log('recuperando clave...');
    
    }
}

let usuario = new Usuario();

console.log(usuario)
