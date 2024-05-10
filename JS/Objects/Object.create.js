//Object.create es un método que permite crear un objeto, asignandolé el prototype

const person= {
    name:'Alejo',
    lastName:'Passe',
    age: 20,
    fullName(){
        return `Hi, mi name is ${this.name}, ${this.lastName}`
    }
}

const person2= Object.create(person,{
    name : { value: 'Chiara'},
    lastName: { value: `D'agosto`},
})

//También podemos crear un objeto desde 0

const person3= Object.create ({},{
    name: { value: 'Andrés'},
    lastName: { value: `D'agosto`},
    age: { value: 40},
    saludo: { value: function(){
        return `Hi, mi name is ${this.name}, ${this.lastName} and i've ${this.age} years old`
    }}
})



console.log(`${person.fullName()} and i've ${person.age} years old`);
console.log(`${person2.fullName()} and i've ${person2.age} years old`);

console.log(Object.prototype===person.__proto__);//True
console.log(person.__proto__===person2.__proto__);//False
console.log(person2.__proto__===person);//True
console.log(person2.__proto__.__proto__===Object.prototype);//True

console.log(`The prototype of person2 is:${JSON.stringify(person2)} 
The prototype of person is: ${JSON.stringify(person)}
The prototype of the prototype of person is: ${person.__proto__.__proto__}`);

console.log( `${person3.saludo()}`);
console.log(`The prototype of person3 is ${JSON.stringify(person3.__proto__)}`);
console.log(Object.prototype===person3.__proto__.__proto__);//True

