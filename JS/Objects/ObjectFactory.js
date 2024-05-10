
// Se trata de una función que crea objetos en base a los parámetros recibidos y lo devuelve

// Su beneficio es que no tiene riesgo de cometer errores de sintaxis y es bastante intuitivo

function createPerson(name,lastName,age){
  return{ 
    name,
    lastName,
    age,
    saludar(){
        return `Hi, mi name is ${this.name} ${this.lastName} and i've ${this.age} years old`
    
    },
};
}

const person1 = createPerson('Alejo', 'Passe', 20);
console.log(person1.saludar());