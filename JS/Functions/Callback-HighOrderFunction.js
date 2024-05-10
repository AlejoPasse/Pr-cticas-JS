
//Esto es muy utilizado en asincronia de JS

//Callback es una función que se pasa como argumento a otra función para ser ejecutada al finalizar su ejecución

function doSomething(callback){
    console.log('Doing something...');
    callback();
}

function sayHello(){
    console.log('Hello');
}

doSomething(sayHello);