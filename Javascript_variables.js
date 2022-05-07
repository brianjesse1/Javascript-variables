/*
    LA VARIABLE Let:
    Permite declarar variables limitando su alcance (scope) 
    al bloque, declaración, o expresión donde se está usando.

    Ejemplo:
*/
if(true){
    let a = 2 //La variable fue declarada dentro del bloque y se limita su alcance a este
    console.log(a);
}
console.log(a);

/*
    LA VARIABLE Var:
    Declara una variable, opcionalmente inicializándola con un valor, 
    tambien se pueden crear variables globales.

    Ejemplo:
*/
var b;
b=3;
console.log(b);

/*
    LA VARIABLE Const:
    El valor de una constante no puede cambiarse a través de la reasignación.
    Las constantes no se pueden redeclarar.
    
    Ejemplo:
*/
const c=4;
console.log(c);
