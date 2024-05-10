

function Person (name, lastName, age){
    this.name=name;
    this.lastName= lastName;
    this.age=age;
}

Person.prototype.saludo = function() {
    return `Hi, mi name is ${this.name}, ${this.lastName} and i've ${this.age} years old`;
}

// Creamos otra función que herede de Person, también va con mayúscula

function Job (name, lastName, age, job){
    Person.call (this, name, lastName, age);
    this.job=job;
}

// Para poder hacer que esto funcione necesitamos 2 cosas
// 1- Que el prototype de Job sea el prototype de Person
Job.prototype= Object.create (Person.prototype);
// 2- Como al hacer esto perdemos el constructor, debemos reasignarlo
Job.prototype.constructor= Job;

Job.prototype.decirTrabajo = function(){
    return `I'm working as a ${this.job}`
}

const Alejo= new Person('Alejo', 'Passe', 21);
const Chiara= new Job ('Chiara', `D'agosto`, 19, 'Aduanera');

console.log(Alejo.saludo());
console.log(`${Chiara.saludo()} and ${Chiara.decirTrabajo()}`);
console.log();

// Objects prototype
