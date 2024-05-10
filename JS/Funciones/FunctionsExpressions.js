//A diferencia de la declaración de una función, la expresión es una función que puede ser asignada a una variable
//Ya que devuelve un valor sobre la misma función
const saludar = function sayHi (name , hi= 'Bienvenido'){
    return (`${hi}, ${name}`)
}
console.log(saludar('Alejo'));
//Ya que la función no cumple ningún trabajo fuera de la constante podemos no ponerle nombre
const saludarAnónimo = function(name , hi= 'Bienvenido'){
    return (`${hi}, ${name}`)
}
console.log(saludarAnónimo('Alejo'));
//La función va a ser almacenada en la constante, por lo tanto no podemos invocarla por sí sola
//console.log(sayHi('','Alejo')); 
// Por lo tanto, lo anterior va a tirar un error de sintaxis
