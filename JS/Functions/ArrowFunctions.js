//Es la forma más moderna y concisa que tiene JS para escribir funciones
//Son anónimas
//En caso de que tenga una sola línea, no se usa ni corchetes ni return
const sayHi =(name, saludo ='Bienvenido') => `${name}, ${saludo}`;

console.log (sayHi('Alejo'));

const sayHi2 = (names, saludo = 'Bienvenido') => {
    if (typeof names === 'string') {
        return `${names}, ${saludo}` ;
    }
    else if (typeof names === 'object') {
        return sayHi2(`${names.name} ${names.lastname}`, saludo);
    }
}
console.log (sayHi2 ({name: 'Alejo', lastname: 'Passe'}));

//No puede utilizarse como métodos ni constructores ya que no funcionan al invocarlas con new
