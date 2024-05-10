
// En JS los datos primitivos en la variable se les asigna un valor
// A los datos no primitivos, se les asigna una posición de memoria

// EJ:

// A puedeMostrar e índice se les va a asignar un valor
const puedeMostrar= true;
const índice= 3;
// A name se le va a asignar una dirección de memoria que contendra los valores de firstName y lastName
const name={
    firstName:'Alejo',
    lastName:'Passe',
    };

mostrar(name,índice, puedeMostrar);

function mostrar(mostrarName,times,contin){
    if (contin){
        for (let i=1;i<=índice;i++){
            console.log(`${i}° of ${índice}°: ${name.lastName},${name.firstName}`)
        };
    };
};


