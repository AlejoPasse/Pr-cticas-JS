const person = {
    name: 'Alejo',
    lastName:'Passe',
    age: 20,
    fullName(){
        return `Hi, mi name is ${this.name} ${this.lastName}`
    }
}

const person2 = {
    lastName:`D'agosto`,
    job:'Development',
    presentation(){
        return `Hi, mi name is ${this.name} ${this.lastName} and I am a ${this.job}`
    },
    __proto__:person
}

console.log(`${person.fullName()} and i've ${person.age} years old`);
console.log(`${person2.presentation()}`);

console.log(Object.prototype==person.__proto__); //True
console.log(Object.prototype==person2.__proto__); //False
console.log(Object.prototype==person2.__proto__.__proto__);//True

console.log(`person2 prototype is person? ${person===person2.__proto__}`); //True

// JSON.stringify convierte un objeto en un string
// Sirve para mostrar el prototipo de un objeto

console.log(`person prototype is ${JSON.stringify(person.__proto__)}`); 
console.log(`person2 prototype is ${JSON.stringify(person2.__proto__)}`);
console.log(`The prototype of the prototype of the prototype is ${person2.__proto__.__proto__.__proto__}`);//null
