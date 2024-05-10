//Significa que la declaración de la función es llevada al comienzo del archivo
hoisting ('This is hoisting');

// NotHoisting ('This is not hoisting'); 

function hoisting (text) {
    console.log(text);
}

//Las siguientes líneas van a tirar un error de sintaxis, ya que no son hoisteadas
//const NotHoisting = function (text) {
//    console.log(text); }