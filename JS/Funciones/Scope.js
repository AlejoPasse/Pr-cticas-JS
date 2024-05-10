//Si definimos una variable dentro de una función, la variable solo existe dentro de la función
//Esta variable, puede llamarse igual que otra que esté fuera de la función
//Fuera de ella, la variable es undefined o otra definida
let nombre = 'Juan';
let nombre2 = 'Pedro';
nombres();
//La función puede ser declarada en cualquier línea de código, JS va a asumir que fue declarada al principio 
//Lo anterior es llamade (HOISTING)
function nombres() {
    let nombre = 'Alejo';
    console.log(nombre, nombre2);
}
console.log(nombre, nombre2);
