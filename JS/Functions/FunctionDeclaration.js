//La función consta de el nombre de la función y los parámetros, que están separados por coma y entre paréntesis.
function sayHi(name , lastname='Passe'){
    return (`Hi, mi name is ${name} ${lastname}`);
}
//Hay que respetar el orden de los parámetros, estos son opcionales
console.log(sayHi('Cris','Evans'));
console.log(sayHi('Alejo'));
//Si no se le indica un valor, asume por defecto el valor undefined
console.log(sayHi());
//Se le pueden agregar parámetros aunque van a ser ignorados
console.log(sayHi('Alejo','Passe','!'));