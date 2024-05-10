
// En este caso vamos a hacer una función para cambiar los valores de los lets primitivos y no primitivos
// Los valores de los objetos primitivos no se pueden cambiar a través de la función
// En cambio los de los no primitivos si

const person1 = {
    name: 'Alejo',
    lastName: 'Passe',
    age: 20
};

let firstName='Chiara';
let lastName=`D'agosto`;
let age=19;

cambiarDatos(person1,firstName,lastName,age);

function cambiarDatos(notPrimitiveValor,primitiveFirstName,primitiveLastName,primitiveAge){
    notPrimitiveValor.name='Alejoo',
    notPrimitiveValor.lastName='Passee',
    notPrimitiveValor.age=21,

    primitiveFirstName='Chiaraa',
    primitiveLastName=`D'agostoo`,
    primitiveAge= 18
};

// Como vamos a ver a continuación, los datos no primitivos los cambió pero los primitivos no.

console.log (`Datos cambiados Alejo: ${person1.lastName},${person1.name}, ${person1.age}`);
console.log();
console.log (`Datos cambiados Chiara: ${lastName},${firstName}, ${age}`);
