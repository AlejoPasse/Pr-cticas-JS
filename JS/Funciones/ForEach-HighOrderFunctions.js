//El forEach va a pasarle a la función, el valor de el elemento del array, su posición y el array completo
//Esto es cada vez que recorra una posición del array
//En este caso solo utilizaremos el valor y su posición

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const highOrderFunctions = (value, position) =>
    console.log ( 
        `The value of the ${position + 1}° position in the array is ${value}`
    );

words.forEach(highOrderFunctions);

//Otra forma de hacerlo, más sencilla y corta

console.log();
words.forEach((value, position) => 
    console.log(`The value of the ${position + 1}° position in the array is ${value}`));