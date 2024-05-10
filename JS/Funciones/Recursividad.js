// Es cuando una función se invoca a si misma
//Declaración
function sayHiDeclaración(recipient , saludo='Bienvenido') {
    if (typeof recipient === 'string') {
        return `${recipient}, ${saludo} `;
    }
        else if (typeof recipient === 'object') {
            return sayHiDeclaración(`${recipient.name}, ${recipient.lastName}`, saludo);
        }

}
//Expresión
const sayHiExpresión = function(recipient, saludo='Bienvenido') {
    if (typeof recipient === 'string') {
        return `${recipient}, ${saludo} `;
    }
        else if (typeof recipient === 'object') {
            return sayHiExpresión(`${recipient.name}, ${recipient.lastName} `, saludo );
        }
    }

console.log(sayHiDeclaración('Juan'));
console.log (sayHiExpresión ({name: 'Juan', lastName: 'Perez'}));