// Funciones que se encuentran dentro de un objeto y permiten acceder a sus propiedades

const person = {
    firstName: 'Alejo',
    lastName: 'Passe',
    birthDate: new Date('2003-06-02'),
    getAge() {
        return Math.floor((new Date() - this.birthDate.getTime()) / 3.15576e10);
    },
    getAgeToDate(someDate) {
        return Math.floor((someDate - this.birthDate.getTime()) / 3.15576e10);
    },
    hobbies: ['Voleyball', 'Football', 'Basketball'],
    address: {
        street: 'Francia 1658',
        city: {
            codPost: 2000,
            name: 'Rosario',
        },
        state: {
            code: 100,
            name: 'Santa Fe',
        },
        country: 'Argentina',
        getFullAddress() {
            return `${this.street}, ${this.city.name}, ${this.state.name},${this.country}`;
        },
    },
};
// El elemento this hace referencia al objeto en el que me encuentro, en este caso, hace referencía a address
console.log(person.address.getFullAddress());
console.log(person.getAge());
console.log(person.getAgeToDate(new Date('2020-01-01')));