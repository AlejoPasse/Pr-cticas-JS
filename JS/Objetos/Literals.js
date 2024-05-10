
//En JS no es necesario definir clases
//Es decir que los objetos no tienen clases en JS.

//Un objeto hereda sus métodos y propiedades de un prototype que puede ser cualquier otro objeto de JS.

//Un prototype puede tener otro protoype del que hereda, esto se llama "Prototype chain".

//__proto__ se refiere al prototype del objeto que se invoca. Ej someObject.__proto__

//Prototype es el prototype que se le asigna a todos los objetos. EJ Object.prototype

const sam = {
    firstName:'Sam',
    lastName:'Smith',
    getfullname(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(`${sam.firstName} say: Hi mi name is ${sam.getfullname()}`);


//Si no asignamos un prototype a el objeto, este va a tomar por 
//valor predeterminado el prototype de Object.
console.log(Object.prototype==sam.__proto__);


//Este ejemplo muestra el uso de prototype chain.
//Va a dar null ya que el prototype de Object es null.
console.log(`The prototype of the prototype is : ${sam.__proto__.__proto__}`);
