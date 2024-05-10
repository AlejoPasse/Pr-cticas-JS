//Utilizamos funciones constructoras para poder crear múltiples objetos

//El nombre de la función comienza con mayúscula para indicar que es una función constructora
function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.saludo = function (){
     return `Hi, mi name is ${this.name}, ${this.lastName} and i've ${this.age} years old`
}

const person1 = new Person('Alejo', 'Passe', 20);
const person2 = new Person('Chiara', `D'agosto`, 19);

console.log(person1.saludo());
console.log(person2.saludo());

console.log();
console.log(`person1 prototype:`);
console.log();
console.log(`The protoype of person1 is Person:`, Person===person1.__proto__);
console.log(`The protoype of Person is Person.prototype:`, Person.prototype===person1.__proto__);

console.log();
console.log(`Person prototype:`);
console.log();
console.log(`The protoype of Person is Person.prototype:`, Person.prototype===Person.__proto__);
console.log(`The protoype of Person is Object.prototype:`, Object.prototype===Person.__proto__);
console.log(`The protoype of Person is Function.prototype:`, Function.prototype===Person.__proto__);