// Se trata de objetos que tienen un parámetro init para construir más objetos

const Person = {
    init(name,lastName,age){
        this.name=name;
        this.lastName=lastName;
        this.age=age;
        this.saludar=function(){
            return `Hi, mi name is ${this.name}, ${this.lastName}, and i've ${this.age} years old`
        };
    },
}

const Job = {
    __proto__:Person,
    init(name,lastName,age,job){
        Person.init.call(this, name, lastName, age);
        this.job=job;
        this.Mostrarjob= function(){
            return `I working in the ${this.job}`
        };
    },
}

const person1 = Object.create(Person);
person1.init('Alejo', 'Passe', 20);
console.log(person1.saludar());

const person2 = Object.create(Job);
person2.init('Chiara', `D'agosto`, 19,'AFIP');
console.log(`${person2.saludar()} and ${person2.Mostrarjob()}`);

console.log();
console.log('Objects prototypes');
console.log();
console.log('The prototype of person1 is Person:', Person===person1.__proto__);
console.log('The prototype of person2 is Job:', Job===person2.__proto__);
console.log('The prototype of the prototype of person1 is Object.prototype:', Object.prototype===person1.__proto__.__proto__);
console.log('The prototype of the prototype of person2 is Person:', Person===person2.__proto__.__proto__);
console.log('The prototype of Person is Object.prototype:', Person.__proto__===Object.prototype);
console.log('The prototype of Job is Person:', Person===Job.__proto__);



