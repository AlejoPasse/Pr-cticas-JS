//Los arrays permiten almacenar una colección de items.
//A diferencia de la mayoría de los lenguajes los arrays no son una estructura primitiva si no un objeto Array.
//Los array pueden contener objetos de distintos tipos y son de tamaño dinámico.
let Array = ['array', 1, '1', true];
//Al poner $ antes del {Array}, convierte a este en string
console.log( `The components of array is ${Array}` );
//Los array comienzan en 0.
console.log( `The first component of array is ${Array[0]}`);
console.log ( `The last component of array is ${Array.at(-1)}`);
console.log ( `The number of components in array is ${Array.length}`);
//Los array pueden contener espacios vacíos
Array[5]='array-5';
console.log ( `The new array is ${Array}` );
