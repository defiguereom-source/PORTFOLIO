function punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){
        console.log('Dibujando....')
    }
}

// Esta vaina no se utiliza 
// const point = new Function('x','y',`    
//     this.x = x;
//     this.y = y;
//     this.dibujar = function(){
//         console.log('Dibujando....')
//     }
// `);

// const p = new point(1,2)
// console.log(p)


//Esto tienes que usar
let Punto = {z:7}
punto.call(Punto, 1, 2);

console.log(Punto)

