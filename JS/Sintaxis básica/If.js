const a= 10;
const b= '10';
let c;
if (a > 10) {
    console.log ('The value of a is bigger than 10')
    } else {
        console.log ('The value of a is smaller than 10')
    }
// == es una igualdad, que no importa los tipos de dato
if (a == b){
    console.log ('The value of a is equal to b')
    } else {
        console.log ('The value of a is not equal to b')
    }
// === es una igualdad estricta, que importa los tipos de dato
if (a === b){
    console.log ('The value of a is equal to b')
    } else {
        console.log ('The value of a is not equal to b')
    }
// En JS existen truthy y falsy, cada uno tiene sus condiciones respectivas
if (a){
    console.log ('a is truthy')
    } else {
        console.log ('a is falsy')
    }
if (c){
    console.log ('c is truthy')
    } else {
        console.log ('c is falsy')
    }
// Tambien tenemos != (desigualdad) y !== (desigualdad estricta)
// || or , && and y ! not  
