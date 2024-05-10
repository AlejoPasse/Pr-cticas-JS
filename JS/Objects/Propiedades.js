//Tipo de datos que permite almacenar entidades complejas

//También permite almacenar comportamientos

//Es un conjunto clave-valor donde la primer parte es un string y la segunda puede ser varias cosas

//Esta segunda parte puede ser un string, un numero, un objeto, boolean, array, etc.

// Existen 2 formas de acceder a los objetos, con los person.name y person['name']
const person = {
    firstName: 'Alejo',
    lastName: 'Passe',
    age: 20,
    hobbies: ['Voleyball', 'Football', 'Basketball'],
    address: {
        street: 'Francia 1658',
        city: {
	        codPost: 2000,
	        name: 'Rosario'
        },
        state: {
	        code: 100, 
	        name: 'Santa Fe'
	        },
        country: 'Argentina'
    }
};

console.log(`The name is ${person.firstName}, te lastName is ${person.lastName} 
and the country he live is in ${person.address.country}`);

console.log();

//Otra forma de hacerlo (Más complicada)

console.log(`The name is ${person['firstName']}, te lastName is ${person['lastName']} 
and the country he live is in ${person['address']['country']}`);

console.log();

// Si asignamos un valor a una propiedad que no existe, esta se va a crear
// También podemos reasignar valores que no tienen por qué ser del mismo tipo de datos

person.age = '21';
person.job = 'Programador';
console.log(person);

