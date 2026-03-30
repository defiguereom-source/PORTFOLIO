//Escribir en consola
console.log('hola no mundo'); 

// variables

/* 
No se puede cambiar de tipo de dato ejemplo (En js que si se podia):

var a = "string" 
a = 5 Error

*/
var palabra: string =  "Esto es una cadena de texto";
console.log(palabra);

var numero: number = 2;
console.log(numero);

var myBool: boolean = false;
console.log(myBool);

//Constantes
const myconst: string = 'Esto es una constante y no se puede cambiar'


//Controles de flujo
if(numero == 2){
    console.log('El numero es 2')
}else{
    console.log('No es 2')
};


//Funciones
function myFunction(): string {
    return 'hola mundo'
}
console.log(myFunction());

function sum(firstNumber: number, secondNumber : number): number{
    return firstNumber + secondNumber;
}
console.log(sum(1,2));

//List type
var myList: Array<string>= ["Hola","Adios","Come on"];
console.log(myList);

//Set type
var mySet: Set<string> = new Set(["Hola","Adios","Come on"]); // El set no admite repetidos 
console.log(mySet);

//Map type
var myMap: Map<string,number> = new Map([["Hola",36],["Come on",1]]);
// myMap.set("Hola",36);
console.log(myMap); 

//Bucles
for(var value of myList){
    console.log(value);
}

var myCounter = 0
while(myCounter < myList.length){
    console.log(myList[myCounter]);
    myCounter++;
}

//Clases

class myClass {
    name: string 
    age: number
    
    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
}

let my_Class: myClass = new myClass("Daniel", 18);
console.log(my_Class);
console.log(my_Class.name);

//Enum

enum myEnum{
    DART = "dart",
    PYTHON = "python",
    JAVA = "java"
};

const my_Enum: myEnum = myEnum.PYTHON
console.log(my_Enum);