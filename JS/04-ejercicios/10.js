let longitud = 7;

function crearArray(n){
    let i = 0;
    let array = [];
    
    if(n <= 0){
        
        return [];

    }else{
        while(i < n){         
            
            array[i] = i + 1;

            i++;
        }
    
    }

    return array

}

let resultado = crearArray(longitud);
console.log(resultado);